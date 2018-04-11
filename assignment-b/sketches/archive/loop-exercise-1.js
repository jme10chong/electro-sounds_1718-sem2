var a = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250]

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,0);
  for(var i = 0; i<a.length; i++) // loop
  {
    let s = sin(frameCount * 0.1) * 150;
    fill(20, 125, 150); // theR, theG, theB values selected from var "a"
    ellipse(75+i*125, 60+i*75, 0.1*s, 0.9*s); // var "i" used to place each
                                              // shape reiteration a different
                                              // positions on the screen
    fill(69, 169, a[i]);
    ellipse(75+i*125, 735+(-i)*75, 1.57*s, 0.1*s);
  }
}

// make use of an array, draw 10 shapes
// the colour for each shape is defined inside of an array
// use a loop to read the colour of the shape
// for every iteration draw a shape
// each shape is in a different position

//  let s = sin(frameCount * 0.1) * 100;
//  rect(width/2, height/2, 300 + s, 300 + s);

// var “i” will only be used in arrays, locally
// “i++” means value of i plus 1
