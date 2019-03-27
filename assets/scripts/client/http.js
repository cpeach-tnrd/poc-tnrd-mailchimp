
var http = {
	
	get : function(r,p,c){
		var url = p[0];
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState === 4 && this.status === 200) {c(JSON.parse(this.responseText));}
		};
		url += url.indexOf("?") > -1 ? "&t=_"+(new Date()).getTime() : "?t=_"+(new Date()).getTime();
		xhttp.open("GET", url, true);
		xhttp.send();
	},
	set : function(r,p,c){
		var url = p[0];
		var value = p[1];
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState === 4 && this.status === 200) {c(this.responseText);}
		};
		xhttp.open("POST", url);
		xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
        //console.log(JSON.stringify(value));
		xhttp.send(JSON.stringify(value))  ;

		//xhr.send(encodeURI(value));
	}
};