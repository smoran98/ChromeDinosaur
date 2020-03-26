let dinosaur
let dImag
let tImag
let bImag
let ballers = [];

function preload() {
    dImg = loadImage('dinosaur.png');
    tImg = loadImage('baller.png');
    bImg = loadImage('background.png');
}

function setup() {
  createCanvas(800, 450);
  dinosaur = new dino();
}

function keyPressed() {
  if (key == ' '){
    dinosaur.jump();
  }
}

function draw() {
  background(bImg);
  dinosaur.show();
  dinosaur.move();
  
}