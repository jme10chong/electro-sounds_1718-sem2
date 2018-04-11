// source code obtained from The Coding Train

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  stroke(floor(random(255)),floor(random(255)),floor(random(255)));
  strokeWeight(5);
  point(x, y);
  var z = 5;

  var r = floor(random(4));

  switch(r) {
    case 0: x += z; break;
    case 1: x -= z; break;
    case 2: y += z; break;
    case 3: y -= z; break;
  }
}
