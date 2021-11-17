let img;
function setup() {
  createCanvas(400, 400);
  img = loadImage("/vc/sketches/Zollner.jpg");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}