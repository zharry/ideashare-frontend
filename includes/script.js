function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideacontent").value;
    var tags = document.getElementById("createideatags").value;
    var tagsList = tags.split(",");
    var trimmedTags = []
    var tTInc = 0;
    for (var i = 0; i < tagsList.length; i++) {
        if (tagsList[i].trim()) {
            trimmedTags[tTInc] = tagsList[i].trim();
            tTInc++;
        }
    }
    api("ideas/create", [title, author, content, JSON.stringify(trimmedTags)], alert);
}
function forceSearch() {
    var content = document.getElementById("topsearchquery").value;
    api("search", [content], searchOut);
}
function searchIdeas() {
    var content = document.getElementById("topsearchquery").value;
    if (content.split('')[content.length - 1] == " ") {
        api("search", [content], searchOut);
    }
}
function searchOut(response) {
    var output = "";
    var candidates = JSON.parse(response)["response"];
    var tags = JSON.parse(response)["tags"];
    output += "<h6>Using tag cloud search with: ";
    for (var i = 0; i < tags.length; i++) {
        output += tags[i] + ", ";
    }
    output += "</h6>";
    output += "<div class=\"list-group\">";
    for (var i = 0; i < candidates.length; i++) {
        if (candidates.length == 0) {
            output += "No results";
        } else if (i == 0 && candidates[0]["rank"] == 0) {
            output += "No results";
        } else if (candidates[i]["rank"] != 0) {
        	var xmlHttp = new XMLHttpRequest();
        	xmlHttp.open("GET", "http://ideashare.ml:49080/api/ideas/get/" + candidates[i]["id"], false);
        	xmlHttp.send();
            output += "<div class=\"list-group-item\">";
            var resp = JSON.parse(xmlHttp.responseText)["response"];
            output += "<h4><b>" + resp["title"] + "</b></h4>";
            output += "<h5><i>Created on: " + resp["timestamp"] + "</i></h5>";
            output += "<p>" + resp["body"] + "</p>";
            output += "</div>";
        }
    }
    output += "<div>";
    document.getElementById("searchresults").innerHTML = output;
}

function analyseTags() {
    var content = document.getElementById("createideacontent").value;
    if (content == "") {
        content = " ";
    }
    if (content.split('')[content.length - 1] == " ") {
        api("analyse", [content], liveTagChange);
    }
}
function liveTagChange(tags) {
    var tagsList = JSON.parse(tags)["response"];
    var tagsOut = "";
    for (var i = 0; i < tagsList.length; i++) {
        tagsOut += tagsList[i] + ","
    }
    document.getElementById("createideatags").value = tagsOut;
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);