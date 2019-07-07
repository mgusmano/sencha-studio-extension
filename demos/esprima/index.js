//http://esprima.org/
var program = `
Ext.define('MyAppName.view.personnel.PersonnelView', {
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    title: "bbb",
    requires: ['Ext.layout.Fit'],
    controller: {
      type: 'personnelviewcontroller'
    },
    viewModel: {
      type: 'personnelviewmodel'
    },
    store: {
      type: 'personnelviewstore'
    },
    columns: [{
      text: 'Name',
      dataIndex: 'name',
      width: 100,
      cell: {
        userCls: 'bold'
      }
    }, {
      text: 'Email',
      dataIndex: 'email',
      width: 230
    }, {
      text: 'Phone',
      dataIndex: 'phone',
      width: 150
    }],
    listeners: {
      select: 'onItemSelected'
    }
});
`

var Eparser = require('./eparser');
var p = new Eparser(program);
p.addRootProperty('marcg', 'hi2')
p.changeRootProperty('title', 'changedtitle')
p.addColumn('Title', 'title')
var code = p.generate()
console.log(code)

// return


// //properties.push(newProperty('marcg', 'hi'));
// changeProperty(properties, 'xtype', 'changedxtype')
// const newCode = escodegen.generate(ast);
// console.log(newCode);

// var ast = esprima.parse(program)
// var className = ast.body[0].expression.arguments[0].value
// var properties = ast.body[0].expression.arguments[1].properties
// //console.log(properties)


// var c = properties.find(o => o.key.name === 'columns')
// columnsArray = c.value.elements

// //.elements.properties
// //console.log(columnsArray)
// var newCol = newColumn('Title', 'title')
// console.log(newCol)
// columnsArray.push(newCol)
// //return



//let aColumn = properties.find(o => o.type === 'ObjectExpression')
//.properties.key.name;
//console.log(aColumn)


//var columns = ast.body[0].expression.arguments[1].properties[0]
//console.log(columns)
//.value.elements
//let columnsAst = columns.find(o => o.key.name === 'columns').value.elements;

//console.log(columnsAst)



// var program2 = `const answer = 42`;
// var t = esprima.tokenize(program);
// console.log(t);
// var p = esprima.parseScript(program);
// console.log(p);
// var p2 = esprima.parse(program);
// console.log(p2);