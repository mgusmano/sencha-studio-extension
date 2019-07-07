class Left extends HTMLElement {

    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        //const template = document.createElement('template');
        //template.innerHTML = `${this.html}`;
        //this.shadowRoot.appendChild(template.content.cloneNode(true));
         //this.html; //(template.content.cloneNode(true));

    }

    connectedCallback() {
        this.innerHTML = this.html;
    }


    get html() { return `
<z-panel width="300px" flexdirection="column" class="left">
    <z-panel>
        <z-tabs style="flex:1">
            <z-tabpanel tabname="drag">
                <div style="padding:8px;margin-bottom:10px;">xtype: <span id="xtype" ></span></div>
                <ol>
                    <li id="grid" draggable="true" ondragstart="left.dragstart(event)">Grid</li>
                    <li id="column" draggable="true" ondragstart="left.dragstart(event)">Column</li>
                    <li id="button" draggable="true" ondragstart="left.dragstart(event)">Button</li>
                </ol>
            </z-tabpanel>
            <z-tabpanel tabname="drop">
                <div style="padding:8px;margin-bottom:10px;">xtype: <span id="xtype" ></span></div>
                <ol>
                    <li id="grid" draggable="true" ondragstart="left.dragstart(event)">Grid2</li>
                    <li id="column" draggable="true" ondragstart="left.dragstart(event)">Column</li>
                    <li id="button" draggable="true" ondragstart="left.dragstart(event)">Button</li>
                </ol>
            </z-tabpanel>
        </z-tabs>
    </z-panel>
    <z-splitter></z-splitter>
    <z-panel height="150px" flexdirection="column" padding="8px">
        a<z-dataview id="allconfigs"></z-dataview>b
    </z-panel>
</z-panel>
    `}


//     attributeChangedCallback(name, oldValue, newValue) {}
}
window.customElements.define('z-left', Left)
