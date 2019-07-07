var prevElement;
var currentElementSelected;
const vscode = acquireVsCodeApi();

Ext.on("viewportready", function() {
    console.log('viewportready');

    var global;
    try {
      global = Function('return this')() || (42, eval)('this');
    } catch(e) {
      global = window;
    }

    //var obj = global['ExtGridDef']


    // console.log(ExtGridDef)
    // console.log(window['ExtGridDef'].xtype)
    // console.log(ExtGridDef.properties)
 

//    console.log(ExtGridComponent)


    // console.log(typeof Ext.Component)
    // console.log(typeof Object)
    // console.log(typeof String)

    // var x = 'test'
    // console.log(typeof x)


    // var p = {
    //     "activeChildTabIndex": ['number'],
    //     "activeItem": [Ext.Component,Object,String,Number]
    // }

    // console.log(p)
    // console.log(typeof p.activeChildTabIndex[0])

    // var a = 1
    // console.log(typeof a)

    // var b = {a:1,b:2}
    // console.log(typeof b)

    // var c = 'test'
    // console.log(typeof c)

    // var d = ['a','b']
    // console.log(typeof d)

    // debugger



    var pb = document.getElementById("PropertiesButton")
    if (pb != null) {
        document.getElementById("PropertiesButton").click(); 
    }

    var headerHeight = 50;
    var footerHeight = 50;
    var leftsideWidth = 250;
    var rightsideWidth = 250;
    var paddingMain = 10;
    var viewport = document.getElementById("ext-viewport");
    var w; w = leftsideWidth + rightsideWidth + paddingMain + paddingMain;
    var h; h = headerHeight + footerHeight + paddingMain + paddingMain;
    var t; t = headerHeight + paddingMain;
    var l; l = leftsideWidth + paddingMain;
    viewport.style.width = `calc(100% - ${w}px)`;
    viewport.style.height = `calc(100% - ${h}px)`;
    viewport.style.top = `${t}px`;
    viewport.style.left = `${l}px`;

    setTimeout(function(){ 
        var bodyEl = document.getElementsByClassName("x-viewport-body-el");
         var rootId = bodyEl[0].childNodes[0].id;
        var o = Ext.getCmp(rootId);
        var c = Ext.getClass(o)
        var rootArray = [];
        getChildren(o, '', rootArray);

        function getChildren(o, parentId, parentObject) {
            var rootItem = {a1_id: o.id, a2_class: c, a3_cmp: o, a4_class_$config_values: c.$config.values, a5_class_listeners: c.listeners, a9_xtype: o.xtype, parentId: parentId, a4_config: o.config, a5_initialConfig: o.initialConfig, a6_children: []};
            if (o.items != undefined) {
                o.items.items.forEach(function (currentValue,index,arr) {
                    getChildren(currentValue, o.id, rootItem.a6_children)
                })

            }
            parentObject.push(rootItem)
        }

        console.dir(rootArray)
    }, 50);


    // var rootElement = document.getElementsByClassName("x-viewport-body-el")[0].childNodes;
    // console.dir(rootElement)
    // debugger
    // console.log(rootElement[0])


    viewport.addEventListener('mouseup', e => {
 
        if (currentElementSelected != undefined) {
            currentElementSelected.classList.remove("highlightselect");
        }
        //var elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
        currentElementSelected = prevElement
        currentElementSelected.classList.add("highlightselect");

        //console.log(currElement.className)
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

        var o = Ext.getCmp(currentElementSelected.id)
        window.o = o;


        var Xtype = o.xtype.charAt(0).toUpperCase() + o.xtype.slice(1);
        Xtype = 'Grid'
        var obj = eval('Ext' + Xtype + 'Def')
        console.log(obj.properties)


        var xtype = o.xtype;
        window.dispatchEvent(new CustomEvent('xtypeEvent', {detail:{xtype:xtype}}));

        var theClass = Ext.getClass(o);
//        console.log('theClass')
//        console.dir(theClass)
//        console.log(theClass.mixin())


        var supers = [];
        var configurators = [];
        var allconfigs = []
        //var hasown = []
        function getSuper(c, configurator) {
            configurators.push({className: c.$className, configurator: configurator,  configuratorconfigs: configurator.configs})
            for (var configName in configurator.configs) {
                if (configurator.configs.hasOwnProperty(configName)) {

                var getter = 'get' + configName.charAt(0).toUpperCase() + configName.slice(1);
                var value = "N/A"
                var write = false
                try {

                    var getterString = c[getter].toString();
                    console.log(getterString)
                    if (!getterString.includes('is a write-only config.')) {
                        //if (o[getter]() != undefined) {
                            write = true
                            value = c[getter]();
                        //}
                    }
                }
                catch(e) {
                    console.log('error...')
                //    value = e.toString()
                //    console.log(value)
                }
//                if (value != null) {
//                    var config = { configName: configName, value: value, write: write }



//function searchObj (obj, query) {

console.log('configName')
console.log(configName)

var types = obj.properties[configName]
var type
if (types != null) {
    type = types[0].toString()
}
else {
    type = undefined
}
//console.log(types)

//     var types
//     for (var prop in obj.properties) {
//         console.log(prop)
//  //      var value = obj[prop];

//         // if (typeof value === 'object') {
//         //     searchObj(value, query);
//         // }

//         if (configName == prop) {
//             types = obj[prop]
//             break;

//         }

//     }

//}



                    allconfigs.push({configName: configName, className: c.$className, value: value, write: write, types: types, type: type})
//                    configs.push(config);
                    // if(c.$config != undefined) {
                    //     getConfigs(c)
                    // }
                    // else {
                    //     configs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
                    //     window.dispatchEvent(new CustomEvent('configsEvent', {detail:{configs:configs}}));
                    // }
//                }




                    //allconfigs.push({configName: configName, className: c.$className})
                //}
                // else {
                //     if (c.$className == 'MyAppName.view.personnel.MyView') {
                //         hasown.push({configName: property, className: c.$className})
                //     }
                 }
            }

            // configurator.configs.forEach(function (configValue,index,arr) {
            //     allconfigs.push(configValue.name)
            // })

            //supers.push({name: c.$className, configs: theConfigs})
            supers.push({name: c.$className})

            if(c.superclass != undefined) {
                getSuper(c.superclass, configurator.superCfg)
            }
            else {
                console.log(supers)
                console.dir(configurators)
                //allconfigs.sort()


                // console.log('hasown')
                // hasown.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0)); 
                // console.dir(hasown)

                //var configList = []
                // configs.forEach(function (configsValue,index,arr) {
                //     configsValue.config.configs.forEach(function (configs2Value,index,arr) {
                //         console.log(configs2Value)
                //         //configList.push[{ name: name, value: value, write: write }]
                //     })

                // })


                console.log('allconfigs')
                allconfigs.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0)); 
                console.log(allconfigs)
                console.table(allconfigs)
         //configsObject.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
         window.dispatchEvent(new CustomEvent('configsEvent', {detail:{configs:allconfigs}}));


                //window.dispatchEvent(new CustomEvent('supersEvent', {detail:{supers:supers, configs:configs}}));
                window.dispatchEvent(new CustomEvent('supersEvent', {detail:{supers:supers}}));
            }
        }
        getSuper(theClass,theClass.$config);


    //     function getConfigs(c) {
    //         debugger;
    //         console.dir(c)

    //         for (var name in c.$config.configs) {

    //             var getter = 'get' + name.charAt(0).toUpperCase() + name.slice(1);
    // //            keysArray.push(getter);
    //             var value = ""
    //             var write = true
    //             try {
    //                 console.log(getter)
    //                 var getterString = c[getter].toString();
    //                 if (!getterString.includes('is a write-only config.')) {
    //                     //if (o[getter]() != undefined) {
    //                         write = false
    //                         value = c[getter]();
    //                     //}
    //                 }
    //             }
    //             catch(e) {
    //                 console.log('error...')
    //                 value = e.toString()
    //                 console.log(value)
    //             }
    //             if (value != null) {
    //                 var config = { name: name, value: value, write: write }
    //                 configs.push(config);
    //                 if(c.$config != undefined) {
    //                     getConfigs(c)
    //                 }
    //                 else {
    //                     configs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    //                     window.dispatchEvent(new CustomEvent('configsEvent', {detail:{configs:configs}}));
    //                 }
    //             }
    //         }
    //     }
//        console.dir (theClass)
        //debugger
        //getConfigs(theClass);


//         for (var name in theClass.$config.configs) {
//             var getter = 'get' + name.charAt(0).toUpperCase() + name.slice(1);
// //            keysArray.push(getter);
//             var value = ""
//             var write = true
//             try {
//                 var getterString = o[getter].toString();
//                 if (!getterString.includes('is a write-only config.')) {
//                     //if (o[getter]() != undefined) {
//                         write = false
//                         value = o[getter]();
//                     //}
//                 }
//             }
//             catch(e) {
//                 console.log('error...')
//                 //value = e.toString()
//             }
//             if (value != null) {
//                 var config = { name: name, value: value, write: write }
//                 configsObject.push(config);
//             }
//         }


//         configsObject.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
//         window.dispatchEvent(new CustomEvent('configsEvent', {detail:{configs:configsObject}}));



      });

    viewport.addEventListener("mousemove", function(e){
        if (prevElement != undefined) {
            prevElement.classList.remove("highlight");
        }
        var elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
        var currElement = elementMouseIsOver
//        console.log(currElement.className)
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        currElement.classList.add("highlight");
        prevElement = currElement;
   });
}); //viewportready

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


window.addEventListener('xtypeEvent', function(e) {
    document.getElementById("xtype").innerHTML = e.detail.xtype;
});

window.addEventListener('configsEvent', function(e) {
    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        proxy: {
            type: 'memory',
            data: e.detail.configs
        },
    });
    app.listCmp.setStore(store);
});

window.addEventListener('supersEvent', function(e) {
    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        proxy: {
            type: 'memory',
            data: e.detail.supers
        },
    });
    app.supersCmp.setStore(store);
});

window.app = {}

window.app.getInput = function(e) {
    console.log('getInput')
    // console.dir(e)
    // console.log(e.id)
    // console.log(e.value)
    var getFunction = 'set' + e.id.charAt(0).toUpperCase() + e.id.slice(1);
    window.o[getFunction](e.value)

    vscode.postMessage({
        command: 'propertySet',
        data: {name: e.id, value: e.value}
    });


    //e.target.value.length
}

window.app.listReady = (event) => {
    console.log('listReady')
    app.listCmp = event.detail.cmp;
    var tpl = `
    <div style="font-size:10px;background:#32373a;"><span style="display:inline-flex;width:90px;">{configName}</span>
        <input type="text" id="{configName}" value="{value}" oninput="app.getInput(this)">
    </div>
    <div>{type}</div>`
    app.listCmp.setItemTpl(tpl);
}

window.app.supersReady = (event) => {
    console.log('supersReady')
    app.supersCmp = event.detail.cmp;
    var tpl = '<div style="font-size:10px;background:#32373a;"><span style="display:inline-flex;width:90px;">{name}</span></div>'
    app.supersCmp.setItemTpl(tpl);
}

window.app.buttonReady = function(event) {
    window.app.buttonCmp = event.detail.cmp;
    window.app.buttonCmp.setText('ready')
    console.log('buttonReady')
}
window.app.buttonTap = function(event) {
    window.o.setText('tap');
    //window.app.buttonCmp.setText('tap')
    console.log('buttonClick')
}

// window.app.gridReady = (event) => {
//     console.log('gridReady')
//     app.gridCmp = event.detail.cmp;
//  //   lockedGrid.setStore(store);

//  //app.gridCmp.setPlugins={gridcellediting: {selectOnEdit: true}};
//  //plugins="{gridcellediting: {selectOnEdit: true}"

//     // app.gridCmp.setSelectable={
//     //     rows: false,
//     //     cells: true
//     // };
//     app.gridCmp.setColumns([
//         {text:'name',dataIndex:'name', flex: 1, cell: {encodeHtml: false}, 
//             renderer: function (value, record) {
//                 return '<span style=\"font-size:10px;color:white;\">' + value + '</span>'
//             }
//         },
//         {text:'value',dataIndex:'value', editable: true, cell: {encodeHtml: false}, 
//             renderer: function (value, record) {
//                 return '<span style=\"font-size:10px;color:gray;\">' + value + '</span>'
//             }
//         }
//     ]);
// }



    // var left = document.getElementById("left");
    // w = leftsideWidth;
    // h = headerHeight + footerHeight;
    // t = headerHeight;
    // l = 0;
    // left.style.width = `${w}px`;
    // left.style.height = `calc(100% - ${h}px)`;
    // left.style.top = `${t}px`;
    // left.style.left = `${l}px`;