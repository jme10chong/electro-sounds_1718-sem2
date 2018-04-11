var yellow = [253,207,88];
var orange = [252, 116, 5];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  var diameter = 280;
  var a = diameter/2 + noise(frameCount)*10;
  // var rotationSpeed = noise(frameCount/120)*PI/2;
  var rotationSpeed = sin(frameCount/45)*PI/2;

  doctorStrange(a, diameter, rotationSpeed);
  doctorStrange(a, diameter, -rotationSpeed);
}


function doctorStrange(a, diameter, rotationSpeed) {
  // star
  stroke(yellow);
  push();
  translate(windowWidth/2, windowHeight/2);
  rotate(rotationSpeed);
  star(a, diameter);
  pop();

  // fractals
  for(var i = 0; i < 2; i++) {
    noFill();
    push();
    translate(windowWidth/2, windowHeight/2);
    rotate(rotationSpeed);
    fractal(0, -diameter+diameter*2*i, diameter/2);
    fractal(-diameter+diameter*2*i, 0, diameter/2);
    rotate(PI/4);
    fractal(0, -diameter+diameter*2*i, diameter/2);
    fractal(-diameter+diameter*2*i, 0, diameter/2);
    pop();
  }
}

function star(a, diameter) {
  line(-a,-a,0,-diameter);
  line(-a,-a,-diameter,0); // top left
  line(-a,a,-diameter,0);
  line(-a,a, 0,diameter); // bottom left
  line(a,a,0,diameter);
  line(a,a,diameter,0); // bottom right
  line(a,-a,diameter,0);
  line(a,-a,-0,-diameter); // top right

  rotate(PI/4);

  line(-a,-a,0,-diameter);
  line(-a,-a,-diameter,0); // top left
  line(-a,a,-diameter,0);
  line(-a,a, 0,diameter); // bottom left
  line(a,a,0,diameter);
  line(a,a,diameter,0); // bottom right
  line(a,-a,diameter,0);
  line(a,-a,-0,-diameter); // top right
}

function fractal(x, y, z) {
  noFill();
  stroke(orange);
  ellipse(x, y, z*1.43, z*1.43);
  stroke(yellow);
  rect(x-z/2, y-z/2, z, z); // normal fractal

  if (z > 2) {
    push();
    translate(x,y);
    rotate(sin(frameCount/40)*PI);
    fractal(0, 0, 0.7*z);
    pop();
  }
}
