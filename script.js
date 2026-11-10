const music = document.getElementById("birthdayMusic");
const button = document.getElementById("musicButton");
const label = button.querySelector("span");

button.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      label.textContent = "PAUSE THE MUSIC";
    } catch (error) {
      label.textContent = "ADD happy birthday.mp3";
    }
  } else {
    music.pause();
    label.textContent = "PLAY A MUSIC";
  }
});

music.addEventListener("ended", () => {
  label.textContent = "PLAY A MUSIC";
});
