class ZTabsClassic extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `${this.html}${this.style}${this.host}`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById('tab1').addEventListener('click', (e) => this.openCity(e, 'Components'));
        this.shadowRoot.getElementById('tab2').addEventListener('click', (e) => this.openCity(e, 'Configs'));
        this.shadowRoot.getElementById('tab3').addEventListener('click', (e) => this.openCity(e, 'Other'));
    }

    get html() { return `
<div class="tabcontainer">
    <div class="tabheader">
        <button id="tab1" class="tablinks">Components</button>
        <button id="tab2" class="tablinks">Configs</button>
        <button id="tab3" class="tablinks">Other</button>
    </div>
    <div id="Components" class="tabcontent">
        <h3>Components</h3>
        <ol>
            <li id="button" draggable="true" ondragstart="left.dragstart(event)">Button</li>
            <li id="column" draggable="true" ondragstart="left.dragstart(event)">Column</li>
            <li id="container" draggable="true" ondragstart="left.dragstart(event)">Container</li>
            <li id="dataview" draggable="true" ondragstart="left.dragstart(event)">Dataview</li>
            <li id="grid" draggable="true" ondragstart="left.dragstart(event)">Grid</li>
            <li id="panel" draggable="true" ondragstart="left.dragstart(event)">Panel</li>
            <li id="tabpanel" draggable="true" ondragstart="left.dragstart(event)">Tabpanel</li>
            <li id="toolbar" draggable="true" ondragstart="left.dragstart(event)">Toolbar</li>
        </ol>
    </div>
    <div id="Configs" class="tabcontent">
        <h3>Configs</h3>
    </div>
    <div id="Other" class="tabcontent">
        <h3>Other</h3>
    </div>
</div>
    `}

    get host() { return `
<style>
:host {
    height: 100%;
    width: 100%;
    display: inline-block;
    contain: content;
    background: papayawhip;
    margin: 0;
}
    `}

    get style() { return `
<style>

.tabcontainer {
    display: flex;
    flex-direction: column;
    background-color: rgb(80, 80, 80);
    height: 100%;
}

.tabheader {
    overflow: hidden;
    border-bottom: 1px solid rgb(50, 50, 50);
    padding: 5px 5px 0 5px;
    background:rgb(80,80,80);
}

.tabcontent {
    padding: 15px;
    display: none;
    flex: auto;
    background: rgb(50, 50, 50);
    color: white;
    border: 0px solid #ccc;
    border-top: none;
}

/* rgb(70,74,77) */

.tabheader button {
    background-color: inherit;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 12px;
    transition: 0.3s;
    font-size: 12px;
    }
    
.tabheader button:hover {
    background-color: #ddd;
    color: black;
    border-radius: 4px 4px 0 0;
}
    
.tabheader button.active {
    xbackground: linear-gradient(#323639, #32373a);
    background: var(--vscode-tab-activeBackground);
    border-radius: 4px 4px 0 0;
    border-left-color: #24282b;
    border-right-color: #24282b;
    color: #fff;
    font-weight: normal;
}


</style>
    `}

    connectedCallback() {
        this.shadowRoot.getElementById('tab1').click();
    }

    openCity(evt, cityName) {
        // console.log('city')
        // console.log(cityName)
        // console.log(evt)
        var i, tabcontent, tablinks;
        tabcontent = this.shadowRoot.querySelectorAll(".tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = this.shadowRoot.querySelectorAll(".tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //this.shadowRoot.querySelector('.' + cityName).style.display = "block";
//        this.shadowRoot.querySelector('.tabcontent').style.display = "block";
        this.shadowRoot.getElementById(cityName).style.display = "block";

        evt.currentTarget.className += " active";
    }

}
window.customElements.define('z-tabsclassic', ZTabsClassic)
