export default function head(workspaceName, workspaceRootPath) {
    // <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    // <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" id="microloader" data-app="76fe2854-0fed-43a4-8a67-d88c76a4694e" type="text/javascript" src="${i}bootstrap.js"></script>
//    var j = `<script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH"  src="vscode-resource:/Volumes/BOOTCAMP/_aDesigner/sencha-studio-extension/src/`
//var i = 'vscode-resource:/Volumes/BOOTCAMP/_aDesigner/build/production/z/generatedFiles/'
//    var j = 'vscode-resource:/Volumes/BOOTCAMP/_aDesigner/z/generatedFiles/'

    var folderName = workspaceName
    //var appPath = `vscode-resource:/Volumes/BOOTCAMP/_aDesigner/${folderName}/`
    var appPath = `vscode-resource:${workspaceRootPath}/`

    var production = `build/production/${folderName}/`

    var productionIsPresent = false
    var baseHref
    var scriptFiles
    if (productionIsPresent) {
        baseHref = `${appPath}${production}`
        scriptFiles = `${appPath}${production}generatedFiles/`
    }
    else {
        baseHref = `${appPath}generatedFiles/`
        scriptFiles = `${appPath}generatedFiles/`
    }

    // console.log(baseHref)
    // console.log(scriptFiles)

    //<link nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" href="${i}scripts/froala/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
//    <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" src="${i}scripts/froala/froala_editor.pkgd.min.js"></script>
// <link href="https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/js/froala_editor.pkgd.min.js"></script>

    var i = `vscode-resource:/Volumes/BOOTCAMP/_aDesigner/sencha-studio-extension/src/`
    var html = `
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">
    <base href="${baseHref}">
    <script type="text/javascript">
        var Ext = Ext || {};
        Ext.beforeLoad = function (tags) {
          var profile;
          profile = 'desktop';
          Ext.manifest ='${scriptFiles}' + profile;
        };
    </script>
    <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" src="${i}view/myexpress.js"></script>
    <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" src="${i}scripts/z.js"></script>
    <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" src="${i}scripts/index.js"></script>
    <script>var thePath="${i}app/";</script>
    <script nonce="5ucQm9Z6LQhehDMEZnySYON17arig2AH" src="${i}scripts/bootstrap.js" data-app="705d02c4-0620-4fd3-8bf0-f68ccbb32b7a" ></script>
</head>
    `
    return html;
}
