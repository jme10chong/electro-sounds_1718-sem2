let mic, analyzer;
let pRms;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
}

function draw() {
  background(255);

  let rms = analyzer.getLevel();
  let diff = rms - pRms;
  var x = map(diff, 0, 1, 100, 200);
  console.log(int(x));

  for(let i = 0; i < int(x); i++) {
      fill(125);
      rect(int(x)*2, int(x)*2, 100, 100);
  }

  for(let i = 0; i < 10; i++) {
    console.log(diff);
    if(diff < 0.0005) {
      diff = 0;
    }
    var x = sin(map(diff, 0, 1, 0, windowWidth))* 5000;
    var y = sin(map(diff, 0, 1, 0, windowHeight))* 5000;
    fill(125);
    rect(windowWidth/2 + x/10, windowHeight/2 + y/10, 10*x, 10*y);
  }

  pRms = rms;
}
