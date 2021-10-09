function Comments(fbname) {

  var firebase = new Firebase("https://" + fbname + ".firebaseio.com/");
  this.firebase = firebase;
  var commentsRef = firebase.child('comments');

  this.submitComment = function(text) {
    commentsRef.push({
    text: text
    });
  };

  this.onCommentsChanged = function() {};

 commentsRef.on('value', function(snapshot) {
    var comments = snapshot.val();
    var preparedComments = [];
	
    for (var text in comments) {
      if (comments.hasOwnProperty(text)) {
        preparedComments.push({
          text: comments.text
        })
      }
    }
    this.onCommentsChanged(preparedComments);
  }.bind(this));
 
};

$(document).ready(function() {

	var ll = new Comments('fbname');

	$(".comment-form form").submit(function(event) {
    event.preventDefault();
    ll.submitComment($(this).find('input.comment-text').val());
    $(this).find("input[type=text]").val("").blur();
    return false;
  });

  ll.onCommentsChanged = function(comments) {
    $(".comments-list").empty();
    comments.map(function(comment) {
      var commentElement = "<li><a href='" + comments.text + "</a></li>";
      $(".comments-list").append(commentElement);
    });
  };

});