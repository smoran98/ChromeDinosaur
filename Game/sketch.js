let dinosaur;
let dImag;
let tImag;
let bImag;
let ballers = [];
let soundClass;

function preload() {
    const options = {
      probabilityThreshold: 0.95
    };
    soundClass = ml5.soundClass('SpeechCommands18w', options);
    dImg = loadImage('dinosaur.png');
    tImg = loadImage('baller.png');
    bImg = loadImage('background.png');
}

//got rid of probability
function mousePressed() {
  ballers.push(new Baller)
}

function setup() {
  createCanvas(800, 450);
  dinosaur = new dino();
  soundClass.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log[0](results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    dino.jump();
  }

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