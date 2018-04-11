let img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = createImage(2000,20);
}

function draw() {
  img.loadPixels();

  for(let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {
      let n = x*img.width + y*img.height;

      let intensity = 200;

      let r = sin((frameCount + n)/10)*intensity;
      let g = cos((frameCount + n)/10)*intensity;
      let b = tan((frameCount + n)/10)*intensity;
      img.set(x,random(y+10),color(r,g,b));
    }
  }

  img.updatePixels();
  image(img,0,0,width,height);
}
