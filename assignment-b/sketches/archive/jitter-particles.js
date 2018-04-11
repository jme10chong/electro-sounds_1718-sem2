function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(var i=0; i<16; i++){
    let x = (i%4)*10; // remainder of i/4 cycle between 0, 1, 2, 3
    let y = floor(i/4)*10; // i/4 is always a multiple of 0.25, floor rounds the float down to an integer
    Particle(200+x*10, 200+y*10, noise(frameCount/120)*2);
  }
}

function Particle(x, y, z) {
  this.x = x;
  this.y = y;

  this.x += random(-z, z);
  this.y += random(-z, z);

  stroke(0);
  fill(0, 150);
  ellipse(this.x, this.y, 24, 24);
  noFill();
}
