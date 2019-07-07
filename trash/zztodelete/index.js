Ext.application({
    name: 'EXTApp',
    launch: function () {
        Ext.Viewport.add([{xtype: 'personnelview'}])
    }
});
Ext.on("viewportready", function() {
    var viewport = document.getElementById("ext-viewport");
    var content = document.getElementById('content');
    document.getElementById('content').appendChild(viewport);
    viewport.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.4)"

    window.addEventListener('filesloaded', function(e) {
        var bodyEl = document.getElementsByClassName("x-viewport-body-el");
        var rootId = bodyEl[0].childNodes[0].id;
        var o = Ext.getCmp(rootId);
        window.o = o;
        var c = Ext.getClass(o)
        var classes = [];
        var configs = [];
        getSuper2(c.$config.superCfg, classes, configs)

        document.getElementById('classes').data = classes;
        document.getElementById('configs').data = configs;

     //   window.dispatchEvent(new CustomEvent('classesEvent', {detail:{data:classes}}));
    //    window.dispatchEvent(new CustomEvent('configsEvent', {detail:{data:configs}}));

        var initialconfigs = getInitialConfigs(c)
        initialconfigs.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0)); 
        //window.dispatchEvent(new CustomEvent('initialconfigsEvent', {detail:{configs:initialconfigs}}));
        document.getElementById('initialconfigs').data = initialconfigs;

        const viewconfigs = initialconfigs.filter(element => element.set == 'yes');
        //window.dispatchEvent(new CustomEvent('viewconfigsEvent', {detail:{configs:viewconfigs}}));

        document.getElementById('viewconfigs').data = viewconfigs;

    });

});

function stringify(obj_from_json, root){

    if (obj_from_json === null ||
        obj_from_json === undefined ||
        obj_from_json === true ||
        obj_from_json === false 
    ) {
        return obj_from_json;
    } 
    if(typeof obj_from_json == 'string' || typeof obj_from_json == 'number') {
        if (root != false) {
            return obj_from_json;
        }
    }
    if(typeof obj_from_json !== "object" || Array.isArray(obj_from_json)){
        return JSON.stringify(obj_from_json);
    }
    let props = Object
        .keys(obj_from_json)
        .map(key => `${key}: ${stringify(obj_from_json[key], false)}`)
        .join(", ");
    return `{${props}}`;
}

function getSuper2(superCfg, classes, configs, classLevel) {
    if (classLevel == undefined)
        {classLevel = 0;}
    else 
        {classLevel++;}
    var className = superCfg.cls.$className
    //console.log(className)
    var xtype = superCfg.cls.xtype
    classes.push({ name: className})
    var docs;
    try { docs = getDocs(xtype); }
    catch(e) { console.log('not found ' + xtype);docs = []; }

    var o
    var found
    var seq = 1;
    var sortable;
    //console.log(className + ' - superCfg.values: ' + Object.keys(superCfg.values).length)
    //console.dir(superCfg.values)
    sortable = []
    for (var configName in superCfg.values) {
        if (superCfg.values.hasOwnProperty(configName)) {
            sortable.push({configName: configName, configValue: superCfg.values[configName]});
        }
    }
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const configNameA = a.configName.toUpperCase();
        const configNameB = b.configName.toUpperCase();
      
        let comparison = 0;
        if (configNameA > configNameB) {
          comparison = 1;
        } else if (configNameA < configName) {
          comparison = -1;
        }
        return comparison;
      }
    sortable.sort(compare);

    //console.dir('sortable')
    //console.dir(sortable)

    for (var config in sortable) {

        found = docs.find(function(element) {
            return element.configName == sortable[config].configName;
        });
        if (found == undefined) {
            //console.log(sortable[config].configName + ' is missing')
            continue;
        }

        o = {}
        o.seq = seq;
        seq++;
        o.configName = sortable[config].configName;

        // found = docs.find(function(element) {
        //     return element.configName == sortable[config].configName;
        // });
        // if (found == undefined) {
        //     console.log(sortable[config].configName + ' is missing')
        //     o.type = '**not found**';
        //     o.numTypes = null;
        //     o.types = null
        // }
        // else {
            o.type = found.type;
            o.numTypes = found.num;
            o.types = found.types
        //}

        o.initialValue = stringify(sortable[config].configValue);
        o.className = className;
        o.classLevel = classLevel;
        o.xtype = xtype;

        configs.push(o);
    }

    if (superCfg.superCfg != null) {
        getSuper2(superCfg.superCfg, classes, configs, classLevel)
    }
}

function getDocs(xtype) {
    var docs = [];
//    console.log(xtype);
    if (xtype == undefined) {
        return docs;
    }

    var Xtype = xtype.charAt(0).toUpperCase() + xtype.slice(1);
//    Xtype = 'Grid' //hard coded for testing
    var componentClass = eval('Ext' + Xtype + 'Def');

    //console.dir(componentClass)
    //console.dir(componentClass.properties)

    var o = {}
    for (var property in componentClass.properties) {
        var prop = componentClass.properties[property];
        //console.log('propertyName: ' + property + ' propertyType: ' +  prop[0] + ' numberOfTypes: ' + prop.length + '  allTypes: ' +  prop.toString())
        o = {}
        o.configName = property;
        o.type = prop[0];
        o.num = prop.length;
        o.types = prop.toString();
        docs.push(o);


        // var types = obj.properties[configName]
        // var type
        // if (types != null) {
        //     type = types[0].toString()
        // }
        // else {
        //     type = "undefined"
        // }
    }


    return docs;
}

function getInitialConfigs(c) {
    var initialconfigs = [];
    for (var property in c.$config.values) {
        var set = 'no'
        if (c.$config.values.hasOwnProperty(property)) {
            set = 'yes'
        }
        var value = ''
        if (c.$config.values[property] != undefined) {
            if (typeof c.$config.values[property] == "string") {
                value = c.$config.values[property];
            }
            else {
                try {
                value = JSON.stringify(c.$config.values[property])
                }
                catch(e) {
                    value = ''
                }
            }
        }
        
        o = { configName: property, value1: value, set: set}
        initialconfigs.push(o)
    }
    return initialconfigs
}