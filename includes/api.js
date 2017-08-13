function api(action, data, callback) {
    var reqUrl = "http://ideashare.ml:54010/api/" + action + "/";
    for (var i = 0; i < data.length; i++) {
        reqUrl += data[i] + "/";
    }
    
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		    callback(xmlHttp.responseText);
		}
	};
	xmlHttp.open("GET", reqUrl, true);
	xmlHttp.send();
}