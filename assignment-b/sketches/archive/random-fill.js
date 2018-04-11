function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
}

function draw() {
  var x = floor(random(windowHeight));
  noStroke();
  fill(floor(random(0,255)), floor(random(0,255)), floor(random(0,255)));
  ellipse(windowWidth/2 + random(x, -x), windowHeight/2  + random(x, -x), 20, 20);
}
