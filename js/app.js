$(function () {
  var albumTracks;

  $('#clear').click(function () {
    $('#my-tracks').html("").hide();
  })

  $('.submit').click(function () {
    var userTracks = $('#my-tracks').html();
    $.ajax({
    method: "POST",
    url: " https://lit-fortress-6467.herokuapp.com/post",
    data: userTracks
    }).done(function( msg ) {
      console.log( "Data Saved: " + msg );
    });
  })

  $('#my-tracks').hide();
  $( "button[name='choose-tracks']" ).click(function () {
    window.location.href = "tracks.html";
  })

  $(document).on("click", '.single-track', function () {
    $('#my-tracks').show();
    var albumId = $(this).attr('id');
    var artist = getArtist(albumId);
    $('#my-tracks').append('<p>'+ artist.artist + ': ' + artist.title + '</p>')
  })

  $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object ",
    context: document.body
  }).done(function(results) {
    albumTracks = results.results;
    var shuffledTracks = shuffleTracks(results.results);
    showTracks(shuffledTracks, ".results" );
    showTracks(results.results, ".tracks");

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
      gallery.append('<img class="single-track" src=images/' + track.cover_art + ' id='+ track.id + '></img>');
    })
  }

  function getArtist(albumId) {
    var result = {}
    for (var i = 0; i < albumTracks.length; i++) {
      if(albumTracks[i].id == albumId){
        result.artist = albumTracks[i].artist;
        result.title = albumTracks[i].title;
      }
    }
    return result;
  }
})
