function setup() {
  createCanvas(720,480);
  
  strokeWeight(2);
}

function draw() {  
  // NECK
      line(244,170,244,246);
      line(250,170,250,246);
      line(256,170,256,246);
  // ANTENNAS
      line(250,140,300,155);
      line(250,140,280,75);
      line(250,140,220,115);

  // BODY
    
    // WHEEL
      fill(125,125,125,255);
      strokeWeight(0);
      ellipseMode(CORNER)
      ellipse(212,298,64,64);
    // BODY
      strokeWeight(2);
      fill(0,0,0,255);
      rect(200,210,88,118);
    // BELT
      strokeWeight(0);
      fill(160,160,160,255)
      rect(199,229,90,8);

  // HEAD
      ellipseMode(CENTER);
      fill(0,0,0);
      ellipse(248,145,64,64);

      ellipseMode(CENTER);
      fill(255,255,255);
      ellipse(259,140,17,17);

      ellipseMode(CENTER);
      fill(255,255,255,125);
      ellipse(239,140,9,9);

      ellipseMode(CENTER);
      fill(255,255,255,125);
      ellipse(259,125,7,7);

      ellipseMode(CENTER);
      fill(255,255,255,125);
      ellipse(267,150,5,5);

      ellipseMode(CENTER);
      fill(0,0,0);
      ellipse(259,140,4,4);
}