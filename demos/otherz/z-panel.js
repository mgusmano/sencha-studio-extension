class ZPanel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('role', 'tabpanel');
        if (!this.id)
            this.id = `z-panel-generated-${zPanelCounter++}`;
    }
}
customElements.define('z-panel', ZPanel);
