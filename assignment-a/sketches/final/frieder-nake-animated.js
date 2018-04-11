function setup() {
    createCanvas(480, 480);
    background(0);
}

function draw() {
background(0);
let s = sin(frameCount*0.075)

let lineWidth = 15;
let numLines = width/lineWidth;

for(var i=0;i<numLines;i++) {
  if(i%2 == 0 ) {
    fill(s < 0 ? 255 : 0);
  } else {
    fill(s > 0 ? 255 : 0);
  }
  // fill(i%2 == 0 ? (s < 0 ? 255 : 0) : (s > 0 ? 255 : 0));

  rect(i*lineWidth,0,lineWidth,height);
}

fill(255);
noStroke();
arc(240,240,360,360, 0, 2*PI); // main ellipse

for(var i = 0; i<25; i++) // vertical lines
  {
    if (i%2 == 0) {
      fill(s < 0 ? 255 : 0);
    }
    else {
      fill(s > 0 ? 255 : 0);
    }
    noStroke();
    arc(240,240,360,360, (1.455 + 0.04 *i)*PI, (1.545 - 0.04 * i)*PI, OPEN);
  }
}
