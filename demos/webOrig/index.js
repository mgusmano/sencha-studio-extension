(function () {
  //const c = document.getElementById('mjg');
  //c.textContent = 'mjg';
  const vscode = acquireVsCodeApi();
//  console.log('vscode1')
//  console.log(vscode)
//  setInterval(() => {
//    console.log('vscode2')
    vscode.postMessage({

      command: 'alert',
      text: 'at: ' + Date.now()
    });
//  }, 3000);
    // Handle messages sent from the extension to the webview
    window.addEventListener('message', event => {
      const message = event.data; // The json data that the extension sent
      switch (message.command) {
          case 'refactor':
              console.log(message.command)
              break;
      }
  });
}());