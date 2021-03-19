var vid = document.getElementById("video");
var btn = document.getElementById('play-pause');

vid.ontimeupdate = function(){
  var percentage = ( vid.currentTime / vid.duration ) * 100;
  $("#custom-seekbar02 span").css("width", percentage+"%");
};

$("#custom-seekbar02").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar02").width();
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
}

	btn.onclick = function() {
	// console.log("play!!!");
	togglePlayPause();
};