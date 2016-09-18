<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>IdeaShare</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="/includes/style.css">
    </head>
    <body>
        <div class="container">
            <div class="row" id="logo">
                <div class="pull-left" style="width: 100%">
                    <h2>IdeaShare</h2> <h4>An open platform for idea distribution and communication</h4><br/>
                </dvi>
            </div>
            <div class="row" id="topsearch">
                <div class="input-group">
                    <input id="topsearchquery" type="text" class="form-control" placeholder="Start typing to seach for existing ideas" aria-describedby="basic-addon2" onkeyup="searchIdeas();">
                    <span class="input-group-addon" id="basic-addon2" onclick="forceSearch();">Search</span>
                    <span class="input-group-addon" id="basic-addon2" onclick="$('#createidea').goTo();">Create Idea</span>
                </div>
            </div>
            <div class="row" id="searchresults">
            </div>
            <div class="row" id="body">
            </div>
            <div class="row" id="createidea">
                <h3>Create a new Idea</h3>
                <div class="createideaform input-group">
                    <span class="input-group-addon" id="basic-addon1">+</span>
                    <input id="createideaauthor" type="text" class="form-control" placeholder="Author ID" aria-describedby="basic-addon1">
                </div>
                <div class="createideaform input-group">
                    <span class="input-group-addon" id="basic-addon1">+</span>
                    <input id="createideatitle" type="text" class="form-control" placeholder="Title" aria-describedby="basic-addon1">
                </div>
                <div class="createideaform form-group" style="margin-bottom: 0px;">
                    <textarea id="createideacontent" class="form-control" rows="5" id="comment" placeholder="Content for new Idea" onkeyup="analyseTags();"></textarea>
                </div>
                <div class="createideaform input-group">
                    <span class="input-group-addon" id="basic-addon1">+</span>
                    <input id="createideatags" type="text" class="form-control" placeholder="Tags (Seperated by ,)" aria-describedby="basic-addon1">
                </div>
                <div class="createideaform input-group" style="width: 100%">
                    <button type="button" class="btn btn-info" style="width: 100%" onclick="createIdea();">Submit</button>
                </div>
            </div>
        </div>
    
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!--Self-includes-->
        <script src="/includes/api.js"></script>
        <script src="/includes/script.js"></script>
    </body>
</html>