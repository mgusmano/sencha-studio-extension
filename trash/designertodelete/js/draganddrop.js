
window.addEventListener('viewportloaded', function(e) {
    var viewport = document.getElementById("ext-viewport");
    viewport.ondragover = function(event){
        event.preventDefault();
        if (prevElement != undefined) {
            prevElement.classList.remove("highlight");
        }
        var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
        var currElement = elementMouseIsOver
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        currElement.classList.add("highlight");
        prevElement = currElement;
    };
    
    viewport.ondrop = function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
        var currElement = elementMouseIsOver
        while (!currElement.className.includes("x-component ")) {
            currElement = currElement.parentNode
        }
        //currElement.classList.add("highlight");
        var o = Ext.getCmp(currElement.id)
        var theClass = Ext.getClass(o);
        var x
        var prefix = theClass.$className.substring(0, 3);

        var classname; 
        if (prefix == 'Ext') {
            classname = theClass.$className
        }
        else {
            classname = theClass.superclass.$className
        }
        document.getElementById("m-target").innerHTML = o.xtype
        document.getElementById("m-classname").innerHTML = classname
        document.getElementById("m-xtype").innerHTML = data

        const likeIt = document.getElementById('like-it');
        const modal = document.getElementById('demo-modal');
        modal.showModal(); 
    
        likeIt.addEventListener('click', () => {
            modal.close('Like it');
            vscode.postMessage({
                command: 'columnSet',
                data: {text: 'the phone', dataIndex: 'phone'}
            });

        });
    





        //var xtype = this.eparser.getProperty('xtype');
        //console.log(xtype)







    };


})
