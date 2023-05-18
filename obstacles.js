class obstacle {
  constructor(x, y, width, height, speed, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
    this.frameX = 0;
    this.frameY = 0;
    this.randomise = Math.floor(Math.random() * 30 + 30);
    this.carType = Math.floor(Math.random() * numberOfCars);
  }
  draw() {
    if (this.type === `turtle`) {
      if (frame % this.randomise === 0) {
        if (this.frameX >= 1) this.frameX = 0;
        else this.frameX++;
      }
      //   ctx1.fillRect(this.x, this.y, this.width, this.height);
      ctx1.drawImage(
        turtle,
        this.frameX * 70,
        this.frameY * 70,
        70,
        70,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.type === `log`) {
      ctx1.drawImage(log, this.x, this.y, this.width, this.height);
    } else {
      //   ctx2.fillRect(this.x, this.y, this.width, this.height);
      ctx2.drawImage(
        car,
        this.frameX * this.width,
        this.carType * this.height,
        grid * 2,
        grid,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    // ctx3.fillStyle = `blue`;
    // ctx3.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += this.speed * gameSpeed;
    if (this.speed > 0) {
      if (this.x > canvas.width + this.width) {
        this.x = 0 - this.width;
        this.carType = Math.floor(Math.random() * numberOfCars);
      }
    } else if (this.x < 0 - this.width) {
      this.x = canvas.width;
    } else {
      this.frameX = 1;
    }
  }
}
function initObstacles() {
  //lane1
  for (let i = 0; i < 2; i++) {
    let x = i * 350;
    carsArry.push(
      new obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, `car`)
    );
  }
  //lane 2
  for (let i = 0; i < 2; i++) {
    let x = i * 350;
    carsArry.push(
      new obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, `car`)
    );
  }

  //lANE 3
  for (let i = 0; i < 2; i++) {
    let x = i * 400;
    carsArry.push(
      new obstacle(x, canvas.height - grid * 4 - 20, grid, grid, 2, `car`)
    );
  }

  //lane 4
  for (let i = 0; i < 2; i++) {
    let x = i * 400;
    logsArry.push(
      new obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, `log`)
    );
  }

  //lane 5
  for (let i = 0; i < 2; i++) {
    let x = i * 200;
    logsArry.push(
      new obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, `turtle`)
    );
  }
}
initObstacles();

function handleObstacles() {
  for (let i = 0; i < carsArry.length; i++) {
    carsArry[i].update();
    carsArry[i].draw();
  }
  for (let i = 0; i < logsArry.length; i++) {
    logsArry[i].update();
    logsArry[i].draw();
  }
  //collsion with car
  for (let i = 0; i < carsArry.length; i++) {
    if (collision(frogger, carsArry[i])) {
      ctx4.drawImage(
        collisions,
        0,
        100,
        100,
        100,
        frogger.x,
        frogger.y,
        50,
        50
      );
      squash.play();
      resetGame();
    }
  }
  function collision(first, second) {
    return !(
      first.x > second.x + second.width ||
      first.x + first.width < second.x ||
      first.y > second.y + second.height ||
      first.y + first.height < second.y
    );
  }

  if (frogger.y < 250 && frogger.y > 100) {
    safe = false;
    for (let i = 0; i < logsArry.length; i++) {
      if (collision(frogger, logsArry[i])) {
        frogger.x += logsArry[i].speed;
        safe = true;
      }
    }
    if (!safe) {
      for (let i = 0; i < 30; i++) {
        ripplesArry.unshift(new Particle(frogger.x, frogger.y));
      }
      splash.play();
      resetGame();
    }
  }
}

// log turtle collision

function resetGame() {
  frogger.x = canvas.width / 2 - frogger.width / 2;
  frogger.y = canvas.height - frogger.height - 40;
  score = 0;
  collisionCount++;
  gameSpeed = 1;
}
