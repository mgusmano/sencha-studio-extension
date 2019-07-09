import * as vscode from 'vscode';
import * as path from 'path';

// interface Entry {
//     key: string
// }

interface Entry {
    key: string,
    uri: vscode.Uri,
    type: vscode.FileType
}

export class JustViews {
    public _commands: object = {};
    private extensionProvider: any;

    constructor(context: vscode.ExtensionContext, extensionProvider) {
        this.extensionProvider = extensionProvider;
        var me = this;

        var e = [
            '/app/desktop/src/view/home/HomeView.js',
            '/app/desktop/src/view/main/MainView.js',
            '/app/desktop/src/view/main/center/CenterView.js',
            '/app/desktop/src/view/main/detail/DetailView.js',
            '/app/desktop/src/view/main/footer/FooterView.js',
            '/app/desktop/src/view/main/header/HeaderView.js',
            '/app/desktop/src/view/main/nav/NavView.js',
            '/app/desktop/src/view/main/nav/bottom/BottomView.js',
            '/app/desktop/src/view/main/nav/menu/MenuView.js',
            '/app/desktop/src/view/main/nav/top/TopView.js',
            '/app/desktop/src/view/personnel/PersonnelView.js'
        ];
        e.forEach(function (item) { me._commands[item] = {}; });

        vscode.commands.registerCommand('justViews.reveal', (resource: vscode.Uri) => {
            this.extensionProvider.fileSelected(resource);
        })




        // vscode.commands.registerCommand('justViews.reveal', async (command) => {
        //     switch(command) {
        //         case 'Open Settings Editor':
        //             vscode.commands.executeCommand("_workbench.action.openFolderSettings");
        //             break;
        //         case 'ESLint the Active Editor':
        //             vscode.commands.executeCommand("eslint.executeAutofix");
        //             break;
        //         case 'Run npm Start':
        //             const terminal = vscode.window.createTerminal('npmStart')
        //             terminal.show(true)
        //             terminal.sendText('npm start')
        //             break;
        //         case 'Show Ext JS Designer':
        //             vscode.commands.executeCommand("extension.showDesigner")
        //             break;
        //     }
        // });
        // e.forEach(function (item) { me._commands[item] = {}; });

        vscode.window.createTreeView('justViews', { treeDataProvider: me.commandProvider() });
    }

    commandProvider(): vscode.TreeDataProvider<Entry> {
        return {
            getChildren: (element: Entry): Entry[] => {
                if (element != null) { console.log('child nodes not supported'); return; }
                var commands = Object.keys(this._commands);
                const workspaceFolder = vscode.workspace.workspaceFolders.filter(folder => folder.uri.scheme === 'file')[0]
                var c = commands.map((key) => ({ key: key, uri: vscode.Uri.file(path.join(workspaceFolder.uri.fsPath, key)), type: vscode.FileType.File }));
                console.log(c)
                return c;


                //return commands.map( key => ({ key: key }));
            },

            getTreeItem: (element: Entry): vscode.TreeItem => {
                const treeItem: vscode.TreeItem = {
                    id: element.key,
                    label: element.key,
                    contextValue: 'file',
                    command: { title: 'Open File', command: 'justViews.reveal', arguments: [element.uri] },
                }
                console.log(treeItem)
                return treeItem;
            }
        };
    }
}

// class Key {
//     constructor(readonly key: string) { }
// }

// getChildren: (element: Entry): Entry[] => {
//     var children = this.getChildren(element ? element.key : undefined)
//     var c = children.map(key => this.getNode(key));
//     //var c = this.getChildren(element ? element.key : undefined).map(key => this.getNode(key));
//     return c;
// },