var jsPlayingClass = "jsplaying";
var defaultAudio = new Audio('../Audio/odyssey6_01_homer.mp3');

defaultAudio.onended = function() {
    element.classList.remove(jsPlayingClass);
};

function playclip(element) {

	 var id = element.id;
	
  	//document.getElementById("demo").innerHTML = "Paragraph changed.";

	togglePlayPauseAudio(element);
}

function togglePlayPauseAudio(element) {

	var audio = getDefaultAudioForTesting(element);

 	//audio.play();

	if ( isPausedOrStopped(element)) {
		element.classList.add(jsPlayingClass);
        audio.play();
	}
	else{
		audio.pause();
        //audio.currentTime = 0
        element.classList.remove(jsPlayingClass);
    }
}

function isPausedOrStopped(element) {
	var audio = getDefaultAudioForTesting(element);

	var isPlaying = element.classList.contains(jsPlayingClass);

	return  !(isPlaying); // || audio.paused
}

function getDefaultAudioForTesting(element) {
	
	return defaultAudio;
}