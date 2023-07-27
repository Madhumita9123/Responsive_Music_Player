document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playlistLinks = document.querySelectorAll(".playlist a");
  
    // Add event listeners to playlist links to handle song changes
    playlistLinks.forEach((link) => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const songUrl = this.getAttribute("href");
        audioPlayer.src = songUrl;
        audioPlayer.play();
      });
    });
  });
  