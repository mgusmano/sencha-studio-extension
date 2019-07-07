import * as vscode from 'vscode';
import { commands } from "vscode";
import * as fs from 'fs';
import MyCodeLensProvider from "./myCodeLensProvider";
import { FileExplorer } from './fileExplorer';
import { StatusBarItem } from './types';
import { Logger } from './logger';
import { Tester } from './tester';
import Eparser from './Eparser';
import { MyExpress } from './MyExpress';

import head from "./html/head"
import header from "./html/header"
import left from "./html/left"
import right from "./html/right"
import details from "./html/details"
import footer from "./html/footer"
import dialogs from "./html/dialogs"
import focusbox from "./html/focusbox"

export default class ExtensionProvider {
    public _context: vscode.ExtensionContext;
    public _workspaceName: string;
    public _workspaceRootPath: string;
    public _extensionPath: string;
    public _panel: vscode.WebviewPanel;
    public _eparser: Eparser;
    private _dispose: any;

    public _buttonColor: string;

    public _filePath: any;
    public _fileName: any;
    public _code: any;
    public _xtype: string;
    public _currentTextDocument: any;
    public _numTextFiles: number = 0;

    public smallNumberDecorationType: any;
    public largeNumberDecorationType: any;

    constructor(context: vscode.ExtensionContext) {
        this._context = context;
        this._dispose = context.subscriptions;
        this._workspaceName = vscode.workspace.name;
        this._workspaceRootPath = vscode.workspace.rootPath;
        this._extensionPath = this._context.extensionPath;

        this.getConfiguration();
        this.registerMyExpress();
        this.registerCommands();
        this.registerLogger();
        this.registerProviders();
        this.registerWatcher();
        this.registerVSCodeEventListeners();
        this.registerViews();

        //this.registerStatusBarButtons();
        this.registerTextDecorations();
        //this.registerTests();

        this.startIt()
    }

    async startIt() {
    await vscode.commands.executeCommand("workbench.action.focusFirstEditorGroup")

    //if(vscode.window.activeTextEditor.document)
    //console.log('vscode.window.activeTextEditor')
//    console.log(vscode.window.activeTextEditor)
//    console.log(vscode.window.activeTextEditor.document.fileName)

    if ( vscode.window.activeTextEditor != undefined) {
        if (vscode.window.activeTextEditor.document.fileName != "tasks") {
            await commands.executeCommand('workbench.action.newGroupLeft');
        }
    }




    await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
    await vscode.commands.executeCommand('extension.showDesigner');

    await vscode.commands.executeCommand(`fileExplorer.tree.focus`);
    //Logger.channel.show();
    Logger.log('Ext JS Designer extension is now active!');

    // Logger.showInformationMessage('showInformationMessage');
    // Logger.showWarningMessage('showWarningMessage');
     // Logger.showErrorMessage('showErrorMessage');
}

    getConfiguration() {
        const config = vscode.workspace.getConfiguration()
        this._buttonColor = config.get('Ext JS Designer.buttonColor');
        // const showOnWindowOpen = config.get<string>('Ext JS Designer.showOnWindowOpen')
        // const insertEmptyLastLine = config.get<string>('Ext JS Designer.insertEmptyLastLine')
        // const showDebuggerWindow = config.get<string>('Ext JS Designer.showDebuggerWindow')
    }

    registerMyExpress() {
        const myexpress = new MyExpress(this._context, 'view');

        this._dispose.push(commands.registerCommand('extension.MyExpress', () => {
            myexpress.open('a/index.html', 'mjg', vscode.ViewColumn.One);
        }));
        this.loadStatusBarButton2('MyExpress');

        this._context.subscriptions.push(commands.registerCommand('extension.sayHello', () => {
                vscode.window.showInformationMessage('Hello World!');
            })
        );

        this._context.subscriptions.push(commands.registerCommand('extension.MyExpressClose', (path: string) => {
                myexpress.close(path);
            })
        );
    }

    registerCommands() {

        // this._dispose.push(
        //     commands.registerCommand("extension.showVisibleTextEditors", () => {
        //         this._panel.webview.postMessage({ command: 'visibletexteditors', data: vscode.window.visibleTextEditors});
        //     })
        // )


        

        this._dispose.push(commands.registerCommand("extension.focusFirstEditorGroup", (e) => {
            vscode.commands.executeCommand("workbench.action.focusFirstEditorGroup");
        }))
        this.loadStatusBarButton2("focusFirstEditorGroup")



        this._dispose.push(commands.registerCommand("extension.getcommands", () => {
            commands.getCommands(false).then( e => {
                console.log(e)
            })
        }));
        this.loadStatusBarButton2("getcommands");

        this._dispose.push(commands.registerCommand("extension.move", (e) => {
            vscode.commands.executeCommand('moveActiveEditor', { to: '1', by: 'tab', value: 0 });
        }))
        this.loadStatusBarButton2("move")

        // this._dispose.push(commands.registerCommand("extension.test", (e) => {
        //     //this.updateDecorations(vscode.window.activeTextEditor)
        //     //Tester.test1(this);
        //     //Tester.testQuickInput(this)
        //     //Tester.testProgress(this)
        //     //Tester.testHover(this)
        // }));
        //this.loadStatusBarButton({ name: 'test', tooltip: 'test', vsCommand: 'extension.test' })
        //this.loadStatusBarButton2("test")

        var me = this;
        this._dispose.push(commands.registerCommand("extension.reveal", () => {
            //this.updateDecorations(vscode.window.activeTextEditor)
            //Tester.test1(this);
            //Tester.testQuickInput(this)
            //Tester.testProgress(this)
            let v: vscode.TextEditor = vscode.window.activeTextEditor;
            let vc = v.viewColumn
            me._panel.reveal(vc, false)
        }))
        //this.loadStatusBarButton({ name: 'reveal', tooltip: 'reveal', vsCommand: 'extension.reveal' })
        this.loadStatusBarButton2("reveal")


        // this.registerCommandButton('getcommands', function () {
        //     vscode.commands.getCommands(false).then((e) => {
        //         console.log(e)
        //     })
        // });


        this._dispose.push(commands.registerCommand("extension.npmStart", () => {
                const terminal = vscode.window.createTerminal('npmStart')
                terminal.show(true)
                terminal.sendText('npm start')
            })
        )
        this.loadStatusBarButton2("npmstart")

        this._dispose.push(
            vscode.commands.registerCommand("extension.showDesigner", () => {
                this.initializeThePanel();
                this.setAppJS();
                this._panel.webview.html = this.getHtmlInitial();
                this._panel.webview.postMessage(
                    {
                        command: 'blur'
                    }
                );
                //let uri = Uri.file('/some/path/to/folder');
                //vscode.commands.executeCommand('moveActiveEditor', { to: '1', by: 'tab', value: 0 });
            })
        )
        this.loadStatusBarButton2("showDesigner")

        this.registerCommandButton('selectAll', function () {
            vscode.commands.executeCommand('selectAll');
        });

        this.registerCommandButton('extension.newGroupLeft', function () {
            vscode.commands.executeCommand('workbench.action.newGroupLeft');
        });

        this.registerCommandButton('extension.focusFirstEditorGroup', function () {
            vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
        });

        this.registerCommandButton('extension.lastEditorInGroup', function () {
            vscode.commands.executeCommand('workbench.action.lastEditorInGroup');
        });

        this._context.subscriptions.push(vscode.commands.registerCommand("extension.moveleft", () => {
            vscode.commands.executeCommand('workbench.action.moveActiveEditorGroupLeft', { to: '1', by: 'tab', value: 0 }, (e) => {
            })
        }))
        this.loadStatusBarButton2("extension.moveleft")

//        this.loadStatusBarButton({ name: command, tooltip: command, vsCommand: 'extension.' + command })




        // this._context.subscriptions.push(
        //     vscode.commands.registerCommand('extension.reverseWord', function () {
        //         // Get the active text editor
        //         let editor = vscode.window.activeTextEditor;

        //         if (editor) {
        //             let document = editor.document;
        //             let selection = editor.selection;

        //             // Get the word within the selection
        //             let word = document.getText(selection);
        //             let reversed = word.split('').reverse().join('');
        //             editor.edit(editBuilder => {
        //                 editBuilder.replace(selection, reversed);
        //             });
        //         }
        //     })
        // )
        // this._context.subscriptions.push(
        //     vscode.commands.registerCommand("extension.showVisibleTextEditors", () => {
        //         this._panel.webview.postMessage({ command: 'visibletexteditors', data: vscode.window.visibleTextEditors});
        //     })
        // )

        // this._context.subscriptions.push(vscode.commands.registerCommand('e.quickInput', async () => {
        //     const options: { [key: string]: (context: ExtensionContext) => Promise<void> } = {
        //         showQuickPick,
        //         showInputBox,
        //         multiStepInput,
        //         quickOpen,
        //     };
        //     const quickPick = vscode.window.createQuickPick();
        //     quickPick.items = Object.keys(options).map(label => ({ label }));
        //     quickPick.onDidChangeSelection(selection => {
        //         if (selection[0]) {
        //             options[selection[0].label](this._context)
        //                 .catch(console.error);
        //         }
        //     });
        //     quickPick.onDidHide(() => quickPick.dispose());
        //     quickPick.show();
        // }));

        // this._context.subscriptions.push(vscode.commands.registerCommand("extension.a", () => {
        //     vscode.window.showInputBox({prompt:'this is below',placeHolder: 'type here'}).then( input => {
        //         Logger.log(input)
        //     });
        // }))

    }

    registerLogger() {
        Logger.channel = vscode.window.createOutputChannel("Ext JS Designer");
        this._context.subscriptions.push(Logger.channel);
    }
    registerProviders() {
        //https://code.visualstudio.com/api/language-extensions/programmatic-language-features#codelens-show-actionable-context-information-within-source-code
        this._context.subscriptions.push(
            vscode.languages.registerCodeLensProvider(
                { language: "javascript", scheme: "file" },
                new MyCodeLensProvider()
            )
        );
    }
    registerWatcher() {
        var watcher = vscode.workspace.createFileSystemWatcher('**/*.js', false, false, false)
        var me = this;

        // watcher.onDidCreate((e) => {});
        // watcher.onDidDelete((e) => {});

        watcher.onDidChange((e) => {
            if (e.path == this._filePath) {
                console.log('match')
                this._panel.webview.postMessage({
                    command: 'changeviewport',
                    xtype: this._xtype,
                    filePath: this._filePath,
                    code: this._code
                });
            }
            //console.log('c');
            //vscode.window.showInformationMessage("change applied!"); //In my opinion this should be called
        });
    }
    registerVSCodeEventListeners() {


        vscode.window.onDidChangeActiveTextEditor(editor => {
            console.log('onDidChangeActiveTextEditor:')
            console.log(editor.document.fileName)

            // console.log('one')
            // console.log(editor.viewColumn)
            // editor.viewColumn = vscode.ViewColumn.Two
            // console.log('two')
            // console.log(editor.viewColumn)


            var filePath = editor.document.fileName;
            var viewStart = filePath.indexOf('View.js');
            if (viewStart != -1) {
                var lastSlash = filePath.lastIndexOf("/");
                var folder = filePath.substring(0, lastSlash + 1);
                var name = filePath.substring(lastSlash + 1, viewStart);
                var xtype = name.toLowerCase() + 'view'
                this._xtype = xtype;

                // var code = '';
                // try { code = fs.readFileSync(folder + name + 'View.js').toString() }
                // //try {view = fs.readFileSync(filePath.toString())}
                // catch (e) { code = '' }

                var code = editor.document.getText()

                this._eparser = new Eparser(code)
                this._filePath = filePath;
                this._fileName = filePath.substr(filePath.lastIndexOf("/") + 1);

                this._panel.webview.postMessage({
                    command: 'changeviewport',
                    xtype: xtype,
                    filePath: filePath,
                    code: code
                });

                // var me = this;
                // vscode.workspace.openTextDocument(filePath).then(doc => {
                //     vscode.window.showTextDocument(doc, { preserveFocus: true, viewColumn: vscode.ViewColumn.Two }).then(doc => {
                //         me._currentTextDocument = doc
                //     });
                //     //await vscode.window.showTextDocument(doc, { preview: false });
                // });
            }
            else {
                //    vscode.window.showTextDocument(resource, vscode.ViewColumn.Two);
            }






        });


        vscode.window.onDidChangeVisibleTextEditors(Editors => {
            console.log('onDidChangeVisibleTextEditors:')
            //let v: vscode.TextEditor = vscode.window.activeTextEditor;
            //console.log(v)
            Editors.forEach(function (editor, index) {
                // console.log('one')
                // console.log(editor.viewColumn)
                // editor.viewColumn = vscode.ViewColumn.Two
                // console.log('two')
                // console.log(editor.viewColumn)
                console.log(editor);
            });
            console.log(vscode.workspace.textDocuments.length);
            console.log('onDidChangeVisibleTextEditors - end:')
        });

        vscode.workspace.onDidOpenTextDocument(doc => {
            this._numTextFiles++;
            console.log('open: ' + vscode.workspace.textDocuments.length + " - " + doc.fileName)
            console.log('*****')
            vscode.workspace.textDocuments.forEach(function (textDocument: vscode.TextDocument, index) {
                console.log(textDocument);
                console.log(textDocument.getText())
            });
            console.log('*****')



            // Logger.log('open: ' + event.fileName)

            // //console.log('onDidOpenTextDocument ' + this._numTextFiles);
            // Logger.log(vscode.workspace.textDocuments.length);
        });

        vscode.workspace.onDidChangeWorkspaceFolders(event => {
            console.log('onDidChangeWorkspaceFolders: ' + event)
            console.log(vscode.workspace.textDocuments.length);
        });

        vscode.workspace.onDidCloseTextDocument(event => {
            this._numTextFiles--;
            console.log('close: ' + vscode.workspace.textDocuments.length + " - " + event.fileName)


            // this._numTextFiles--;
            // //console.log('onDidCloseTextDocument ' + this._numTextFiles);
            // Logger.log(vscode.workspace.textDocuments.length);

        });

        vscode.workspace.onDidSaveTextDocument(event => {
            console.log('save: ' + vscode.workspace.textDocuments.length + " - " + event.fileName)
        });



        vscode.window.onDidOpenTerminal(event => {
            console.log('onDidOpenTerminal')
        });




        // let v:vscode.TextEditor = vscode.window.activeTextEditor;

        // workbench.action.nextEditor


        // vscode.workspace.openTextDocument(filePath).then(doc => {
        //     vscode.window.showTextDocument(doc, { preserveFocus: true, viewColumn: vscode.ViewColumn.Beside }).then(doc => {
        //         me._currentTextDocument = doc
        //     });
        //     //await vscode.window.showTextDocument(doc, { preview: false });
        // });





        // v.viewColumn


    }
    registerViews() {
        new FileExplorer(this);
    }
    initializeThePanel() {
        console.log('create webview')
        this._panel = vscode.window.createWebviewPanel(
            'EXT',
            'Ext JS Designer',
            {
                viewColumn: vscode.ViewColumn.Active,
                preserveFocus: true,
            },
            {
                enableFindWidget: true,
                retainContextWhenHidden: true,

                enableCommandUris: true,
                enableScripts: true,
                // localResourceRoots: [
                //     vscode.Uri.file(path.join(_extensionPath, 'web')),
                //     vscode.Uri.file(path.join(_extensionPath)),
                // ],
                //portMapping
            }
        );
        this._panel.onDidDispose(() => {
            this._panel = undefined;
            console.log('delete webview')
        }, null, this._context.subscriptions);
        //just for dev
        setTimeout(function () {
            vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
            //vscode.commands.executeCommand("workbench.action.terminal.toggleTerminal").then(function () {});
        }, 1000);
        this.setMessagesFromWebview();
    }
    setAppJS() {
        //this._workspaceName, this._extensionPath, 
        var filePath = 'no file'
        var view = 'nothing'
        var xtype = ''
        var code = 'no code'
        var appcode =
            `
Ext.require (['${this._workspaceName}.*'])
Ext.application({
    name: 'EXTApp',
    launch: function () {
        Ext.Viewport.add([{xtype: 'container', html: 'Ext JS Designer is ready'}]);
        window.dispatchEvent(new MessageEvent('message',
            {
                data: {
                    command: 'initializeviewport',
                    xtype: '${xtype}',
                    filePath: '${filePath}',
                    code: '${code}'
                }
            }
        ));
    }
});
`
        try {
            fs.writeFileSync(`${this._extensionPath}/src/app/app2.js`, appcode);
        }
        catch (e) {
            console.log(e)
        }
    }
    public getHtmlInitial() {
        var a = `
<!DOCTYPE HTML>
<html>
${head(this._workspaceName, this._workspaceRootPath)}
<body>
    <z-panel flexdirection="column">
        ${header('initial')}
        <z-panel flexdirection="row">
            ${left()}
            <z-splitter></z-splitter>
            <z-panel id="content" padding="15px" background="lightgray"></z-panel>
        </z-panel>
        <z-splitter></z-splitter>
        ${details('')}
        ${footer(this._fileName)}
    </z-panel>
    ${focusbox()}
    ${dialogs()}
</body>
</html>
`
        return a
    }

    registerStatusBarButtons() {
        //this.loadStatusBarButton({name: 'a', tooltip: 'a', vsCommand: 'extension.a'})

        //vscode.window.showInputBox()
        //this.loadStatusBarButton({name: 'mjg', tooltip: 'my test command', vsCommand: 'fileExplorer.show'})
        //this.loadStatusBarButton({name: 'Chrome Debugger $(eye)', tooltip: 'Show Chrome Debugger',vsCommand: 'workbench.action.webview.openDeveloperTools'}); //$(eye~spin)

        this.loadStatusBarButton({
            name: 'Ext JS Designer',
            vsCommand: 'extension.showDesigner',
            color: 'white',
            tooltip: 'Show Ext JS Designer'
        });

        this.loadStatusBarButton({
            name: 'npm start',
            vsCommand: 'extension.npmStart',
            color: 'white',
            tooltip: 'npm start',
            singleInstance: true
        });

        // this.loadStatusBarButton({
        //     name: 'ESLint Output',
        //     vsCommand: 'eslint.showOutputChannel',
        //     color: 'blue',
        //     tooltip: 'Show Ext JS Designer'
        // });

        this.loadStatusBarButton({
            name: 'ESLint',
            vsCommand: 'eslint.executeAutofix',
            color: 'white',
            tooltip: 'Run ESLint'
        });

        // this.loadStatusBarButton({
        //     name: 'showVisibleTextEditors',
        //     vsCommand: 'extension.showVisibleTextEditors',
        //     tooltip: 'showVisibleTextEditors'
        // })
    }


    loadStatusBarButton2( command: string) {
        var sbi:StatusBarItem =     { name: command, tooltip: command, vsCommand: 'extension.' + command }
        //const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        const statusBarItem = vscode.window.createStatusBarItem(1, 0)
        statusBarItem.text = sbi.name
        statusBarItem.color = sbi.color || this._buttonColor
        statusBarItem.tooltip = sbi.tooltip
        statusBarItem.command = sbi.vsCommand
        statusBarItem.show()
        this._context.subscriptions.push(statusBarItem);
    }

    loadStatusBarButton({ name, tooltip, color, vsCommand }: StatusBarItem) {
        //const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        const statusBarItem = vscode.window.createStatusBarItem(1, 0)
        statusBarItem.text = name
        statusBarItem.color = color || this._buttonColor
        statusBarItem.tooltip = tooltip
        statusBarItem.command = vsCommand
        statusBarItem.show()
        this._context.subscriptions.push(statusBarItem);
    }
    updateDecorations(activeEditor) {
        if (!activeEditor) {
            return;
        }
        const regEx = /\d+/g;
        const text = activeEditor.document.getText();
        const smallNumbers: vscode.DecorationOptions[] = [];
        const largeNumbers: vscode.DecorationOptions[] = [];
        let match;
        while (match = regEx.exec(text)) {
            const startPos = activeEditor.document.positionAt(match.index);
            const endPos = activeEditor.document.positionAt(match.index + match[0].length);
            const decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: 'Number **' + match[0] + '**' };
            if (match[0].length < 3) {
                smallNumbers.push(decoration);
            } else {
                largeNumbers.push(decoration);
            }
        }
        activeEditor.setDecorations(this.smallNumberDecorationType, smallNumbers);
        activeEditor.setDecorations(this.largeNumberDecorationType, largeNumbers);
    }
    registerTextDecorations() {
        this.smallNumberDecorationType = vscode.window.createTextEditorDecorationType({
            borderWidth: '1px',
            borderStyle: 'solid',
            overviewRulerColor: 'blue',
            overviewRulerLane: vscode.OverviewRulerLane.Right,
            light: {
                // this color will be used in light color themes
                borderColor: 'darkblue'
            },
            dark: {
                // this color will be used in dark color themes
                borderColor: 'lightblue'
            }
        });

        this.largeNumberDecorationType = vscode.window.createTextEditorDecorationType({
            cursor: 'crosshair',
            // use a themable color. See package.json for the declaration and default values.
            backgroundColor: { id: 'myextension.largeNumberBackground' }
        });
    }
    //from fileExplorer
    fileSelected(resource) {
        var filePath = resource.path;
        var viewStart = filePath.indexOf('View.js');
        if (viewStart != -1) {
            var lastSlash = filePath.lastIndexOf("/");
            var folder = filePath.substring(0, lastSlash + 1);
            var name = filePath.substring(lastSlash + 1, viewStart);
            var xtype = name.toLowerCase() + 'view'
            this._xtype = xtype;

            var code = '';
            try { code = fs.readFileSync(folder + name + 'View.js').toString() }
            //try {view = fs.readFileSync(filePath.toString())}
            catch (e) { code = '' }

            this._eparser = new Eparser(code)
            this._filePath = filePath;
            this._fileName = filePath.substr(filePath.lastIndexOf("/") + 1);

            this._panel.webview.postMessage({
                command: 'changeviewport',
                xtype: xtype,
                filePath: filePath,
                code: code
            });

            var me = this;
            vscode.workspace.openTextDocument(filePath).then(doc => {
                vscode.window.showTextDocument(doc, { preserveFocus: true, viewColumn: vscode.ViewColumn.Two }).then(doc => {
                    me._currentTextDocument = doc
                });
                //await vscode.window.showTextDocument(doc, { preview: false });
            });
        }
        else {
            //this.panel.webview.postMessage({ command: 'changeview', data: resource.path});
            vscode.window.showTextDocument(resource, vscode.ViewColumn.Two);
        }
    }
    setMessagesFromWebview() {
        this._panel.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'columnSet':
                    try {
                        var addColumnReturn = this._eparser.addColumn(message.data.text, message.data.dataIndex);
                        if (addColumnReturn == 0) {
                            var code = this._eparser.generate()
                            fs.writeFileSync(this._filePath, code);
                            this._panel.webview.postMessage({ command: 'newcode', code: code });
                        }
                        else {
                            vscode.window.showErrorMessage('addColumnReturn: ' + setPropertyReturn);
                        }
                    }
                    catch (e) {
                        console.log(e)
                    }
                    break;
                case 'propertySet':
                    var setPropertyReturn = this._eparser.setProperty(message.data.name, message.data.value)
                    if (setPropertyReturn == 0) {
                        this._code = this._eparser.generate()
                        //me._currentTextDocument = doc
                        this._currentTextDocument.edit(editBuilder => {
                            //var p = new vscode.Position(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
                            var start = new vscode.Position(0, 0)
                            var end = new vscode.Position(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
                            //var newPosition = vscode.Position..with(position.line, 5);
                            //editBuilder.insert(p,`//${message.data.value}`)
                            var r = new vscode.Range(start, end)
                            editBuilder.replace(r, this._code)
                        });
                    }
                    else {
                        vscode.window.showErrorMessage('setPropertyReturn: ' + setPropertyReturn);
                    }
                    break;
                case 'showTerminal':
                    vscode.commands.executeCommand("workbench.action.terminal.toggleTerminal").then(function () { });
                    break;
            }
        },
            null
            //this._disposables
        )
    };


    registerCommandButton(command, cb) {
        let commandDisposable = vscode.commands.registerCommand("extension." + command, cb);
        this._context.subscriptions.push(commandDisposable);
        //this._context.subscriptions.push(vscode.commands.registerCommand("extension." + command, cb));
        this.loadStatusBarButton({ name: command, tooltip: command, vsCommand: 'extension.' + command })
    }

    registerCommandButton2(command) {
 //       let commandDisposable = vscode.commands.registerCommand("extension." + command, cb);
  //      this._context.subscriptions.push(commandDisposable);


        //this._context.subscriptions.push(vscode.commands.registerCommand("extension." + command, cb));
        //this.loadStatusBarButton({ name: command, tooltip: command, vsCommand: 'extension.' + command })
    }


    registerTests() {
        //var command
        // this.registerCommandButton('showealleditors',() => {
        //     vscode.commands.executeCommand('workbench.action.showAllEditors', (e) => {
        //         console.log(e)
        //     })
        // });

        // this.registerCommandButton('getcommands', function () {
        //     vscode.commands.getCommands(false).then((e) => {
        //         console.log(e)
        //     })
        // });





        // this.registerCommandButton('lastEditorInGroup', function() {
        //     vscode.commands.executeCommand('workbench.action.lastEditorInGroup').then((e) => {
        //         console.log(e)
        //     })
        // });


        // var command = 'moveleft'
        // this._context.subscriptions.push(vscode.commands.registerCommand("extension." + command, () => {
        //     console.log('here')
        //     vscode.commands.executeCommand('workbench.action.moveActiveEditorGroupLeft', { to: '1', by: 'tab', value: 0 }, (e) => {
        //         console.log(e)
        //     })
        // }))
        // this.loadStatusBarButton({ name: command, tooltip: command, vsCommand: 'extension.' + command })




        // command = 'showealleditors'
        // this._context.subscriptions.push(vscode.commands.registerCommand("extension." + command, () => {
        //     console.log('here')
        //     vscode.commands.executeCommand('workbench.action.showAllEditors', (e) => {
        //         console.log(e)
        //     })
        // }))
        // this.loadStatusBarButton({ name: command, tooltip: command, vsCommand: 'extension.' + command })




    }
    dispose() { }
}
