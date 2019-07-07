
    function doTerminal() {
        vscode.postMessage({
            command: 'showTerminal',
            data: {show: 'yes'}
        });
    }

    function doPE() {
        var pe = document.getElementById('pe');
        var a = [
            {"className": "text", "field": "element", "value": "title1", "hint": "hint"},
            {"className": "text", "field": "element", "value": "title2", "hint": "hint"},
            {"className": "text", "field": "element", "value": "title3", "hint": "hint"}
        ]
        pe.data = a;
    }

    function btnClick(num, value) {
        try {
            var colsOn;
            var colsOff;
            var rowsOn;
            var rowsOff;
            switch (value) {
                case "All":
                    rowsOn = "35px auto 35px"
                    rowsOff = "35px auto 35px"
                    colsOn = "300px 5px auto 5px 300px"
                    colsOff = "0 0 auto 0 0"
                    break;
                case "Left":
                    rowsOn = "35px auto 35px"
                    rowsOff = "35px auto 35px"
                    colsOn = "300px 5px auto 5px 300px"
                    colsOff = "0 0 auto 5px 300px"
                    break;
                case "Right":
                    rowsOn = "35px auto 35px"
                    rowsOff = "35px auto 35px"
                    colsOn = "300px 5px auto 5px 300px"
                    colsOff = "300px 5px auto 0 0"
                    break;
            }
            var text = document.getElementById("btn" + num);
            var container = document.getElementById("container");
            var i = document.getElementById("btnI" + num);
            if (text.innerHTML == " " + value + " Off") {
                text.innerHTML= " " + value + " On"
                i.className = "fa fa-eye"
                container.style.gridTemplateColumns = colsOff;
                container.style.gridTemplateRows = rowsOff;
            }
            else {
                text.innerHTML =  " " + value + " Off"
                i.className = "fa fa-eye-slash"
                container.style.gridTemplateColumns = colsOn;
                container.style.gridTemplateRows = rowsOn;
            }
        }
        catch(e) {console.log(e)}
    }
