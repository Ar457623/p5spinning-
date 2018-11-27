let t = 10; // time variable


function setup() {
  createCanvas(700, 700);
  noStroke();
  
    
}


function draw() {
background("#840f0f");
fill("#ffffff");

textSize (40)
textFont("Georgia")
textStyle(ITALIC)
text('MOVE THE MOUSE',height/4,width/2.5);

 fill("#49617f")
  background(30,30); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 24
    ); // draw particle
    }
  }

  t = t + 0.02; // update time
    
    

}
 
    

