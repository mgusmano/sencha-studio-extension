class HTMLBaseElement extends HTMLElement {
    constructor(...args) {
      const self = super(...args)
      self.parsed = false // guard to make it easy to do certain stuff only once
      self.parentNodes = []
      return self
    }
  
    setup() {
      // collect the parentNodes
      let el = this;
      while (el.parentNode) {
        el = el.parentNode
        this.parentNodes.push(el)
      }
      // check if the parser has already passed the end tag of the component
      // in which case this element, or one of its parents, should have a nextSibling
      // if not (no whitespace at all between tags and no nextElementSiblings either)
      // resort to DOMContentLoaded or load having triggered
      if ([this, ...this.parentNodes].some(el=> el.nextSibling) || document.readyState !== 'loading') {
        this.childrenAvailableCallback();
      } else {
        this.mutationObserver = new MutationObserver(() => {
          if ([this, ...this.parentNodes].some(el=> el.nextSibling) || document.readyState !== 'loading') {
            this.childrenAvailableCallback()
            this.mutationObserver.disconnect()
          }
        });
  
        this.mutationObserver.observe(this, {childList: true});
      }
    }
  }


let zPanelCounter = 0;
let zTabCounter = 0;

const KEYCODE = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35,
  };

class ZTabs extends HTMLBaseElement {

    constructor() {
        super();
        this._onSlotChange = this._onSlotChange.bind(this);
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `${this.html}${this.style}${this.host}`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._tabSlot = this.shadowRoot.querySelector('slot[name=tab]');
        this._panelSlot = this.shadowRoot.querySelector('slot[name=panel]');
        //this._tabSlot.addEventListener('slotchange', this._onSlotChange);
        //this._panelSlot.addEventListener('slotchange', this._onSlotChange);
    }

    connectedCallback() {
        super.setup()
    }

    childrenAvailableCallback() {
        this.parsed = true
        return


//    connectedCallback() {
        this.addEventListener('keydown', this._onKeyDown);
        this.addEventListener('click', this._onClick);
        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'tablist');
        Promise.all([
            customElements.whenDefined('z-tab'),
            customElements.whenDefined('z-panel'),
        ])
            .then(_ => this._linkPanels());
    }

    _onSlotChange() {
        this._linkPanels();
    }
  
    _linkPanels() {
        const tabs = this._allTabs();
//        console.dir(tabs)
        tabs.forEach(tab => {
            const panel = tab.nextElementSibling;
            if (panel != null) {
                if (panel.tagName.toLowerCase() !== 'z-panel') {
                    console.error(`Tab #${tab.id} is not a` +
                    `sibling of a <z-panel>`);
                    return;
                }
                tab.setAttribute('aria-controls', panel.id);
                tab.classList.add("tabx");
                panel.setAttribute('aria-labelledby', tab.id);
            }

        });
        const selectedTab = tabs.find(tab => tab.selected) || tabs[0];
        this._selectTab(selectedTab);
    }
  
    _allPanels() {
        return Array.from(this.querySelectorAll('z-panel'));
    }
  
    _allTabs() {
        return Array.from(this.querySelectorAll('z-tab'));
    }
 
    _panelForTab(tab) {
//        console.dir(tab)
        const panelId = tab.getAttribute('aria-controls');
//        const panelId = tab.attributes.getNamedItem('aria-controls');
//        console.log(panelId)
        return this.querySelector(`#${panelId}`);
    }
  
    _prevTab() {
        const tabs = this._allTabs();
        let newIdx = tabs.findIndex(tab => tab.selected) - 1;
        return tabs[(newIdx + tabs.length) % tabs.length];
    }
  
    _firstTab() {
        const tabs = this._allTabs();
        return tabs[0];
    }
  
    _lastTab() {
        const tabs = this._allTabs();
        return tabs[tabs.length - 1];
    }
  
    _nextTab() {
        const tabs = this._allTabs();
        let newIdx = tabs.findIndex(tab => tab.selected) + 1;
        return tabs[newIdx % tabs.length];
    }
  
    reset() {
        const tabs = this._allTabs();
        const panels = this._allPanels();
  
        tabs.forEach(tab => tab.selected = false);
        panels.forEach(panel => panel.hidden = true);
    }
  
    _selectTab(newTab) {

        this.reset();
        const newPanel = this._panelForTab(newTab);
        if (!newPanel) {
            console.log('_selectTab return')
            return
            //throw new Error(`No panel with id ${newPanelId}`);
        }
        newTab.selected = true;
        newPanel.hidden = false;
        newTab.focus();
    }
  
    _onKeyDown(event) {
        if (event.target.getAttribute('role') !== 'tab')
            return;
        if (event.altKey)
            return;
        let newTab;
        switch (event.keyCode) {
            case KEYCODE.LEFT:
            case KEYCODE.UP:
                newTab = this._prevTab();
                break;
            case KEYCODE.RIGHT:
            case KEYCODE.DOWN:
                newTab = this._nextTab();
                break;
            case KEYCODE.HOME:
                newTab = this._firstTab();
                break;
            case KEYCODE.END:
                newTab = this._lastTab();
                break;
            default:
                return;
        }
        event.preventDefault();
        this._selectTab(newTab);
    }
  
    _onClick(event) {
        if (event.target.getAttribute('role') !== 'tab')
            return;
        this._selectTab(event.target);
    }


      get html() { return `

<slot class="slot" name="tab"></slot>

<slot class="slot" name="panel"></slot>

      `}

      get style() { return `
      <style>



      .tabbuttonsheader {
          overflow: hidden;
          border-bottom: 1px solid rgb(50, 50, 50);
          padding: 5px 5px 0 5px;
          background:rgb(80,80,80);
      }
      
      .tabcontentheader {
          padding: 15px;
          flex: auto;
          background: rgb(50, 50, 50);
          color: white;
          border: 0px solid #ccc;
          border-top: none;
      }
      
      .tabcontent {
          padding: 0;
          display: none;
          flex: auto;
          background: rgb(50, 50, 50);
          color: white;
          border: 0px solid #ccc;
          border-top: none;
      }
      
      .tabbuttonsheader button {
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
          
      .tabbuttonsheader button:hover {
          background-color: #ddd;
          color: black;
          border-radius: 4px 4px 0 0;
      }
          
      .tabbuttonsheader button.active {
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
      
          get host() { return `
      <style>
:host {
xdisplay: flex;
width: 100%;
height: 100%;
xflex-direction: column;
xflex-wrap: wrap;
}

.slot {
    background: yellow;
}


::slotted(.tabx) {
    border: 1px solid black;
    padding: 10px;
  }

::slotted(z-panel) {
   
flex-basis: 100%;
}

::slotted(z-panel) {
    padding: 20px;
    background-color: lightgray;
  }
  ::slotted(.tabx[selected]) {
    background-color: bisque;
  }
  ::slotted(z-tabs:not(:defined)),  ::slotted(z-tab:not(:defined)), ::slotted(z-panel:not(:defined)) {
    display: block;
  }








      </style>
          `}

    // attributeChangedCallback(name, oldValue, newValue) {
    // }

    disconnectedCallback() {
        this.removeEventListener('keydown', this._onKeyDown);
        this.removeEventListener('click', this._onClick);
      }



}
window.customElements.define('z-tabs', ZTabs)
