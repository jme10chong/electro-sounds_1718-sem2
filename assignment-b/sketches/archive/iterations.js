function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
}

function draw() {
  background(255);

  for (var x = 50; x <= width-50; x += 20) {
    for (var y = 50; y <= height-50; y+=20) {
      line(x-5, y-5, x+5, y+5);
      line(x+5, y-5, x-5, y+5);
    }
  }

  for (var x = 50; x <= width-50; x += 20) {
    for (var y = 50; y <= height-50; y+=20) {
      line(x, y, width/2, height/2);
    }
  }

  for (var x = 50; x <= width-50; x += 20) {
    for (var y = 50; y <= height-50; y+=20) {
      ellipse(x, y, 40, 40);
    }
  }

  for (var x = 50; x < width-50; x += 20) {
    for (var y = 50; y < height-50; y+=20) {
      //rect(x-10, y-10, 22, 22);
      for (var i = 0; i < 16; i+=4) {
        line(x + i, y, x + i, y + 12);
      }
      line(x, y, x + 12, y + 12);
    }
  }

}
