var playlist = new playlist();
var song1 = new song("Nobody Compares","One Direction","3:33");
var song2 = new song("One Step Closer","Linking Park","2:48");
var song3 = new song("Steal My Girl","One Direction","3:48");
var song4 = new song("Until it's Gone","Linking Park","3:53");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);

var playlistElement = document.getElementById("playlist");
playlist.renderElement(playlistElement);

var prev = document.getElementById("prev");
prev.onclick = function(){
    playlist.prev();
    playlist.renderElement(playlistElement);
}
var next = document.getElementById("next");
next.onclick = function(){
    playlist.next();
    playlist.renderElement(playlistElement);
}
var stop = document.getElementById("stop");
stop.onclick = function(){
    playlist.stop();
    playlist.renderElement(playlistElement);
}