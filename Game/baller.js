class baller {
  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 1;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

    // FILLED VERSION (since, its a baller)
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}