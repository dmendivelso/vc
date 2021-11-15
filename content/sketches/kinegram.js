new p5((p) => {
  let img; // Declare variable 'img'.
  //arreglo de lineas
  let lines = [];
  //posicion inicial desde donde empiezan a dibujarse las lineas
  let posX = 500;
  //cantidad de movimiento
  let move = 0.5;

  p.setup = function () {
    p.createCanvas(800, 350);
    img = p.loadImage("/vc/sketches/pacman.png"); // Load the image
    p.strokeWeight(14); // medium weight lines

    var step = 15;
    let i = 0;
    //vertical lines
    for (var x = step; x < p.width; x = x + step) {
      lines[i] = new Line(x, 0, x, p.height);
      i++;
    }
  };

  p.draw = function () {
    p.image(img, 0, 0, img.width + img.width / 4, img.height + img.height / 4);

    for (var i = 0; i < lines.length; i++) {
      if (i == 0 && lines[i].x1 == -480) {
        move = 0.5;
      } else if (i == 0 && lines[i].x1 == 15) {
        move = -0.5;
      }
      lines[i].display(posX, 0, posX, 0);
      lines[i].move(move);
    }
  };

  // Line class
  class Line {
    constructor(x1, y1, x2, y2) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }

    move(movex) {
      this.x1 += movex;
      this.x2 += movex;
    }

    display(x1, y1, x2, y2) {
      p.line(x1 + this.x1, y1 + this.y1, x2 + this.x2, y2 + this.y2);
    }
  }
}, "kinegram");
