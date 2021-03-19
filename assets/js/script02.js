var vid02 = document.getElementById("video02");
var btn02 = document.getElementById('play-pause');

vid02.ontimeupdate = function02(){
  var percentage02 = ( vid02.currentTime / vid02.duration ) * 100;
  $("#custom-seekbar02 span").css("width", percentage02+"%");
};

$("#custom-seekbar02").on("click", function(e){
    var offset02 = $(this).offset02();
    var left02 = (e.pageX - offset02.left);
    var totalWidth02 = $("#custom-seekbar02").width();
    var percentage02 = ( left02 / totalWidth02 );
    var vidTime02 = vid02.duration * percentage02;
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