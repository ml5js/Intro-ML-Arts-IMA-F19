
let mnist;
let imageIndex = 0;

function preload() {
  mnist = loadBytes('data/t10k-images-idx3-ubyte');
}

function setup() {
  createCanvas(280, 280);
  frameRate(5);
}

function draw() {
  for (let x = 0; x < 28; x++) {
    for (let y = 0; y < 28; y++) {
      let i = (x + y * 28) + imageIndex * 784 + 16;
      let value = mnist.bytes[i];
      fill(value);
      noStroke();
      rect(x * 10, y * 10, 10, 10);
    }
  }
  imageIndex++;
}

