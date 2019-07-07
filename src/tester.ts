import * as vscode from 'vscode';
import ExtensionProvider from "./extensionProvider";
import { Logger } from './logger';
import * as fs from 'fs';

export class Tester {

    static testActivityBar(me: ExtensionProvider) {
        //var e = document.getElementById('workbench.parts.activitybar');
    }

    static test1(me: ExtensionProvider) {
        Logger.log(me._buttonColor)
    }

    static async testQuickInput(me: ExtensionProvider) {
        Logger.log('testQuickInput')
        // const quickPick = vscode.window.createQuickPick();
        // quickPick.items = [{label:'1'},{label:'2'}];
        // quickPick.onDidChangeSelection(selection => {
        //     Logger.log(selection[0].label)
        //     quickPick.hide();
        // });
        // quickPick.onDidHide(() => quickPick.dispose());
        // quickPick.show();

        //let i = 0;
        // const result = await vscode.window.showQuickPick(['eins', 'zwei', 'drei'], {
        //     placeHolder: 'eins, zwei or drei',
        //     onDidSelectItem: item => Logger.log(`Focus ${++i}: ${item}`)
        // });
        const result = await vscode.window.showQuickPick(['eins', 'zwei', 'drei']);
        Logger.log(`Got: ${result}`);

    }

    static testProgress(me: ExtensionProvider) {
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "I am long running!",
            cancellable: true
        }, (progress, token) => {
            token.onCancellationRequested(() => {
                console.log("User canceled the long running operation");
            });

            progress.report({ increment: 0 });

            setTimeout(() => {
                progress.report({ increment: 10, message: "I am long running! - still going..." });
            }, 1000);

            setTimeout(() => {
                progress.report({ increment: 40, message: "I am long running! - still going even more..." });
            }, 2000);

            setTimeout(() => {
                progress.report({ increment: 50, message: "I am long running! - almost there..." });
            }, 3000);

            var p = new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 5000);
            });

            return p;
        });


    }

    static testHover(me: ExtensionProvider) {
        vscode.languages.registerHoverProvider('javascript', {
            provideHover(doc: vscode.TextDocument) {
              return new vscode.Hover('For *all* JavaScript documents.');
            }
          });

          vscode.languages.registerHoverProvider(
            { scheme: 'file', language: 'javascript' },
            {
              provideHover(doc: vscode.TextDocument) {
                const { size } = fs.statSync(doc.uri.fsPath);
                return new vscode.Hover(`Size in bytes is ${size}`);
              }
            }
          );

    }

    // function testIt(context) {
    //     let commandDisposable = vscode.commands.registerCommand(
    //         "extension.addConsoleLog",
    //         addConsoleLog
    //     );
    
    //     let commandDisposable2 = vscode.commands.registerCommand(
    //         "extension.addDesigner",
    //         addDesigner
    //     );
    //   // Get a document selector for the CodeLens provider
    //   // This one is any file that has the language of javascript
    //     let docSelector = {
    //     language: "javascript",
    //     scheme: "file"
    //     };
    
    //     // Register our CodeLens provider
    //     let codeLensProviderDisposable = vscode.languages.registerCodeLensProvider(
    //     docSelector,
    //     new MyCodeLensProvider()
    //     );
    
    //     // Push the command and CodeLens provider to the context so it can be disposed of later
    //     context.subscriptions.push(commandDisposable);
    //     context.subscriptions.push(commandDisposable2);
    //     context.subscriptions.push(codeLensProviderDisposable);
    
    // }

}