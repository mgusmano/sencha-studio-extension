function focusbtnClick() {
    document.getElementById("focus-modal").showModal(); 
}

// function openTab(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

window.app = {}

window.app.getInput = function(id, value) {
    var getFunction = 'set' + id.charAt(0).toUpperCase() + id.slice(1);
    vscode.postMessage({
        command: 'propertySet',
        data: {name: id, value: value}
    });
    window.o[getFunction](value);
}

window.app.supersReady = (event) => {
    app.supersCmp = event.detail.cmp;
    var tpl = '<div style="font-size:10px;background:#32373a;"><span style="display:inline-flex;width:90px;">{name}</span></div>'
    app.supersCmp.setItemTpl(tpl);
}

window.app.buttonReady = function(event) {
    window.app.buttonCmp = event.detail.cmp;
    window.app.buttonCmp.setText('ready')
}
window.app.buttonTap = function(event) {
    window.o.setText('tap');
    //window.app.buttonCmp.setText('tap')
}
