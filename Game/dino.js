class dino {
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0;
    this.gravity = 2;
  }

  jump(){
    this.vy = -22;
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  show() {
    rect(this.x, this.y, 50, 50);
  }
}