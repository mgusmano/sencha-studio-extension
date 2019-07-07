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


class ZTabs1 extends HTMLBaseElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `${this.html}${this.style}${this.host}`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        super.setup()
    }

    childrenAvailableCallback() {
        this.parsed = true
        var me = this
        var contentID = 0
        var tabID
        var tabToClick = null

        //console.dir(this)


        var headerDiv = document.createElement("div");
        headerDiv.classList.add("tabbuttonsheader");
        this.shadowRoot.appendChild(headerDiv);

        var contentDiv = document.createElement("div"); 
        contentDiv.classList.add("tabcontentheader");
        this.shadowRoot.appendChild(contentDiv);

        var tabs = Array.from(this.querySelectorAll('z-tab'));

        tabs.forEach(function(tab, index, arr) {
            contentID++
            var tabitems = Array.from(tab.children);
            console.dir(tab)
            tabID = 'tab' + contentID
            if (tab.attributes.getNamedItem('selected') != null) {
                tabToClick = tabID
//                me.shadowRoot.getElementById('tab1').click()
            }
            var childDiv, childText
            tabitems.forEach(function(tabitem, index, arr){
                
                if (tabitem.nodeName == 'Z-TAB-HEADER') {
                    childDiv = document.createElement("button"); 
                    childDiv.classList.add("tablinks");
                    childDiv.id = tabID
                    childDiv.addEventListener('click', (e) => {
                        me.openTab(e, e.target.id + 'header')
                    });
                    childText = document.createTextNode(tabitem.innerText); 
                    childDiv.appendChild(childText);
                    headerDiv.appendChild(childDiv);
                }
                if (tabitem.nodeName == 'Z-TAB-CONTENT') {
                    childDiv = document.createElement("div"); 
                    childDiv.classList.add("tabcontent");
                    childDiv.id = tabID+ 'header'
                    childDiv.innerHTML = tabitem.innerHTML
                    contentDiv.appendChild(childDiv);
                }
            })
        })
        if (tabToClick != null) {
            this.shadowRoot.getElementById(tabToClick).click()
        }
      }

    openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = this.shadowRoot.querySelectorAll(".tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = this.shadowRoot.querySelectorAll(".tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        this.shadowRoot.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

      get html() { return `
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
          contain: content;
          margin: 0;
          display: flex;
          flex-direction: column;
          background-color: rgb(80, 80, 80);
          height: 100%;
      }
      </style>
          `}

    // attributeChangedCallback(name, oldValue, newValue) {
    // }

}
window.customElements.define('z-tabs1', ZTabs1)

// class ZTab extends HTMLElement {
//     constructor() {
//       super();
//     }

//     connectedCallback() {
//       this.setAttribute('role', 'ztab');
//     //   if (!this.id)
//     //     this.id = `z-tab-${howtoPanelCounter++}`;
//     }
//   }
//   customElements.define('z-tab', ZTab);

