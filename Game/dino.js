class dino {
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0;
    this.gravity = 2;
  }

  jump(){
    if (this.y == height - this.r){
      this.vy = -32; //adjust jump
    }
   
  }

  hit(baller) {
    return collideCircleCircle(this.x, this.y, this.r, this.r, ,baller.x, baller.y, baller.r, baller.r);
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