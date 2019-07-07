window.left = {}

window.left.dragover = function(event) {
    event.preventDefault();
};

window.left.drop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
};

window.left.dragstart = function(event) {
    event.dataTransfer.setData("text", event.target.id);
}
