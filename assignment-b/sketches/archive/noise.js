function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(255);
  let x = noise(frameCount*0.01, frameCount*0.01);
  noStroke();
  fill(200,200,10);
  ellipse(x*windowWidth/2,windowHeight/2,100,100);
}
