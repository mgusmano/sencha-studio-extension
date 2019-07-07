class ZDataview extends HTMLElement {

    get data(){return JSON.parse(this.getAttribute('data'))};
    set data(data){this.setAttribute('data',JSON.stringify(data))};
    static get observedAttributes() {return ['data']}

    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      const template = document.createElement('template');
      template.innerHTML = `${this.html}${this.style}${this.host}`;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}

    get html() { return `
<div id="propertiesheader" class="propertiesheader"></div>
    `}

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'data':
                var rows = this.shadowRoot.querySelectorAll(".row")
                for (var i = 0; i < rows.length; i++) {
                    rows[i].remove()
                }
                var data = JSON.parse(newValue)
                var num = 0;
                for (var key in data) {
                    this.doIt(data[key],num);
                    num++;
                }
                break;
            default:
                break;
        }
    }

    doIt(o, num) {
        
        if (num == 0) {
            heading = document.createElement("DIV");
            heading.classList.add("row");
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    name = document.createElement("DIV");
                    name.classList.add("value");
                    name.innerHTML = key;
                    heading.appendChild(name);
                }
            }
            var propertiesheader = this.shadowRoot.getElementById('propertiesheader')
            propertiesheader.appendChild(heading);
        }

        row = document.createElement("DIV");
        row.classList.add("row");
        for (var key in o) {
            if (o.hasOwnProperty(key)) {
                name = document.createElement("DIV");
                name.classList.add("value");
                var value = o[key];
                if (value == null) {value = "null";}
                name.innerHTML = value;
                row.appendChild(name);
            }
        }

        var propertiesheader = this.shadowRoot.getElementById('propertiesheader')
        //this.shadowRoot.appendChild(row);
        propertiesheader.appendChild(row);
        return


        var className = o.className;
        var configName
        var thevalue

        if (o.configName != undefined) {
            configName = o.configName
        }
        else if (o.name != undefined) {
            configName = o.name
        } 
        else {
            configName =""
        }

        if (o.value1 != undefined) {
            thevalue = o.value1
        }
        else if (o.value2 != undefined)
        {
            thevalue = o.value2
        }
        else {
            thevalue = null
        }
        var rowClassName = "text";
        var heading;
        var row;
        var name;
        var value;
        var element;

        row = document.createElement("DIV");
        row.classList.add("row");

        name = document.createElement("DIV");
        name.innerHTML = configName;
        name.align = "right"
        name.classList.add("name");

        value = document.createElement("INPUT");
        value.classList.add("value");
        if (o.set == 'yes') {
            value.classList.add("set");
            value.setAttribute("oninput", "app.getInput(" + "this.id,this.value" + ")");
        }
        else {
            value.setAttribute("disabled", true);
        }
        if (thevalue == null) {
            value.setAttribute("hidden", true);
        }

        value.setAttribute("type", "text");
        value.setAttribute("id", configName);
        value.setAttribute("value", thevalue);

        row.appendChild(name);
        row.appendChild(value);
        var propertiesheader = this.shadowRoot.getElementById('propertiesheader')
        //this.shadowRoot.appendChild(row);
        propertiesheader.appendChild(row);

    }

    get style() { 
       var editorBackground = 'rgb(86,86,86)';
        return `
<style>

.propertiesheader {
    flex: auto;
}

.row {
    display: flex;
    padding: 1px 2px 0 2px;
    flex-flow: row nowrap;
//    justify-content: flex-end;
    align-items: center;
}

.name {
    font-size: 12px;
    background: red;
    padding-right: 10px;
    border: 2px solid rgb(56,56,56);
    color: white;
}

.value {
    xfont-size: 10px;
    xwidth: 50%;
    flex: 1;
    color: black;
    border: 1px solid rgb(56,56,56);
    background: rgb(186,186,186);
    border-radius: 3px;
}

input:focus {
    outline: none !important;
    border: 2px solid yellow;
    border-radius: 3px;
}

.set {
    background: white;
}

</style>
    `}

    get host() { 
        var editorBackground = 'var(--vscode-tab-activeBackground)'
        return `
<style>
:host {
    xheight: 100%;
    width:200px;
    display: flex;
    flex-direction: row;
    contain: content;
    background: ${editorBackground};
    margin: 0;
    overflow: auto;
}




</style>
    `}
}
window.customElements.define('z-dataview', ZDataview)
