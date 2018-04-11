function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
}

function draw() {
  fill(125);
  rect(0, windowHeight/2-10, windowWidth/2, 20) // left middle bar

  for(var i = 0; i<5; i++) // top left rows
  {
    fill(240);
    rect(0, windowHeight/2-15-i*80, windowWidth/2, 5);
    fill(200);
    rect(0, windowHeight/2-65-i*80, windowWidth/2, 50);
    fill(100);
    rect(0, windowHeight/2-80-i*80, windowWidth/2, 15);
    fill(50);
    rect(0, windowHeight/2-90-i*80, windowWidth/2, 10);
  }

  for(var i = 0; i<5; i++) // bottom left rows
    {
    fill(240);
    rect(0, windowHeight/2+10+i*80, windowWidth/2, 5);
    fill(200);
    rect(0, windowHeight/2+15+i*80, windowWidth/2, 50);
    fill(100);
    rect(0, windowHeight/2+65+i*80, windowWidth/2, 15);
    fill(50);
    rect(0, windowHeight/2+80+i*80, windowWidth/2, 10);
    }

  fill(0);
  rect(windowWidth/2, windowHeight/2-40, windowWidth/2, 40) // right middle bar

  for(var i = 0; i<3; i++) // top right rows
  {
  fill(240);
  rect(windowWidth/2, windowHeight/2-80-i*160, windowWidth/2, 40);
  fill(200);
  rect(windowWidth/2, windowHeight/2-120-i*160, windowWidth/2, 40);
  fill(100);
  rect(windowWidth/2, windowHeight/2-160-i*160, windowWidth/2, 40);
  fill(50);
  rect(windowWidth/2, windowHeight/2-200-i*160, windowWidth/2, 40);
  }

  for(var i = 0; i<3; i++) // bottom right rows
  {
  fill(240);
  rect(windowWidth/2, windowHeight/2+i*160, windowWidth/2, 40);
  fill(200);
  rect(windowWidth/2, windowHeight/2+40+i*160, windowWidth/2, 40);
  fill(100);
  rect(windowWidth/2, windowHeight/2+80+i*160, windowWidth/2, 40);
  fill(50);
  rect(windowWidth/2, windowHeight/2+120+i*160, windowWidth/2, 40);
  }
}
