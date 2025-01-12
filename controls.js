const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶";
  }
});

video.addEventListener("timeupdate", () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
  console.log(`${Math.round(video.currentTime)}/${Math.round(video.duration)}`);
});

progressBar.addEventListener("input", () => {
  const newTime = (progressBar.value / 100) * video.duration;
  video.currentTime = newTime;
});

volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value / 100;
});
