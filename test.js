var rootRef = firebase.database().ref();
rootRef.once("value")
  .then(function(snapshot) {
    var key = snapshot.key; // null
    var childKey = snapshot.child("users/ada").key; // "ada"
  });