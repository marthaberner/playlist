$(function () {
  $( "button[name='choose-tracks']" ).click(function () {
    window.location.href = "tracks.html";
  })

  $(document).on("click", '.single-track', function () {
    $('#my-tracks').append(this);
  })

  $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object ",
    context: document.body
  }).done(function(results) {
    var shuffledTracks = shuffleTracks(results.results);
    console.log(shuffledTracks);
    showTracks(shuffledTracks, ".results" );
    showTracks(results.results, ".tracks");
    // append album images to our container
  });

  $.ajax({
  method: "POST",
  url: " https://lit-fortress-6467.herokuapp.com/post",
  }).done(function( msg ) {
    console.log( "Data Saved: " + msg );
  });


  function shuffleTracks(array) {
    var results = [];
    for (var i = 0; i < 3; i++) {
    var j = Math.floor(Math.random() * array.length);
      results.push(array[j]);
    }
    return results;
  }

  function showTracks(array, element) {
    var gallery = $(element);
    array.forEach(function (track) {
      gallery.append('<img class="single-track" src=images/' + track.cover_art + ' id=track-'+ track.id + '></img>');
    })
  }
})
