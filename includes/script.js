function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideacontent").value;
    var tags = document.getElementById("createideatags").value.toLowerCase();
    var tagsList = tags.split(",");
    var trimmedTags = []
    var tTInc = 0;
    for (var i = 0; i < tagsList.length; i++) {
        if (tagsList[i].trim()) {
            trimmedTags[tTInc] = tagsList[i].trim().toLowerCase();
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
    var candidates = JSON.parse(response)["response"];
    if (candidates.length == 0) {
        alert("No matching search!");
    } else {
        var sorted = [];
        var output = [];
        var outI = 0;
        for (var i = 0; i < candidates.length; i++) {
            sorted[candidates[i]["rank"]] = candidates[i]["id"];
        }
        sorted.forEach(function(val) {
            if (val != null) {
                output[outI] = val;
                outI++;
            }
        });
        alert(JSON.stringify(output.reverse()));
    }
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
    document.getElementById("createideatags").value = tagsOut.toLowerCase();
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);