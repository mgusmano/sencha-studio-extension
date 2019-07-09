import * as vscode from 'vscode';

interface Entry {
    key: string
}

export class ToolbarView {
    public _commands: object = {};

    constructor(context: vscode.ExtensionContext) {
        var me = this;

        var e = [
            'Open Settings Editor',
            'ESLint the Active Editor',
            'Run npm Start',
            'Show Ext JS Designer'
        ]
        vscode.commands.registerCommand('toolbarView.reveal', async (command) => {
            switch(command) {
                case 'Open Settings Editor':
                    vscode.commands.executeCommand("_workbench.action.openFolderSettings");
                    break;
                case 'ESLint the Active Editor':
                    vscode.commands.executeCommand("eslint.executeAutofix");
                    break;
                case 'Run npm Start':
                    const terminal = vscode.window.createTerminal('npmStart')
                    terminal.show(true)
                    terminal.sendText('npm start')
                    break;
                case 'Show Ext JS Designer':
                    vscode.commands.executeCommand("extension.showDesigner")
                    break;
            }
        });
        e.forEach(function (item) { me._commands[item] = {}; });

        vscode.window.createTreeView('toolbarView',{treeDataProvider: me.commandProvider()});
    }

    commandProvider(): vscode.TreeDataProvider<Entry> {
        return {
            getChildren: (element: Entry): Entry[] => {
                if (element != null) { console.log('child nodes not supported'); return; }
                var commands = Object.keys(this._commands);
                return commands.map( key => ({ key: key }));
            },
    
            getTreeItem: (element: Entry): vscode.TreeItem => {
                const treeItem: vscode.TreeItem = {
                    id: element.key,
                    label: element.key,
                    command: { title: 'reveal', command: 'toolbarView.reveal', arguments: [element.key] },
                }
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