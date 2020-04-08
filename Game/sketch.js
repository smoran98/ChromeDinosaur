let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let soundClassifier;

var mode;


function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  trains.push(new Train());
}

function setup() {
  mode = 0;
  
  createCanvas(800, 450);
  textSize(21);
  unicorn = new Unicorn();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    unicorn.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  clear();
  if (mode==0) {
    text('ENTER to restart',20,40);
  }
  
   if (random(1) < 0.005) {
     trains.push(new Train());
   }
  
  background(bImg);
  for (let t of trains) {
    t.move();
    t.show();
    if (unicorn.hits(t)) {
      console.log('game over');
      noLoop();
    }
  }

  unicorn.show();
  unicorn.move();
  
}

function keyPressed() {
  if (keyCode===ENTER) {
    mode = 0;
  }
}