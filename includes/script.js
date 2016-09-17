function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideacontent").value;
    var tags = document.getElementById("createideatags").value;
    var tagsList = tags.split(",");
    var trimmedTags = []
    var tTInc = 0;
    for (var i = 0; i < tagsList.length; i++) {
        if (tagsList[i] != "" || tagsList[i].trim() != "") {
            trimmedTags[tTInc] = tagsList[i].trim().toLowerCase();
            tTInc++;
        }
    }
    api("ideas/create", [title, author, content, JSON.stringify(trimmedTags)], alert);
}

function searchIdeas() {
    var content = document.getElementById("topsearchquery").value;
    api("analyse", [content], alert);
}

function analyseTags() {
    var content = document.getElementById("createideacontent").value;
    api("analyse", [content], liveTagChange);
}
function liveTagChange(tags) {
    var tagsList = JSON.parse(tags);
    var tagsOut = "";
    for (var i = 0; i < tagsList.length; i++) {
        tagsOut += tagsList[i] + ","
    }
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);