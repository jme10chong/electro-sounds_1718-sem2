function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(10,10,100);
  for(var i=0; i<180; i++){
    let n = 18;
    let s = random(frameCount%100);
    let x = (i%n)*s;
    let y = floor(i/n)*s;
    fill(random(255),random(255),10);
    noStroke();
    ellipse(windowWidth/2 + x, windowHeight/2 + y, s, s);
    ellipse(windowWidth/2 + x, windowHeight/2 - y, s, s);
    ellipse(windowWidth/2 - x, windowHeight/2 + y, s, s);
    ellipse(windowWidth/2 - x, windowHeight/2 - y, s, s);
  }
}
