import * as vscode from 'vscode';
import * as moment from 'moment';

export class Logger {
    static channel: vscode.OutputChannel;

    static log(message: any) {
        if (this.channel) {
            let time = moment().format("MM-DD HH:mm:ss");
            this.channel.appendLine(`[${time}] ${message}`);
        }
    }

    static showInformationMessage(message: string, ...items: string[]): Thenable<string> {
        this.log(message);
        return vscode.window.showInformationMessage(message, ...items);
    }

    static showWarningMessage(message: string, ...items: string[]): Thenable<string> {
        this.log(message);
        return vscode.window.showWarningMessage(message, ...items);
    }

    static showErrorMessage(message: string, ...items: string[]): Thenable<string> {
        this.log(message);
        return vscode.window.showErrorMessage(message, ...items);
    }
}