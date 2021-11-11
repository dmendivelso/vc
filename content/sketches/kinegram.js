new p5((p) => {
  let img; // Declare variable 'img'.

  p.setup = function () {
    p.createCanvas(800, 350);
    img = p.loadImage("/vc/sketches/pacman.png"); // Load the image
    p.strokeWeight(14); // medium weight lines
  };

  p.draw = function () {
    // Displays the image at its actual size at point (0,0)
    p.image(img, 0, 0, img.width + img.width / 4, img.height + img.height / 4);

    var step = 15;
    //vertical lines
    for (var x = step; x < p.width; x = x + step) {
      p.line(p.mouseX + x, 0, p.mouseX + x, p.height);
    }
  };
}, "kinegram");
