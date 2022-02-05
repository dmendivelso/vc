let pg;
let truchetShader;
let texShader;

function preload() {
  // took verbatim from here: https://thebookofshaders.com/09/
  truchetShader = readShader('/vc/sketches/shaders/truchet.frag');
  // exact same shader used in the texturing chapter
  texShader = readShader('/vc/sketches/shaders/texture.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(texShader);
  // create frame buffer object to render the procedural texture
  pg = createGraphics(400, 400, WEBGL);
  // use truchetShader to render onto pg
  pg.shader(truchetShader);
  // emitResolution, see:
  //https://github.com/VisualComputing/p5.shaderbox#emitresolution
  emitResolution(truchetShader, { graphics: pg });
  cover({ graphics: pg });
  // set pg as the the main texture
  texShader.setUniform('texture', pg);
}

function draw() {
  background(33);
  orbitControl();
  displayCan(100, 200, 32);
}

function displayCan(r, h, detail) {
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= detail; i++) {
    let angle = TWO_PI / detail;
    let x = sin(i * angle);
    let z = cos(i * angle);
    let u = float(i) / detail;
    // note the uv texture coordinates
    vertex(x * r, -h / 2, z * r, u, 0);
    vertex(x * r, +h / 2, z * r, u, 1);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
