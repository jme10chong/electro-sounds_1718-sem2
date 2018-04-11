var arraya;
var arrayb;

function setup() {
    createCanvas(520, 630);
    background(0,0,0);
}

function draw() {
  arraya = [
    {'a':0, 'b':0, 'c':125}, // blue
    {'a':255, 'b':140, 'c':0}, // orange
    {'a':0, 'b':175, 'c':0}, // green
    {'a':200, 'b':0, 'c':0}, // red
    {'a':255, 'b':220, 'c':0}, // yellow
    {'a':100, 'b':0, 'c':100}, // purple
    {'a':0, 'b':0, 'c':125}, // blue
    {'a':255, 'b':140, 'c':0}, // orange
  ];

  arrayb = [
    {'x':200, 'y':0, 'z':0}, // red
    {'x':100, 'y':0, 'z':100}, // purple
    {'x':255, 'y':140, 'z':0}, // orange
    {'x':0, 'y':175, 'z':0}, // green
    {'x':0, 'y':0, 'z':125}, // blue
    {'x':255, 'y':220, 'z':0}, // yellow
    {'x':0, 'y':175, 'z':0}, // green
    {'x':200, 'y':0, 'z':0}, // red
    {'x':0, 'y':0, 'z':125}, // blue
    {'x':255, 'y':220, 'z':0}, // yellow
  ];

  noStroke();
  for(var i = 0; i<8; i++)
  {
    fill(arraya[i].a, arraya[i].b, arraya[i].c);
    rect(20+i*28, 20, 28, 280);
  } // top left quadrant

  for(var i = 0; i<10; i++)
  {
    fill(arrayb[i].x, arrayb[i].y, arrayb[i].z);
    rect(268, 20+i*28, 224, 28);
  } // top right quadrant

  for(var i = 0; i<10; i++)
  {
    fill(arrayb[i].x, arrayb[i].y, arrayb[i].z);
    rect(268+i*21.75, 330, 28, 280);
  } // bottom right quadrant

  for(var i = 0; i<8; i++)
  {
    fill(arraya[i].a, arraya[i].b, arraya[i].c);
    rect(20, 330+i*35, 224, 35);
  } // bottom left quadrant
}
