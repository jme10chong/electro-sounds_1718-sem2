function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10);
  var size = windowHeight*0.7;
  var spin = noise(frameCount*0.001)*50;

  push(); // upright square
  translate(windowWidth/2, windowHeight/2);
  rotate(spin);
  square(0, 0, size);
  pop();

  push(); // slanted square
  translate(windowWidth/2, windowHeight/2);
  rotate(spin);
  square(0, 0, size); // slanted square
  pop();
}

function square(x, y, z) {
  strokeWeight(1);
  fill(30);
  stroke(242,125,12);
  ellipse(x, y, z*1.43, z*1.43);
  stroke(253,207,88);
  rect(x-z/2, y-z/2, z, z); // normal square

  if (z > 2) {
    push();
    translate(x,y);
    rotate(PI/4);
    square(0, 0, 0.7*z);
    pop();
  }
}
