let dinosaur
let dImag
let tImag
let bImag
let ballers = [];
let soundClassifier;

function preload() {
    const options = {
      probabilityThreshold: 0.95
    };
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
    dImg = loadImage('dinosaur.png');
    tImg = loadImage('baller.jpg');
    bImg = loadImage('background.jpg');
}

function mousePressed() {
  ballers.push(new baller());
}

function setup() {
  createCanvas(800, 450);
  dinosaur = new dino();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    dinosaur.jump();
  }
}

function keyPressed() {
  if (key == ' '){
    dinosaur.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    ballers.push(new baller());
  }
  background(bImg);
  for (let b of ballers) {
    b.move();
    b.show();
    if (dinosaur.hits(b)) {
      console.log('game over');
      noLoop();
    }
  }
  
  background(bImg);
  dinosaur.show();
  dinosaur.move();
  
}