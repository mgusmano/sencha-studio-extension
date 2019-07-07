
// export class Dependency extends vscode.TreeItem {

// 	constructor(
// 		public readonly label: string,
// 		private version: string,
// 		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
// 		public readonly command?: vscode.Command
// 	) {
// 		super(label, collapsibleState);
// 	}

// 	get tooltip(): string {
// 		return `${this.label}-${this.version}`;
// 	}

// 	get description(): string {
// 		return this.version;
// 	}

// 	iconPath = {
// 		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
// 		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
// 	};

// 	contextValue = 'dependency';

// }
// class DepNodeProvider implements vscode.TreeDataProvider<Dependency> {
    
// 	private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined> = new vscode.EventEmitter<Dependency | undefined>();
// 	readonly onDidChangeTreeData: vscode.Event<Dependency | undefined> = this._onDidChangeTreeData.event;

//     constructor() {
//         console.log('cons')
// 	}

//     refresh(): void {
//         this._onDidChangeTreeData.fire();
// 	}

// 	getTreeItem(element: Dependency): vscode.TreeItem {
// 		return element;
// 	}

// 	getChildren(element?: Dependency): Thenable<Dependency[]> {
//         console.log('getChildren')
//         console.log(element)
        
//         var dep = new Dependency('the label','1',vscode.TreeItemCollapsibleState.Collapsed,{
//             command: 'extension.toggleTerminal',
//             title: 'hello',
//             arguments: []
//         })
//         console.log(dep)
//         //d.concat(dep)

//         var d:Dependency[] = [dep]
//         console.log(d)

//         return Promise.resolve(d)
// 	}
// }