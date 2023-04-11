// create an app object and intialize function
const app = {};

setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// Lights - On/Off
const lights = document.querySelector('.switch');

lights.addEventListener('click', function() {
    const onOff = document.getElementById('light');
    // turn lights on and off
    if (onOff.style.visibility == 'visible') {
        onOff.style.visibility = 'hidden'
    } else {
        onOff.style.visibility = 'visible';
    }
});

// Info - On/Off
const info = document.querySelector('.info');
info.addEventListener('click', function() {
    console.log('click me')
    const infoHover = document.querySelector('.info-hover')
    if (infoHover.style.visibility == 'visible') {
        infoHover.style.visibility = 'hidden'
    } else {
        infoHover.style.visibility = 'visible';
    }
})

// Music Player - On/Off
const stereo = document.querySelector('.stereo');
stereo.addEventListener('click', function() {
    const musicPlayer = document.querySelector('.music-player');
    if (musicPlayer.style.visibility == 'visible') {
        musicPlayer.style.visibility = 'hidden'
    } else {
        musicPlayer.style.visibility = 'visible';
    }
})

// Soundcloud Player - On/Off
const dj = document.querySelector('.dj');
dj.addEventListener('click', function() {
    const soundcloud = document.querySelector('.soundcloud');
    if (soundcloud.style.visibility == 'visible') {
        soundcloud.style.visibility = 'hidden'
    } else {
        soundcloud.style.visibility = 'visible';
    }
})


// MUSIC PLAYER

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Time on my Hands",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/01 Time on My Hands.m4a"
},
{
	name: "What's In a Name",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/02 What's in a Name.m4a"
},
{
	name: "Blues for Randy",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/03 Blues for Randy.m4a",
},
{
	name: "First Snow",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/04 First Snow.m4a",
},
{
	name: "Bach's Alive",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/05 They Kept Bach's Head Alive.m4a",
},
{
	name: "Swampbird",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/06 Swampbird.m4a",
},
{
	name: "Numero Uno",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/07 Numero Uno.m4a",
},
{
	name: "Minor Detail",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/08 Minor Detail.m4a",
},
{
	name: "Summer's Blues",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/09 Summer's Blues.m4a",
},
{
	name: "Dissention",
	artist: "Brian Buchanan",
	image: "./assets/backwardsglance.PNG",
	path: "./music/10 Dissention.m4a",
},
];

function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
    
        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }
            
        // Load the first track in the tracklist
    loadTrack(track_index);

// INITIALIZE APP

app.init = () => {
};

app.init();