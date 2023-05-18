function animate() {
  ctx1.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx2.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx3.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx4.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx5.clearRect(0, 0, canvas.clientWidth, canvas.height);

  handleRipples();
  ctx2.drawImage(background_lv12, 0, 0, canvas.width, canvas.height);
  handleParticles();
  frogger.draw();
  frogger.update();
  handleObstacles();
  handleScoreBoard();
  ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
  frame++;
  requestAnimationFrame(animate);
}
animate();

//event listerners
window.addEventListener(`keydown`, function (e) {
  //   keys = [];
  keys[e.key] = true;
  if (
    keys[`ArrowLeft`] ||
    keys[`ArrowRight`] ||
    keys[`ArrowDown`] ||
    keys[`ArrowUp`]
  ) {
    frogger.jump();
  }
});

window.addEventListener(`keyup`, function (e) {
  delete keys[e.key];
  frogger.moving = false;
  frogger.frameX = 0;
});

function scored() {
  score++;
  gameSpeed += 0.05;
  frogger.x = canvas.width / 2 - frogger.width / 2;
  frogger.y = canvas.height - frogger.height - 40;
  coin.play();
}

function handleScoreBoard() {
  ctx4.fillStyle = `black`;
  ctx4.strokeStyle = `black`;
  ctx4.font = `15px verdana`;
  ctx4.strokeText(`score`, 265, 15);
  ctx4.font = `60px verdana`;
  ctx4.fillText(score, 270, 65);
  ctx4.font = `15px verdana`;
  ctx4.strokeText(`collisions: ${collisionCount}`, 10, 175);
  ctx4.strokeText(`Game Speed: ${gameSpeed.toFixed(1)}`, 10, 195);
}
