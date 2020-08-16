"use strict";

var jsPlayingClass = "jsplaying";
var fileNameAttribute = 'data-audio-file';
var defaultAudio = new Audio('../Audio/odyssey6_01_homer.mp3');
var audios = new Map();

defaultAudio.onended = function() {
    element.classList.remove(jsPlayingClass);
};

function playclip(element) {

	 var id = element.id;
	
  	//document.getElementById("demo").innerHTML = "Paragraph changed.";

	togglePlayPauseAudio(element);
}

function togglePlayPauseAudio(element) {

	var audio = getAudio(element);

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
	//var audio = getDefaultAudioForTesting(element);

	var isPlaying = element.classList.contains(jsPlayingClass);

	return  !(isPlaying); // || audio.paused
}

function getAudioFullPath(element) {
	var audioDirPath = '../Audio/';

	var audioFileName = element.getAttribute(fileNameAttribute);
	var audioFullPath = audioDirPath + audioFileName;

	return audioFullPath;
}

function getAudio(element) {
	var audioFullPath = getAudioFullPath(element);
	var audio;

	// check if audio is already loaded
	if(audios.has(audioFullPath)) {
		audio = audios.get(audioFullPath);
	}
	else { 
		audio = new Audio(audioFullPath);
		audios.set(audioFullPath, audio);
	}

	audio.onended = function() {
  		element.classList.remove(jsPlayingClass);
		audios.delete(audioFullPath);
	};

	return audio;
}

function getDefaultAudioForTesting(element) {
	
	return defaultAudio;
}

function opencontextmenu(element) {
	var menu = document.getElementById('menu');
	menu.style.display = 'block';

        // overwrite the right click event
        document.addEventListener("contextmenu", showMenuEventListener);

       // close the menu on document click
        // TODO verify if the click is in the menu boundaries
        document.addEventListener("click", hideMenuEventListener);

		function showMenuEventListener(e) {
            e.preventDefault();         
            // show the menu        
            menu.style.display = 'block';
            // set the left and top position based on mouse event coordonates
            menu.style.left = e.x + 'px';
            menu.style.top = e.y + 'px';   
		}


		function hideMenuEventListener(e) {
			menu.style.display = 'none';
			document.removeEventListener("click", hideMenuEventListener);
		}
}