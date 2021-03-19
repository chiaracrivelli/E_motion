var vid02 = document.getElementById("video02");
var btn = document.getElementById('play-pause');

vid.ontimeupdate = function(){
  var percentage = ( vid02.currentTime / vid02.duration ) * 100;
  $("#custom-seekbar02 span").css("width", percentage+"%");
};

$("#custom-seekbar02").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar02").width();
    var percentage = ( left / totalWidth );
    var vidTime02 = vid02.duration * percentage;
    vid02.currentTime02 = vidTime02;
});//click()

function togglePlayPause(){
	if(video.paused){
		btn02.className02 = "pause";
		video02.play();
	} else {
		btn02.className02 = "play";
		video02.pause();
	}
}

	btn02.onclick = function() {
	// console.log("play!!!");
	togglePlayPause();
};