function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10,10,100);
  for(var i=0; i<16; i++){
    let x = (i%4)*100; // remainder of i/4 cycle between 0, 1, 2, 3
    let y = floor(i/4)*100; // i/4 is always a multiple of 0.25, floor rounds the float down to an integer
    ellipse(100+x, 100+y, 100, 100);
  }
}
