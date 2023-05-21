console.log(`hello`);

const themeSong = document.querySelector(`#themeSong`);

setTimeout(() => {
  window.onload = themeSong.play();
}, 1200);

const coin = new Audio(`/FroggerJS/Audio/sound-frogger-coin-in.wav`);

const btnSound = document.querySelector(`button`);
btnSound.addEventListener(`click`, function () {
  coin.play();
});
