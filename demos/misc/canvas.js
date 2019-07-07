
var canvas1;
var ctx


function createCanvas() {

//    var overlay = document.getElementById("overlay");
//    console.log(overlay)

    var canv = document.createElement('canvas');
    canv.height = 200; //get original canvas height
    canv.width = 200; // get original canvas width
    canv.id = 'someId';
    canv.style.position = 'fixed';
    canv.style.opacity = ".2";
    //canv.style.pointerEvents = "none";

    canv.ondragover = function(ev){
        console.log('ondrop')
        ev.preventDefault();
    };

    canv.ondrop = function(ev){
        console.log('ondrop')
        ev.preventDefault();
    };


    // canv.addEventListener("drop", function(ev) {
    //     console.log('ondrop')
    //     ev.preventDefault();

    //     // Get the id of the target and add the moved element to the target's DOM
    //     // var data = ev.dataTransfer.getData("text/plain");
    //     // ev.target.appendChild(document.getElementById(data));
    // });
    canv.addEventListener("dragover", function (ev) {
        console.log('ondragover')
        ev.preventDefault();

        // Set the dropEffect to move
        // ev.dataTransfer.dropEffect = "move"
    });

//    canv.style.draggable = true
    
//    document.body.appendChild(canv); // adds the canvas to the body element
    document.getElementById('container').appendChild(canv);

    canvas1 = document.getElementById('someId');
    console.log(canvas1)
    ctx = canvas1.getContext('2d')
    console.log(ctx)


    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0, 0, 200, 200);

//     var rect = currentElementSelected.getBoundingClientRect();
//     console.log(rect.top, rect.right, rect.bottom, rect.left);
// //        ctx.fillStyle = "#00FF00";
//     //void ctx.fillRect(x, y, width, height);

//     var x = rect.left
//     var y = rect.top
//     var w = rect.right - rect.left
//     var h = rect.bottom - rect.top

//     console.log(x + ' ' + y + ' ' + w + ' ' + h)

//       ctx.fillRect(x, y, w, h);



}
