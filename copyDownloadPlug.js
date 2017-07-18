"use strict";
	var text = "";

	$(document).keyup(function(evt) {
		var tmp ="";
		
		if (evt.ctrlKey) {
			if(evt.keyCode == 67){
				//document.getElementById('test').innerHTML = "copy";
				tmp = window.getSelection().toString();
				text += tmp + '\n';			
			}
			else if(evt.keyCode == 77){
				//document.getElementById('test').innerHTML = "paste";
				document.getElementById("copyText").textContent = text;
				
			}
			//else
				//document.getElementById('test').innerHTML = "nothing";
		}
	});

	function download(filename, text) {
		var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		pom.setAttribute('download', filename);

		pom.style.display = 'none';
		document.body.appendChild(pom);

		pom.click();

		document.body.removeChild(pom);
	}