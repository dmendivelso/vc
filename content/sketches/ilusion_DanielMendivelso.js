let circle1 = 20;
let circle2 = 8;
let circle2_X = 0;
let circle2_Y = 0;
let tr1 = 255;
let tr2 = 0;

let radius = 30;
let dt = 1 / 60.0;
// Frecuencia
let f = 0.2;
// Velocidad angular
let w = 0.0;
// Tiempo
let t = 0.0 - dt;

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(222, 201, 144);
  circle2_X = width / 2;
  circle2_Y = height / 2;
  fill(0);
  textSize(20);
  noStroke();
  for (let i = 0; i < 18; i++) {
    noFill();
    stroke(40, 124, 27);
    strokeWeight(6);
    circle(width / 2, height / 2, circle1 + i * 25);
  }

  push();
  translate(width / 2, height / 2);
  w = TWO_PI * f;
  t += dt;
  for (let i = 0; i < 19; i++) {
    noFill();
    stroke(41, 77, 202, tr1);
    strokeWeight(6);
    circle2_X = radius * cos(w * t);
    circle2_Y = radius * sin(w * t);
    circle(circle2_X, circle2_Y, circle2 + i * 25);
  }
  pop();
  for (let i = 0; i < 19; i++) {
    noFill();
    stroke(41, 77, 202, tr2);
    strokeWeight(6);
    circle(mouseX, mouseY, circle2 + i * 25);
  }
}

function mouseDragged() {
  tr1 = 0;
  tr2 = 255;
}

function mouseReleased() {
  tr1 = 255;
  tr2 = 0;
  circle2_X = mouseX;
  circle2_Y = mouseY;
  radius = calculateRadius(circle2_X, circle2_Y);
  if (radius > 240) {
    radius = 240;
  }
  t = calculateTime(circle2_X, circle2_Y);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    radius += 2;
  } else if (keyCode === DOWN_ARROW) {
    radius -= 2;
  }
}

function calculateRadius(x, y) {
  let sum = pow(x - width / 2, 2) + pow(y - height / 2, 2);
  let res = sqrt(sum);
  return floor(res);
}

function calculateTime(x, y) {
  let coefT = 0;
  let newX = x - width / 2;
  let newY = y - height / 2;
  //Calcular y
  if (y >= height / 2) {
    if (x > width / 2) {
      //I
      console.log("quad1");
      coefT = 0 + calculateDistancePos(newX, newY);
    } else {
      console.log("quad2");
      //II
      coefT = (1 / 4) * (1 / f) + calculateDistanceNeg(newX, newY);
    }
  } else {
    if (x > width / 2) {
      //IV
      console.log("quad4");
      coefT = (3 / 4) * (1 / f) + calculateDistanceNeg(newX, newY);
    } else {
      //III
      console.log("quad3");
      coefT = (1 / 2) * (1 / f) + calculateDistancePos(newX, newY);
    }
  }
  return coefT;
}

function calculateDistancePos(x, y) {
  y = -y;
  let b = y - x;
  let v1 = createVector(-b, 0);
  let v2 = createVector(x, y);
  let v3 = createVector(0, b);
  let dis1 = sqrt(pow(v1.x - v2.x, 2) + pow(v1.y - v2.y, 2));
  let dis2 = sqrt(pow(v1.x - v3.x, 2) + pow(v1.y - v3.y, 2));
  return dis1 / dis2;
}

function calculateDistanceNeg(x, y) {
  y = -y;
  let b = y + x;
  let v1 = createVector(0, b);
  let v2 = createVector(x, y);
  let v3 = createVector(b, 0);
  let dis1 = sqrt(pow(v1.x - v2.x, 2) + pow(v1.y - v2.y, 2));
  let dis2 = sqrt(pow(v1.x - v3.x, 2) + pow(v1.y - v3.y, 2));
  return dis1 / dis2;
}
