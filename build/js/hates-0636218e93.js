$(document).ready(function () {
  var database = firebase.database();
  var hates = database.ref('hates');

  hates.once('value').then(function (snapshot) {
    var hates = snapshot.val();
    $('#java-counter').html(hates.java);
    $('#windows-counter').html(hates.windows);

  });

  hates.on('value', function (snapshot) {
    var hates = snapshot.val();
    $('#java-counter').html(hates.java);
    $('#windows-counter').html(hates.windows);

  });
});
