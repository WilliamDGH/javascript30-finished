const keys = document.querySelectorAll(".key");

const play = function (key) {
  document.querySelector(`div[data-key="${key}"]`).classList.add("playing");
  setTimeout(function(){
    document.querySelector(`div[data-key="${key}"]`).classList.remove("playing")
  }, 30);
  document.querySelector(`audio[data-key="${key}"]`).currentTime = 0;
  document.querySelector(`audio[data-key="${key}"]`).play();

}

document.addEventListener("keydown", function (e) {
  let keyCode = e.keyCode;
  play(keyCode);
});
