function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  
  function draw(songList) {
    debugger
    var template =' ' 
    for (var i = 0; i < songList.length; i++){
      var song = songList[i]
      template += `
      <div class="card">
      <img src="${song.albumArt}" width="100">
      <h4>Title: ${song.title}</h4>
      <p>Artist: ${song.artist} </p>
      <p>Collection: ${song.collection} </p>
      <p>Price: ${song.price} </p>
      
      <div>
      <audio controls>
      <source src="${song.preview}" />
  </audio>
      </div>
      <div>
      `
    }
    document.getElementById('song-list').innerHTML = template
    
  }
}






  