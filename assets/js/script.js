var vid = document.getElementById("video");
var vid02 = document.getElementById("video02");
var btn = document.getElementById('play-pause');
var btn02 = document.getElementById('play-pause');

vid.ontimeupdate = function(){
  var percentage = ( vid.currentTime / vid.duration ) * 100;
  $("#custom-seekbar span").css("width", percentage+"%");
};

$("#custom-seekbar").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = ( left / totalWidth );
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()


function togglePlayPause(){
	if(video.paused){
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
};

btn.onclick = function() {
	// console.log("play!!!");
	togglePlayPause();
};

function togglePlayPause02(){
	if(video02.paused){
		btn02.className = "pause";
		video02.play();
	} else {
		btn02.className = "play";
		video02.pause();
};

btn02.onclick = function() {
	// console.log("play!!!");
	togglePlayPause02();
};