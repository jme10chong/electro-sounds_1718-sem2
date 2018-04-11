let a = 0;
let speed = 0.002;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  for(var i=0; i<16; i++) {
    let j = (i%4)*150;
    let k = floor(i/4)*150;
    drawFlower(j+100, k+100, 150);
  }

}

function drawFlower(x, y, size) {
  stroke(0);
  fill(0);
  ellipse(x, y, size, size); // ellipse border

  for(var i=0; i<24; i++) { // green leaves
    stroke(0,255,0);
    strokeWeight(0.1*size);
    push();
    translate(x,y);
    rotate(i*15 + a);
    line(0, 0, 0.4*size, 0);
    pop();
    a = a + speed;
  }

  for(var i=0; i<15; i++) { // red flower
    stroke(255,0,0);
    strokeWeight(0.12*size);
    push();
    translate(x,y);
    rotate(i*24 - a);
    rect(0, 0, 0.2*size, 0.2*size);
    pop();
    a = a + speed;
  }

  fill(255,255,0); // yellow centre
  ellipse(x, y, 0.4*size, 0.4*size);
}
