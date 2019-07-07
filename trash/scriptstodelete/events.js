window.addEventListener('filesloaded', function(e) {
    Ext.onReady(function() {

window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent
    switch (message.command) {
        case 'blur':
            document.body.style.filter = "blur(3px)";
            break;
        case 'visibletexteditors':
            console.log('here')
            var visibletexteditors = document.getElementById('visibletexteditors');
            visibletexteditors.data = message.data;
            break;
    }
});


// window.addEventListener('message', event => {

//     const message = event.data; // The JSON data our extension sent

//     switch (message.command) {
//         case 'visibletexteditors':
//             console.log('here')
//             var visibletexteditors = document.getElementById('visibletexteditors');
//             visibletexteditors.data = e.detail.data;
//             break;
//     }
// });



// window.addEventListener('visibletexteditors', function(e) {
//     console.log('here')
//     var visibletexteditors = document.getElementById('visibletexteditors');
//     visibletexteditors.data = e.detail.data;
// });


window.addEventListener('configsEvent', function(e) {
    var configs = document.getElementById('configs');
    configs.data = e.detail.data;
    // var dataview = document.getElementById('dataview');
    // dataview.data = e.detail.data;
});



window.addEventListener('classesEvent', function(e) {
    var classes = document.getElementById('classes');
    classes.data = e.detail.data;
});


window.addEventListener('initialconfigsEvent', function(e) {
    var initialconfigs = document.getElementById('initialconfigs');
    initialconfigs.data = e.detail.configs;
});


window.addEventListener('viewconfigsEvent', function(e) {
    var viewconfigs = document.getElementById('viewconfigs');
    viewconfigs.data = e.detail.configs;
});

window.addEventListener('ultimateEvent', function(e) {
    var ultimateconfigs = document.getElementById('ultimateconfigs');
    ultimateconfigs.data = e.detail.configs;
});

window.addEventListener('allEvent', function(e) {
    var allconfigs = document.getElementById('allconfigs');
    allconfigs.data = e.detail.configs;
});

window.addEventListener('xtypeEvent', function(e) {
    document.getElementById("xtype").innerHTML = e.detail.xtype;
});

window.addEventListener('supersEvent', function(e) {
    var supers = document.getElementById('supers');
    supers.data = e.detail.supers;
});

});
});

// window.addEventListener('configsEvent', function(e) {
//     var pe = document.getElementById('pe');
//     // var a = [
//     //     {"className": "text", "field": "element", "value": "title1", "hint": "hint"},
//     //     {"className": "text", "field": "element", "value": "title2", "hint": "hint"},
//     //     {"className": "text", "field": "element", "value": "title3", "hint": "hint"}
//     // ]
//     pe.data = e.detail.configs;

//     // var store = Ext.create('Ext.data.Store', {
//     //     autoLoad: true,
//     //     proxy: {
//     //         type: 'memory',
//     //         data: e.detail.configs
//     //     },
//     // });
//     //app.listCmp.setStore(store);
// });

