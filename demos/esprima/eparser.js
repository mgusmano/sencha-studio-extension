var esprima = require('esprima');
var escodegen = require('escodegen');

module.exports =  class Eparser {
    constructor(program) {
        this.program = program;
        this.ast = esprima.parse(program)
        this.className = this.ast.body[0].expression.arguments[0].value
        if (this.ast.body[0].expression.arguments[1] == 'ObjectExpression') {
            throw 'Second parameter of Ext.define not a Javascript object'
        }
        this.properties = this.ast.body[0].expression.arguments[1].properties
    }

    addRootProperty(name, value) {
        this.properties.push(this.newProperty(name, value));
    }

    generate() {
        return escodegen.generate(this.ast);
    }

    addColumn(text, dataIndex) {
        var c = this.properties.find(o => o.key.name === 'columns')
        if (c.value.type != 'ArrayExpression') {
            throw 'Column is not an array of objects'
        }
        var columnsArray = c.value.elements
        var newCol = this.newColumn(text, dataIndex)
        columnsArray.push(newCol)
    }

    newColumn(text, dataIndex) {
        var col = `{
            "type": "ObjectExpression",
            "properties": [
                {
                    "type": "Property",
                    "key": {
                        "type": "Identifier",
                        "name": "text"
                    },
                    "computed": false,
                    "value": {
                        "type": "Literal",
                        "value": "${text}",
                        "raw": "'${text}'"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                },
                {
                    "type": "Property",
                    "key": {
                        "type": "Identifier",
                        "name": "dataIndex"
                    },
                    "computed": false,
                    "value": {
                        "type": "Literal",
                        "value": "${dataIndex}",
                        "raw": "'${dataIndex}'"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                }
            ]
        }`
        return JSON.parse(col)
    }

    newProperty(name, value) {
        var prop = {
            "type": "Property",
            "key": {
                "type": "Identifier",
                "name": name
            },
            "computed": false,
            "value": {
                "type": "Literal",
                "value": value,
                "raw": value
            },
            "kind": "init",
            "method": false,
            "shorthand": false
        }
        return prop
    }
    
    changeRootProperty(name, value) {
        let obj = this.properties.find(o => o.key.name === name);
        obj.value.value = value
        obj.value.raw = value
    }

}