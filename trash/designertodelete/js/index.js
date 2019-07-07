var vscode;
var prevElement;
var currentElementSelected;

var supers = [];
var configurators = [];
var allconfigs = [];
//var initialconfigs = [];
var ultimate = [];

window.left = {}

window.left.dragover = function(event) {
    event.preventDefault();
};

window.left.drop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
};

window.left.dragstart = function(event) {
    event.dataTransfer.setData("text", event.target.id);
}

window.addEventListener('viewportloaded', function(e) {
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


    viewport.onmousemove = function(e){
        if (prevElement != undefined) {
            prevElement.classList.remove("highlight");
        }
        var elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
        var currElement = elementMouseIsOver
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        currElement.classList.add("highlight");
        prevElement = currElement;
    };

    viewport.onmouseup = function(e){
        if (currentElementSelected != undefined) {
            currentElementSelected.classList.remove("highlightselect");
        }
        currentElementSelected = prevElement

        var components = [
            "x-panel",
            "x-button",
            "x-list",
            "x-dataview",
            "x-titlebar",
            "x-container",
            "x-field",
            "x-searchfield",
            "x-textfield",
            "x-component",
            "x-gridcolumn",
            "x-paneltitle"
        ];
        var classes = currentElementSelected.className.split(" ");
        var i;
        for (i = 0; i < classes.length; i++) { 
            if (components.includes(classes[i])) {
                break;
            }
        }

        var s = ""
        var keys = ""
        var keyVal = "set"
        var keysArray = [];
        var configsObject = [];
        var displayValue;
        var value;
        ultimate = [];

        var rect = currentElementSelected.getBoundingClientRect();
        var x = rect.left
        var y = rect.top
        var w = rect.right - rect.left
        var h = rect.bottom - rect.top
        var top = y - 20
        var height = h + 20

        var infobox = document.getElementById('infobox');
        infobox.style.height = h + 'px';

        var focusbox = document.getElementById('focusbox');
        focusbox.style.left = x + 'px';
        focusbox.style.top = top + 'px';
        focusbox.style.width = w + 'px';
        focusbox.style.height = height + 'px';

        var o = Ext.getCmp(currentElementSelected.id)
        var theClass = Ext.getClass(o);
        window.o = o;
        var xtype = o.xtype;

        var docs = getDocs(xtype);

        var theSupers = []
        var allconfigs = []
        var ultimateconfigs = []

        getSuper(theClass, theClass.$config, theSupers, allconfigs, initialconfigs, ultimateconfigs, docs);

        window.dispatchEvent(new CustomEvent('xtypeEvent', {detail:{xtype:xtype}}));
        window.dispatchEvent(new CustomEvent('supersEvent', {detail:{supers:theSupers}}));
        window.dispatchEvent(new CustomEvent('ultimateEvent', {detail:{configs:ultimateconfigs}}));
        window.dispatchEvent(new CustomEvent('allEvent', {detail:{configs:allconfigs}}));
    };

    viewport.ondragover = function(event){
        event.preventDefault();
        if (prevElement != undefined) {
            prevElement.classList.remove("highlight");
        }
        var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
        var currElement = elementMouseIsOver
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        currElement.classList.add("highlight");
        prevElement = currElement;
    };
    
    viewport.ondrop = function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
        var currElement = elementMouseIsOver
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        //currElement.classList.add("highlight");
        var o = Ext.getCmp(currElement.id)
        var theClass = Ext.getClass(o);
        var x
        var prefix = theClass.$className.substring(0, 3);

        var classname; 
        if (prefix == 'Ext') {
            classname = theClass.$className
        }
        else {
            classname = theClass.superclass.$className
        }
        document.getElementById("m-target").innerHTML = o.xtype
        document.getElementById("m-classname").innerHTML = classname
        document.getElementById("m-xtype").innerHTML = data

        const likeIt = document.getElementById('like-it');
        const modal = document.getElementById('demo-modal');
        modal.showModal(); 
    
        likeIt.addEventListener('click', () => {
            modal.close('Like it');
            vscode.postMessage({
                command: 'columnSet',
                data: {text: 'the phone', dataIndex: 'phone'}
            });
        });
    };





});

function stringify(o, root){
    if (o === null ||
        o === undefined ||
        o === true ||
        o === false 
    ) {
        return o;
    } 
    if(typeof o == 'string' || typeof o == 'number') {
        if (root != false) {
            return o;
        }
    }
    if(typeof o !== "object" || Array.isArray(o)){
        return JSON.stringify(o);
    }
    let props = Object
        .keys(o)
        .map(key => `${key}: ${stringify(o[key], false)}`)
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
    if (xtype == undefined) {
        return docs;
    }
    var Xtype = xtype.charAt(0).toUpperCase() + xtype.slice(1);
    var componentClass = eval('Ext' + Xtype + 'Def');

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