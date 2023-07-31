const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const progressBar = document.querySelector(".progress");

const playlistLinks = document.querySelectorAll(".playlist a");
let currentSongIndex = 0;
let isPlaying = false;

function playSong(index) {
  audioPlayer.src = playlistLinks[index].getAttribute("href");
  audioPlayer.play();
  isPlaying = true;
  playBtn.textContent = "Pause";
}

function pauseSong() {
  audioPlayer.pause();
  isPlaying = false;
  playBtn.textContent = "Play";
}

function nextSong() {
  if (currentSongIndex < playlistLinks.length - 1) {
    currentSongIndex++;
    playSong(currentSongIndex);
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    playSong(currentSongIndex);
  }
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong(currentSongIndex);
  }
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
