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
  //lower probability of ballers
  if (random(1) < 0.005) {
     ballers.push(new baller());
  }
  background(bImg);
    for (let b of ballers) {
    b.move();
    b.show();
    if (dino.hits(t)) {
      console.log('GAME OVER');
      noLoop();
    }
  }
  dinosaur.show();
  dinosaur.move();
  

}