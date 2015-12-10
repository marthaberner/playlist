$(function () {
  $('#my-tracks').hide();
  var getTracks = $("button");
  getTracks.click(function () {
    window.location.assign("tracks.html")
  })

  $(document).on('click', '.single-track', function () {
    $('#my-tracks').show();
    $('#my-tracks').append(this);

  })

  $('.submit').click(function (event) {
    $.ajax({
      method: "POST",
      url: "https://lit-fortress-6467.herokuapp.com/post",
      data: {}
    }).done(function( msg ) {
        alert(msg);
        window.location.assign('index.html');
      });
  })

  var someTracks = $('.results');
  var allTracks = $('.tracks');
  var submit = $('.submit');

  $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    context: document.body
  }).done(function(tracks) {
    var randomTracks = shuffle(tracks.results);
    showTracks(randomTracks, someTracks);
    showTracks(tracks.results, allTracks);
  });



  function shuffle(array){
    var results = [];
    for(var i=0; i<3; i++){
      var j = Math.floor(Math.random()*(5 - 0));
      results.push(array[j]);
    }
    return results;
  }

  function showTracks(tracks, element){
    tracks.forEach(function (track, i) {
      var id = i;
      element.append('<img class="single-track" id=' + id + ' src=images/'+ track.cover_art + '></img>');
    })
  }
})
