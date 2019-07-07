var num = 0;

window.onload = function() {
    var elements = document.getElementsByTagName('*'),
        i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('file')) {
            num ++;
            fragment(elements[i], elements[i].getAttribute('file'));
        }
    }

    function fragment(el, url) {
        var localTest = /^(?:file):/,
            xmlhttp = new XMLHttpRequest(),
            status = 0;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                status = xmlhttp.status;
            }
            if (localTest.test(location.href) && xmlhttp.responseText) {
                status = 200;
            }
            if (xmlhttp.readyState == 4 && status == 200) {
                el.outerHTML = xmlhttp.responseText;
                num --;
                if (num == 0) {
                    window.dispatchEvent(new CustomEvent('filesloaded', {}));
                }
            }
        }

        try { 
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        } catch(err) {
            /* todo catch error */
        }
    }
}