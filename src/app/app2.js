
Ext.require (['z.*'])
Ext.application({
    name: 'EXTApp',
    launch: function () {
        Ext.Viewport.add([{xtype: 'container', html: 'Ext JS Designer is ready'}]);
        window.dispatchEvent(new MessageEvent('message',
            {
                data: {
                    command: 'initializeviewport',
                    xtype: '',
                    filePath: 'no file',
                    code: 'no code'
                }
            }
        ));
    }
});
