
let mnist_images;
let mnist_labels;
let imageIndex = 0;
let labelDiv;

function preload() {
  mnist_images = loadBytes('data/t10k-images-idx3-ubyte');
  mnist_labels = loadBytes('data/t10k-labels-idx1-ubyte');
}

function setup() {
  createCanvas(280, 280);
  labelDiv = createDiv('').style('font-size', '64pt');
  frameRate(3);
}

function draw() {
  for (let x = 0; x < 28; x++) {
    for (let y = 0; y < 28; y++) {
      let pixel = (x + y * 28) + imageIndex * 784 + 16;
      let value = mnist_images.bytes[pixel];
      fill(value);
      noStroke();
      rect(x * 10, y * 10, 10, 10);
    }
  }
  let label = mnist_labels.bytes[imageIndex + 8];
  labelDiv.html(label);
  imageIndex++;
}

