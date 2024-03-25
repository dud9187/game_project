window.addEventListener('load', function() {
            var allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, function(el) {
                var includePath = el.dataset.includePath;
                if (includePath) {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            el.outerHTML = this.responseText;
                            if (includePath.includes("header.html")) {
                                loadCommonJS();
                            }
                        }
                    };
                    xhttp.open('GET', includePath, true);
                    xhttp.send();
                }
            });
    function loadCommonJS() {
        var script = document.createElement('script');
        script.src = '/scripts/common/common.js';
        document.head.appendChild(script);
    }
        });