/* tslint:disable:quotemark */
"use strict";
import * as vscode from "vscode";
import * as path from "path";
let fs = require("fs");
import Eparser from "./Eparser"

import head from "./html/head"
import header from "./html/header"
import left from "./html/left"
import right from "./html/right"
import details from "./html/details"
import footer from "./html/footer"
import dialogs from "./html/dialogs"
import focusbox from "./html/focusbox"

import { any } from "prop-types";

export class HtmlProvider {
    eparser: Eparser;
    className: any;
    properties: any;
    //panel: any;
    filePath: any;
    fileName: any;
    public workspaceName: string;
    public workspaceRootPath: string;

    public constructor(private context: vscode.ExtensionContext) {
        this.workspaceName = vscode.workspace.name;
        this.workspaceRootPath = vscode.workspace.rootPath;
    }

    // public createWebviewPanel() {
    //     var panel = vscode.window.createWebviewPanel(
    //         'EXT',
    //         'Ext JS Designer',
    //         {
    //             viewColumn: vscode.ViewColumn.Beside,
    //             preserveFocus: true,
    //         },
    //         {
    //             enableCommandUris: true,
    //             enableScripts: true,
    //             enableFindWidget: true,
    //             retainContextWhenHidden: true,
    //             // localResourceRoots: [
    //             //     vscode.Uri.file(path.join(_extensionPath, 'web')),
    //             //     vscode.Uri.file(path.join(_extensionPath)),
    //             // ]
    //         }
    //     );
    //     return panel;
    // }

//     public setAppJS(workspaceName, extensionPath, filePath) {
//         var code = 
// `
// Ext.require (['${workspaceName}.*'])
// Ext.application({
//     name: 'EXTApp',
//     launch: function () {
//         Ext.Viewport.add([{xtype: 'container', html: 'Ext JS Designer is ready'}])
//         window.dispatchEvent(new MessageEvent('viewportloaded', {data: {initial: true, filePath: '${filePath}'}}));
//     }
// });
// `
// //var i = `${extensionPath}/src/app/app2.js`
// //    var filePath2 = i + `app2.js`
//     //var filePath2 = `${workspaceRootPath}/app2.js`

//         try {
//         fs.writeFileSync(`${extensionPath}/src/app/app2.js`, code);
//         }
//         catch(e) {
//             console.log(e)
//         }
//     }

//     public getHtmlInitial() {
//         var a = `
// <!DOCTYPE HTML>
// <html>
// ${head(this.workspaceName, this.workspaceRootPath)}
// <body>
//     <z-panel flexdirection="column">
//         ${header('initial')}
//         <z-panel flexdirection="row">
//             ${left()}
//             <z-splitter></z-splitter>
//             <z-panel id="content" padding="15px" background="lightgray"></z-panel>
//         </z-panel>
//         <z-splitter></z-splitter>
//         ${details('')}
//         ${footer(this.fileName)}
//     </z-panel>
//     ${focusbox()}
//     ${dialogs()}
// </body>
// </html>
// `
//         return a
//     }

    // public getEparser(view) {
    //     this.eparser = new Eparser(view)
    // }

//     public getHtmlEXT(_view, _filePath, _fileName) {
//         this.eparser = new Eparser(_view)
//         this.filePath = _filePath;
//         this.fileName = _fileName;
//         this.className = this.eparser.className;
//         this.properties = this.eparser.properties;
//         var xtype = this.eparser.getProperty('xtype');

//         //var i = `vscode-resource:/Volumes/BOOTCAMP/_aDesigner/sencha-studio-extension/src/designer/html/`
//         // <z-splitter></z-splitter>
//         // ${right()}
// console.log(_view)
//         var a = `
// <!DOCTYPE HTML>
// <html>
// ${head(this.workspaceName, this.workspaceRootPath)}
// <body>
//     <z-panel flexdirection="column">
//         ${header(this.fileName)}
//         <z-panel flexdirection="row">
//             ${left()}
//             <z-splitter></z-splitter>
//             <z-panel id="content" padding="15px" background="lightgray"></z-panel>
//         </z-panel>
//         <z-splitter></z-splitter>
//         ${details(_view)}
//         ${footer(this.fileName)}
//     </z-panel>
//     ${focusbox()}
//     ${dialogs()}
// </body>
// </html>
// `
//         return a
//     }

}

// <script>
//     ${_viewcontroller}
//     ${_viewmodel}
//     ${_viewstore}
//     ${_view}
//     Ext.application({
//         name: 'EXTApp',
//         launch: function () {
//             window.dispatchEvent(new CustomEvent('viewportloaded', {}));
//             Ext.Viewport.add([{xtype: '${xtype}'}])
//         }
//     });
// </script>





// <body style="background: blue;padding: 0;margin: 0;overflow: hidden;width: 100%;height: 100%;">
//     <div id="container" class="container">
//         <div class="header">${header(this.fileName)}</div>
//         <div id="left" class="left">${left()}</div>
//         <div id="split1" class="split1"></div>
//         <div id="content" class="content"></div>
//         <div id="split2" class="split2"></div>
//         <div class="right">${right()}</div>
//         <div class="footer">${footer(this.filePath)}</div>
//     </div>
//     ${focusbox()}
//     <div class="dialogs">${dialogs()}</div>
// </body>
