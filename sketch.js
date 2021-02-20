var hr,mn,sc,scAngle,hrAngle,mnAngle;
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255); 
  hr = hour();
  mn = minute();
  sc = second(); 
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  translate(200,200);
  rotate(-90);
  stroke(255,0,0);
  strokeWeight(7);
  push();
  rotate(scAngle);
  line(0,0,100,0);
  pop();
  push();
  stroke(0,255,0);
  rotate(mnAngle);
  line(0,0,100,0);
  pop();
  push();
  stroke(0,0,255);
  rotate(hrAngle);
  line(0,0,100,0);
  pop();
  noFill();
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0, scAngle);
  stroke(0,255,0);
  arc(0, 0, 280, 280, 0, mnAngle);
  stroke(0,0,255);
  arc(0, 0, 260, 260, 0, hrAngle);

}

