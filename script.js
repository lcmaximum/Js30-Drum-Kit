function playDrums(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop function from running (trying to play 'null')
  audio.currentTime = 0; //rewind to start before playing
  key.classList.add("playing");
  audio.play();
}

window.addEventListener("keydown", playDrums);

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  this.classList.remove("playing"); //'this' refers to key bc event listener is attached to key
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
