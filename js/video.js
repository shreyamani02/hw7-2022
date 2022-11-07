var video;
var slider;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	slider = document.querySelector("#slider")
	video.autoplay = false
	video.loop = false
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " +video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed is " +video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video Ahead");
	if (video.currentTime < video.duration){
		video.currentTime = video.currentTime + 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Current time in video is " +video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Adds Old School Styling for Video");
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removes Old School Styling for Video");
	video.classList.remove('oldSchool');
});
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Slider functionality");
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
})