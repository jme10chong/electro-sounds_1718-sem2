var video;
var a = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight)
  background(0);
  noStroke();
}

function draw() {
  video.loadPixels();
  // image(video, 0, 0);
  var x = windowWidth;
  var y = windowHeight;
  var z = 500; // image width
  copy(video, x/2, 0, z, y, x/2+cos(a)*x*0.5, 0, z, y); // horizontal movement
  copy(video, x/2-z, 0, z, y, x/2-cos(a)*x*0.5-z, 0, z, y); // horizontal movement backwards
  copy(video, 0, y/2, x, z, 0, y/2+cos(a)*y*0.5, x, z); // vertical movement
  copy(video, 0, y/2-z, x, z, 0, y/2-cos(a)*y*0.5-z, x, z); // vertical movement
  a = (a+0.1);
  if(cos(a)<0){
    a=a+3;
  }
}
