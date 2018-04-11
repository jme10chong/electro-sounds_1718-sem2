function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  noFill();
  drawLine(0,0,windowWidth,windowHeight);
}

function drawLine(pointX1, pointY1, pointX2, pointY2) {
  line(pointX1,pointY1,pointX2,pointY2);
  if (pointX2>2) {
    let x = 0.01;
    let y = 1-x;
    stroke(random(255));
    drawLine(pointX1+pointX2*x, pointY1, pointX2*y, pointY2);
    drawLine(pointX1, pointY1+pointY2*x, pointX2, pointY2*y);
  }
}
