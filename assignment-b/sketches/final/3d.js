var x = 0;
var y = 0;
var z = 0;

let xSpeed = 20;
let ySpeed = 20;
let zSpeed = 20;

var array = [
  {'a':1, 'b':1, 'c':1},
  {'a':-1, 'b':1, 'c':1},
  {'a':1, 'b':-1, 'c':1},
  {'a':1, 'b':1, 'c':-1},
  {'a':-1, 'b':-1, 'c':1},
  {'a':-1, 'b':1, 'c':-1},
  {'a':1, 'b':-1, 'c':-1},
  {'a':-1, 'b':-1, 'c':-1},
]

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  directionalLight(255,255,255,0,0,1);
  background(255);
  noStroke();
  specularMaterial(255,0,0);

  for(let i = 0; i < array.length; i++) {
    push();
    translate((array[i].a)*x*noise(frameCount/40), (array[i].b)*y*noise(frameCount/50), (array[i].c)*z*noise(frameCount/60));
    sphere(100);
    pop();
  }



  x = x + xSpeed;
  y = y + ySpeed;
  z = z + zSpeed;

  if(x>windowWidth/2) {xSpeed = -xSpeed;}
  else if(x<-windowWidth/2) {xSpeed = -xSpeed;}

  if(y>windowHeight/2) {ySpeed = -ySpeed;}
  else if(y<-windowHeight/2) {ySpeed = -ySpeed;}

  if(z>500) {zSpeed = -zSpeed;}
  else if(z<-500) {zSpeed = -zSpeed;}
}
