const gameSound = document.querySelector(`#MainSound`);
window.onload = gameSound.play();

const coin = new Audio(`/FroggerJS/Audio/sound-frogger-coin-in.wav`);
const hop = new Audio(`/FroggerJS/Audio/sound-frogger-hop.wav`);
const squash = new Audio(`/FroggerJS/Audio/sound-frogger-squash.wav`);
const splash = new Audio(`/FroggerJS/Audio/sound-frogger-plunk.wav`);
const canvas = document.querySelector(`#canvas1`);
const ctx1 = canvas.getContext(`2d`);
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.querySelector(`#canvas2`);
const ctx2 = canvas2.getContext(`2d`);
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.querySelector(`#canvas3`);
const ctx3 = canvas3.getContext(`2d`);
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.querySelector(`#canvas4`);
const ctx4 = canvas4.getContext(`2d`);
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.querySelector(`#canvas5`);
const ctx5 = canvas5.getContext(`2d`);
canvas5.width = 600;
canvas5.height = 600;

const grid = 80;
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArry = [];
const maxParticles = 300;
const ripplesArry = [];
const carsArry = [];
const logsArry = [];
let safe = false;

//images

const background_lv12 = new Image();
background_lv12.src = `/FroggerJS/Backgrounds/FroggerBG_road.png`;

const grass = new Image();
grass.src = `/FroggerJS/Backgrounds/FroggerGrass.png`;

//collisions
const collisions = new Image();
collisions.src = `/FroggerJS/Sprites/collisions.png`;

const turtle = new Image();
turtle.src = `/FroggerJS/Sprites/turtlesSprites.png`;

const car = new Image();
car.src = `/FroggerJS/Sprites/carSprites.png`;

const log = new Image();
log.src = `/FroggerJS/Sprites/log.png`;

const frog = new Image();
frog.src = `/FroggerJS/Sprites/frog_spritesheet.png`;

let numberOfCars = 3;
