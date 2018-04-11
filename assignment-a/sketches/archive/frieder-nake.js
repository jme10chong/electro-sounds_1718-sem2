var a = [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480]

function setup() {
    createCanvas(480, 480);
    background(0);
}



function draw() {
  for(var i = 0; i<a.length; i++) // vertical lines
    {
      fill(255);
      stroke(0);
      rect(0+i*30, 0, 15, 480);
    }

  fill(255);
  noStroke();
  arc(240,240,360,360, 0, 2*PI); // main ellipse

  for(var i = 0; i<25; i++) // vertical lines
    {
      if (i%2 == 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      noStroke();
      arc(240,240,360,360, (1.455 + 0.04 *i)*PI, (1.545 - 0.04 * i)*PI, OPEN);
    }


}
