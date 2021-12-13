var p,
  x,
  y,
  r,
  space,
  decrease,
  move = 0;
let circleX = [];
let circleY = [];
function setup() {
  createCanvas(621, 621);
  frameRate(5);
  move = 0;
  r = 15;
  space = 20;
  decrease = true;
  resetSketch();
  var button = createButton("Change radius");
  button.position(25, 25);
  button.mousePressed(resetSketch);

  var button2 = createButton("decrese size");
  button2.position(25, 75);
  button2.mousePressed(() => {
    space--;
    resetSketch(true);
  });
}

function resetSketch(size = false) {
  if (!size) {
    if (r == 1) {
      decrease = false;
    } else if (r == (width - 1) / space / 2) {
      decrease = true;
    }
    if (decrease) {
      r--;
    } else {
      r++;
    }
  }
  console.log("radius", r);
  circleX = [];
  circleY = [];
  move = 0;
  p = 1 - r;
  x = -1;
  y = r;
  clear();
  loop();
}

function draw() {
  background(0, 0, 40);

  let middle = floor((width - 1) / space / 2) * space;
  for (let i = 0; i < width - 1 / space; i += 1) {
    stroke(0, 200, 0);
    strokeWeight(1);
    line(i * space, 0, i * space, height - 1);
    line(0, i * space, width - 1, i * space);
  }

  push();
  translate(middle, 0);
  fill(150, 90);
  rect(move, 0, space, height);
  move += space;
  pop();

  fill(255, 0, 0);
  square(middle, middle, space);

  res = calculateOctant(middle);

  translate(middle, middle);
  for (let i = 0; i < circleX.length; i++) {
    if (i % 8 == 0) {
      fill(255, 0, 0);
    } else if (i % 8 == 1) {
      fill(255, 255, 255);
    } else if (i % 8 == 2) {
      fill(0, 0, 255);
    } else if (i % 8 == 3) {
      fill(255, 255, 0);
    } else if (i % 8 == 4) {
      fill(0, 255, 255);
    } else if (i % 8 == 5) {
      fill(255, 0, 255);
    } else if (i % 8 == 6) {
      fill(0, 255, 0);
    } else if (i % 8 == 7) {
      fill(200, 200, 200);
    }
    square(circleX[i], circleY[i], space);
  }
  if (res == true) {
    noLoop();
  }
}

function calculateOctant(middle) {
  x += 1;
  // Mid-point is inside or on the perimeter
  if (p <= 0) {
    p = p + 2 * x + 1;
  } else {
    y -= 1;
    p = p + 2 * x - 2 * y + 1;
  }
  //console.log("x: " +x+",y: "+y+",p: "+p);
  savePointsCircle(x * space, y * space, middle);
  if (x >= y - 1) {
    return true;
  }
  return false;
}

function savePointsCircle(x, y, middle) {
  circleX.push(x);
  circleY.push(y);
  circleX.push(-x);
  circleY.push(y);
  circleX.push(x);
  circleY.push(-y);
  circleX.push(-x);
  circleY.push(-y);
  circleX.push(y);
  circleY.push(x);
  circleX.push(y);
  circleY.push(-x);
  circleX.push(-y);
  circleY.push(x);
  circleX.push(-y);
  circleY.push(-x);
}
