var vscode;
var prevElement;
var currentElementSelected;

var supers = [];
var configurators = [];
var allconfigs = [];
//var initialconfigs = [];
var ultimate = [];

Ext.on("viewportready", function() {
    try {
        vscode = acquireVsCodeApi();
    }
    catch(e) {

    }



    var viewport = document.getElementById("ext-viewport");
    document.getElementById('content').appendChild(viewport);
    viewport.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.4)"

    Split({
        columnGutters: [
            {track: 1, element: document.querySelector('.split1')},
            {track: 3, element: document.querySelector('.split2')}
        ]
    })

    Ext.onReady(function() {
        var bodyEl = document.getElementsByClassName("x-viewport-body-el");
        var rootId = bodyEl[0].childNodes[0].id;
        var o = Ext.getCmp(rootId);
        window.o = o;
        var c = Ext.getClass(o)
        var classes = [];
        var configs = [];
        getSuper2(c.$config.superCfg, classes, configs)
        console.dir(classes)
        console.dir(configs)

        window.dispatchEvent(new CustomEvent('classesEvent', {detail:{data:classes}}));
        window.dispatchEvent(new CustomEvent('configsEvent', {detail:{data:configs}}));

        console.dir(c)
        var initialconfigs = getInitialConfigs(c)
        initialconfigs.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0)); 
        window.dispatchEvent(new CustomEvent('initialconfigsEvent', {detail:{configs:initialconfigs}}));

        const viewconfigs = initialconfigs.filter(element => element.set == 'yes');
        window.dispatchEvent(new CustomEvent('viewconfigsEvent', {detail:{configs:viewconfigs}}));
    });


    // setTimeout(function() {
    //     var bodyEl = document.getElementsByClassName("x-viewport-body-el");
    //     var rootId = bodyEl[0].childNodes[0].id;
    //     var o = Ext.getCmp(rootId);
    //     window.o = o;
    //     var c = Ext.getClass(o)

    //     var initialconfigs = getInitialConfigs(c)
    //     initialconfigs.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0)); 
    //     window.dispatchEvent(new CustomEvent('initialconfigsEvent', {detail:{configs:initialconfigs}}));

    //     const viewconfigs = initialconfigs.filter(element => element.set == 'yes');
    //     window.dispatchEvent(new CustomEvent('viewconfigsEvent', {detail:{configs:viewconfigs}}));

    // }, 1000);




});