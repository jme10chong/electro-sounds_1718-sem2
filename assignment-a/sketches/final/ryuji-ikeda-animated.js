var a = [240, 200, 100, 50]

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
    frameRate(5);
}

function draw() {

  for(var i = 0; i<a.length; i++) // left middle bar
  {
    let s = (frameCount * 2);
    fill(a[(s+2)%4]);
    rect(0, windowHeight/2-10, windowWidth/2, 20);
  }

  for(var i = 0; i<5; i++) // top left rows
  {
    let s = (frameCount * 1);
    fill(a[s%4]);
    rect(0, windowHeight/2-15-i*80, windowWidth/2, 5);
    fill(a[(s+1)%4]);
    rect(0, windowHeight/2-65-i*80, windowWidth/2, 50);
    fill(a[(s+2)%4]);
    rect(0, windowHeight/2-80-i*80, windowWidth/2, 15);
    fill(a[(s+3)%4]);
    rect(0, windowHeight/2-90-i*80, windowWidth/2, 10);
  }

  for(var i = 0; i<5; i++) // bottom left rows
  {
    let s = (frameCount * 3);
    fill(a[s%4]);
    rect(0, windowHeight/2+10+i*80, windowWidth/2, 5);
    fill(a[(s+1)%4]);
    rect(0, windowHeight/2+15+i*80, windowWidth/2, 50);
    fill(a[(s+2)%4]);
    rect(0, windowHeight/2+65+i*80, windowWidth/2, 15);
    fill(a[(s+3)%4]);
    rect(0, windowHeight/2+80+i*80, windowWidth/2, 10);
  }

  for(var i = 0; i<a.length; i++) // right middle bar
  {
    let s = (frameCount * 2);
    fill((a[(s+2)%4]) / 1.5);
    rect(windowWidth/2, windowHeight/2-40, windowWidth/2, 40);
  }

  for(var i = 0; i<3; i++) // top right rows
  {
    let s = (frameCount * 3);
    fill(a[s%4]);
    rect(windowWidth/2, windowHeight/2-80-i*160, windowWidth/2, 40);
    fill(a[(s+1)%4]);
    rect(windowWidth/2, windowHeight/2-120-i*160, windowWidth/2, 40);
    fill(a[(s+2)%4]);
    rect(windowWidth/2, windowHeight/2-160-i*160, windowWidth/2, 40);
    fill(a[(s+3)%4]);
    rect(windowWidth/2, windowHeight/2-200-i*160, windowWidth/2, 40);
  }

  for(var i = 0; i<3; i++) // bottom right rows
  {
    let s = (frameCount * 2);
    fill(a[s%4]);
    rect(windowWidth/2, windowHeight/2+i*160, windowWidth/2, 40);
    fill(a[(s+1)%4]);
    rect(windowWidth/2, windowHeight/2+40+i*160, windowWidth/2, 40);
    fill(a[(s+2)%4]);
    rect(windowWidth/2, windowHeight/2+80+i*160, windowWidth/2, 40);
    fill(a[(s+3)%4]);
    rect(windowWidth/2, windowHeight/2+120+i*160, windowWidth/2, 40);
  }
}
