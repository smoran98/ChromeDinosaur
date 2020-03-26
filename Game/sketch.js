let dinosaur
let tImag
let bImag
let trains = [];

function preload() {
    uImg = loadImage('dinosaur.png');
    tImg = loadImage('baller.png');
    bImg = loadImage('background.png');
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
}

function draw() {
  background(220);
  unicorn.show();
  
}