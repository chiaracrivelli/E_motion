var vid = document.getElementById("video");
var vid02 = document.getElementById("video02");
var btn = document.getElementById('play-pause');
var btn02 = document.getElementById('play-pause02');

vid.ontimeupdate = function(){
  var percentage = ( vid.currentTime / vid.duration ) * 100;
  $("#custom-seekbar span").css("width", percentage + "%");
};

vid02.ontimeupdate = function(){
  var percentage02 = ( vid02.currentTime / vid02.duration ) * 100;
  $("#custom-seekbar02 span").css("width", percentage02 + "%");
};

$("#custom-seekbar").on("click", function(){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = ( left / totalWidth );
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});

$("#custom-seekbar02").on("click", function(){
    var offset02 = $(this).offset();
    var left02 = (e.pageX - offset02.left);
    var totalWidth02 = $("#custom-seekbar02").width();
    var percentage02 = ( left02 / totalWidth02 );
    var vidTime02 = vid02.duration * percentage02;
    vid02.currentTime = vidTime02;
});


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
	}
};

btn02.onclick = function() {
	// console.log("play!!!");
	togglePlayPause02();
};