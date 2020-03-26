class baller {
  constructor() {
    this.r = 75; //baller size reduced
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 13;//baller speed
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);
    //BOXED VERSION
    //fill(255, 50);
    //rect(this.x, this.y, this.r, this.r);
  }
}