function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideacontent").value;
    var tags = document.getElementById("createideatags").value;
    var tagsList = tags.split(",");
    for (var i = 0; i < tagsList.length; i++) {
        tagsList[i] = tagsList[i].trim().toLowerCase();
    }
    api("ideas/create", [title, author, content, JSON.stringify(tagsList)], alert);
}

function searchideas() {
    var content = document.getElementById("topsearchquery").value;
    api("analyse", [content], alert);
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);