let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);
  for(let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
        particles.splice(i,1);
    }
  }
}

class Particle {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  finished() {
    return this.x > windowWidth;
  }
  update() {
    let numLines = 100;
    this.x += windowWidth/numLines;
    this.y += windowHeight/numLines;
  }
  show() {
    stroke(0, random(150), 0);
    for(var i = 0; i < 10; i++) { // diagonal lines
      line(this.x, 0, this.x, this.y); // top left to bottom right
      line(0, this.y, this.x, this.y); // top left to bottom right

      line(windowWidth-this.x, windowHeight, windowWidth-this.x, windowHeight-this.y); // bottom right to top left
      line(windowWidth, windowHeight-this.y, windowWidth-this.x, windowHeight-this.y); // bottom right to top left

      line(windowWidth-this.x, 0, windowWidth-this.x, this.y); // top right to bottom left
      line(windowWidth-this.x, this.y, windowWidth, this.y); // top right to bottom left

      line(this.x, windowHeight, this.x, windowHeight-this.y); // bottom left to top right
      line(0, windowHeight-this.y, this.x, windowHeight-this.y); // bottom left to top right
    }
  }
}
