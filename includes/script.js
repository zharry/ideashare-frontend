function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideacontent").value;
    var tags = document.getElementById("createideatags").value;
    api("ideas/create", [title, author, content, tags], alert);
}

function searchideas() {
    var content = document.getElementById("topsearchquery").value;
    api("api/analyse", [content], alert);
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);