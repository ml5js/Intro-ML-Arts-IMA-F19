const len = 784;

let catsData;
let trainsData;
let rainbowsData;

let classifier;

let allData = [];

let resultsP;

function preload() {
  catsData = loadBytes('data/cats1000.bin');
  trainsData = loadBytes('data/trains1000.bin');
  rainbowsData = loadBytes('data/rainbows1000.bin');
}

function prepareData(data, label) {
  for (let i = 0; i < 1000; i++) {
    let record = {};
    let offset = i * len;
    let rawInputs = data.bytes.subarray(offset, offset + len);
    record.inputs = [];
    for (let j = 0; j < rawInputs.length; j++) {
      record.inputs[j] = rawInputs[j] / 255;
    }
    record.target = label;
    allData.push(record);
  }
}

function setup() {
  createCanvas(140, 140);
  background(255);

  // Preparing the data
  prepareData(catsData, 'cat');
  prepareData(rainbowsData, 'rainbow');
  prepareData(trainsData, 'train');

  // Making the neural network
  let options = {
    inputs: 784,
    outputs: 3,
    task: 'classification',
    debug: true
  }
  classifier = new ml5.neuralNetwork(options);
  for (let i = 0; i < allData.length; i++) {
    classifier.addData(allData[i].inputs, [allData[i].target]);
  }
  // classifier.normalizeData();
  classifier.train({ epochs: 50 }, finishedTraining);

  resultsP = createP('');

  let guessButton = createButton('classify');
  guessButton.mousePressed(classify);

  let clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
}

function draw() {
  strokeWeight(8);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function classify() {
  let inputs = [];
  let img = get();
  img.resize(28, 28);
  img.loadPixels();
  for (let i = 0; i < len; i++) {
    let bright = img.pixels[i * 4];
    inputs[i] = (255 - bright) / 255.0;
  }
  classifier.classify(inputs, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  resultsP.html(`${results[0].label} (${floor(100 * results[0].confidence)}%)`);
}

function finishedTraining() {
  console.log('done');
}

function clearCanvas() {
  background(255);
}