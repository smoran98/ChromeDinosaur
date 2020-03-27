class dino {
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  hits(baller) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = baller.x + baller.r * 0.5;
    let y2 = baller.y + baller.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, baller.r);
  }

  show() {
    image(dImg, this.x, this.y, this.r, this.r);

    fill(255, 50);
    //ellipseMode(CORNER);
    //ellipse(this.x, this.y, this.r, this.r);
  }
}