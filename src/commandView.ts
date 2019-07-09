import * as vscode from 'vscode';
//import { any } from 'prop-types';

export class CommandView {
    public _commands: object = {};
    public _nodes:any = {};

    constructor(context: vscode.ExtensionContext) {
        var me = this;
        vscode.commands.getCommands(false).then(e => {
            e.sort();
            e.forEach(function (item) {
                me._commands[item] = {};
            });
            const view = vscode.window.createTreeView(
                'commandView',
                {
                    treeDataProvider: me.aNodeWithIdTreeDataProvider(),
                    showCollapseAll: true
                }
            );
            vscode.commands.registerCommand('commandView.reveal', async (command) => {
                console.log(command)
                vscode.commands.executeCommand(command);
            });
        })
    }

    aNodeWithIdTreeDataProvider(): vscode.TreeDataProvider<{ key: string }> {
        return {
            getChildren: (element: { key: string }): { key: string }[] => {
                return this.getChildren(element ? element.key : undefined).map(key => this.getNode(key));
            },
    
            getTreeItem: (element: { key: string }): vscode.TreeItem => {
                const treeItem = this.getTreeItem(element.key);
                treeItem.id = element.key;
                return treeItem;
            },
    
            getParent: ({ key }: { key: string }): { key: string } => {
                const parentKey = key.substring(0, key.length - 1);
                return parentKey ? new Key(parentKey) : void 0;
            }
        };
    }
    
    getChildren(key: string): string[] {
        if (!key) {
            return Object.keys(this._commands);
        }
        let treeElement = this.getTreeElement(key);
        if (treeElement) {
            return Object.keys(treeElement);
        }
        return [];
    }

    getTreeItem(key: string): vscode.TreeItem {
        const treeElement = this.getTreeElement(key);
        return {
            label: key,
            command: { title: 'reveal', command: 'commandView.reveal', arguments: [key] },
            tooltip: `Tooltip for ${key}`,
            collapsibleState: treeElement && Object.keys(treeElement).length ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None
        };
    }

    getTreeElement(element): any {
        let parent = this._commands;
        for (let i = 0; i < element.length; i++) {
            parent = parent[element.substring(0, i + 1)];
            if (!parent) {
                return null;
            }
        }
        return parent;
    }
    
    getNode(key: string): { key: string } {
        if (!this._nodes[key]) {
            this._nodes[key] = new Key(key);
        }
        return this._nodes[key];
    }
}

class Key {
    constructor(readonly key: string) { }
}