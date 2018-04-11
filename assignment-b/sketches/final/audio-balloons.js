// var mic, analyzer;
// let pRms;
// let pSmooth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
}

function draw() {
  background(10,10,100);

  var rms = analyzer.getLevel();
  var numShapes = int(rms*5000);
  console.log(numShapes);

// valC = encoderValue;
// valD = valC - valP;
// valP = valC;
// valS += ((valD * 150) - valS) * 0.01;
// int steps = int(valS);
//
// let rms = analyzer.getLevel();
// let diff = rms - pRms;
// var smooth = ((diff)*10000 - pSmooth) * 10000;
// var numShapes = int(smooth);
// console.log(diff);

  for(var i = 0; i < numShapes; i++) {
    fill(random(255),random(255),random(255));
    ellipse(random(windowWidth), random(windowHeight), 50, 50);
  }
}
