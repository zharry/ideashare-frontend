function createIdea() {
    var author = document.getElementById("createideaauthor").value;
    var title = document.getElementById("createideatitle").value;
    var content = document.getElementById("createideaauthor").value;
    var tags = document.getElementById("createideatags").value;
    api("ideas/create", [title, author, content, tags], alert);
}