const len = 784;

let catsData;
let trainsData;
let rainbowsData;

let classifier;

let allData = [];

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
  createCanvas(280, 280);
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
    console.log(allData[i].target);
    classifier.addData(allData[i].inputs, [allData[i].target]);
  }
  // classifier.normalizeData();
  classifier.train({ epochs: 50 }, finishedTraining);

  // let trainButton = select('#trainButton');

  // let guessButton = select('#guess');
  // guessButton.mousePressed(function () {
  //   let inputs = [];
  //   let img = get();
  //   img.resize(28, 28);
  //   img.loadPixels();
  //   for (let i = 0; i < len; i++) {
  //     let bright = img.pixels[i * 4];
  //     inputs[i] = (255 - bright) / 255.0;
  //   }

  //   let guess = nn.predict(inputs);
  //   // console.log(guess);
  //   let m = max(guess);
  //   let classification = guess.indexOf(m);
  //   if (classification === CAT) {
  //     console.log("cat");
  //   } else if (classification === RAINBOW) {
  //     console.log("rainbow");
  //   } else if (classification === TRAIN) {
  //     console.log("train");
  //   }

  //   //image(img, 0, 0);
  // });

  let clearButton = select('#clearButton');
  clearButton.mousePressed(function () {
    background(255);
  });
  // for (let i = 1; i < 6; i++) {
  //   trainEpoch(training);
  //   console.log("Epoch: " + i);
  //   let percent = testAll(testing);
  //   console.log("% Correct: " + percent);
  // }
}


function draw() {
  strokeWeight(8);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function finishedTraining() {
  console.log('done');
}