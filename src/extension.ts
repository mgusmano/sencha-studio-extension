import * as vscode from 'vscode';
import ExtensionProvider from './extensionProvider';
var extensionProvider: ExtensionProvider;

import MyCodeLensProvider from "./myCodeLensProvider";
import { addConsoleLog, addDesigner } from "./commands";

export function activate(context: vscode.ExtensionContext) {
    extensionProvider = new ExtensionProvider(context);
    //testIt(context);
}

export function deactivate() {
}
