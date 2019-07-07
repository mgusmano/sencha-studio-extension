import {
  CodeLensProvider,
  TextDocument,
  CodeLens,
  Range,
  Command
} from "vscode";

export default class MyCodeLensProvider implements CodeLensProvider {

    async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {

        let topOfDocument: Range = new Range(0, 0, 0, 0);
        let showDesignerCommand: Command = { command: "extension.showDesigner", title: "Show Ext JS Designer" };
        let showDesignerCodeLens : CodeLens = new CodeLens(topOfDocument, showDesignerCommand)

        let topOfDocument2: Range = new Range(5, 5, 1, 10);
        let showDesignerCommand2: Command = { command: "extension.showDesigner", title: "Another One" };
        let showDesignerCodeLens2 : CodeLens = new CodeLens(topOfDocument2, showDesignerCommand2)


        return [
            showDesignerCodeLens,
            showDesignerCodeLens2
        ];
    }

    // provideCodeLenses: function(document: TextDocument) {
    //     return [
    //         {
    //             range: {
    //                 startLineNumber: 1,
    //                 startColumn: 1,
    //                 endLineNumber: 2,
    //                 endColumn: 1
    //             },
    //             id: "First Line",
    //             command: {
    //                 id: commandId,
    //                 title: "First Line"
    //             }
    //         }
    //     ];
    // }



    // provideCodeLenses(document: TextDocument).then( CodeLens[] => {
    //     let topOfDocument: Range = new Range(0, 0, 0, 0);
    //     let showDesignerCommand: Command = { command: "extension.showDesigner", title: "Show Ext JS Designer" };
    //     let showDesignerCodeLens : CodeLens = new CodeLens(topOfDocument, showDesignerCommand)
    //     return [
    //         showDesignerCodeLens
    //     ];
    // }
    // )




}
