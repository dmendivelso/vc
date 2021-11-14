new p5((p) => {
  let img; // Declare variable 'img'.
  let lines = [];

  p.setup = function () {
    p.createCanvas(800, 350);
    img = p.loadImage("/vc/sketches/pacman.png"); // Load the image
    p.strokeWeight(14); // medium weight lines

    var step = 15;
    let i = 0;
    //vertical lines
    for (var x = step; x < p.width; x = x + step) {
      lines[i] = new Line(p.mouseX + x, 0, p.mouseX + x, p.height);
      i++;
    }

    p.button = p.createButton("animation");
    p.button.position(img.x + img.width, 65);
    p.button.mousePressed(p.greet);
  };

  p.draw = function () {
    // Displays the image at its actual size at point (0,0)
    p.image(img, 0, 0, img.width + img.width / 4, img.height + img.height / 4);

    for (var i = 0; i < lines.length; i++) {
      lines[i].display();
    }
  };

  p.greet = function () {
    p.erase();
    var step = 15;
    for (var x = step; x < p.width; x = x + step) {
      p.line(1 + x, 0, 1 + x, p.height);
    }
  };

  // Jitter class
  class Line {
    constructor(x1, y1, x2, y2) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }

    move(movex) {
      this.x += movex;
    }

    display() {
      p.line(this.x1, this.y1, this.x2, this.y2);
    }
  }
}, "kinegram");
