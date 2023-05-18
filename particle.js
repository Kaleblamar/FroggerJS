class Particle {
  constructor(x, y) {
    this.x = x + 25;
    this.y = y + 25;
    this.radius = Math.random() * 20 + 1;
    this.opacity = 1;
    this.directionX = Math.random() * 1 - 0.5;
    this.directionY = Math.random() * 1 - 0.5;
  }
  draw() {
    ctx3.fillStyle = `rgba(150,150,150, ${this.opacity})`;
    ctx3.beginPath();
    ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx3.fill();
    ctx3.closePath();
  }
  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    if (this.opacity > 0.1) {
      this.opacity -= 0.9;
    }
    if (this.radis > 0.15) {
      this.radius -= 0.14;
    }
  }
  ripple() {
    if (this.radius < 50) {
      this.radius += 0.4;
      this.x -= 0.02;
      this.y -= 0.02;
    }
    if (this.opacity > 0) {
      this.opacity -= 0.02;
    }
  }
  drawRipple() {
    ctx1.strokeStyle = `rgba(255,255,255, ${this.opacity})`;
    ctx1.beginPath();
    ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx1.stroke();
    ctx1.closePath();
  }
}

function handleParticles() {
  //   for (let i = 0; i < particlesArry.length; i++) {
  //     particlesArry[i].update();
  //     particlesArry[i].draw();
  //   }

  for (particle of particlesArry) {
    particle.update();
    particle.draw();
  }
  if (particlesArry.length > maxParticles) {
    for (let i = 0; i < 30; i++) {
      particlesArry.pop();
    }
  }
  if (
    keys[`ArrowLeft`] ||
    keys[`ArrowRight`] ||
    keys[`ArrowUp`] ||
    keys[`ArrowDown`]
  ) {
    if (frogger.y > 250 && particlesArry.length < maxParticles + 10) {
      for (let i = 0; i < 10; i++) {
        particlesArry.unshift(new Particle(frogger.x, frogger.y));
      }
    }
  }
}

function handleRipples() {
  //water ripples
  for (ripples of ripplesArry) {
    ripples.ripple();
    ripples.drawRipple();
  }

  if (ripplesArry.length > 20) {
    for (let i = 0; i < 2; i++) {
      ripplesArry.pop();
    }
  }

  if (
    keys[`ArrowLeft`] ||
    keys[`ArrowRight`] ||
    keys[`ArrowUp`] ||
    keys[`ArrowDown`]
  ) {
    if (
      frogger.y < 250 &&
      frogger.y > 100 &&
      ripplesArry.length < maxParticles + 10
    ) {
      for (let i = 0; i < 20; i++) {
        ripplesArry.unshift(new Particle(frogger.x, frogger.y));
      }
    }
  }
}
