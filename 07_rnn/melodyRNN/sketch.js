// Based on
// https://hello-magenta.glitch.me/

const TWINKLE_TWINKLE = {
  notes: [
    { pitch: 60, startTime: 0.0, endTime: 0.5 },
    { pitch: 60, startTime: 0.5, endTime: 1.0 },
    { pitch: 67, startTime: 1.0, endTime: 1.5 },
    { pitch: 67, startTime: 1.5, endTime: 2.0 },
    { pitch: 69, startTime: 2.0, endTime: 2.5 },
    { pitch: 69, startTime: 2.5, endTime: 3.0 },
    { pitch: 67, startTime: 3.0, endTime: 4.0 },
    { pitch: 65, startTime: 4.0, endTime: 4.5 },
    { pitch: 65, startTime: 4.5, endTime: 5.0 },
    { pitch: 64, startTime: 5.0, endTime: 5.5 },
    { pitch: 64, startTime: 5.5, endTime: 6.0 },
    { pitch: 62, startTime: 6.0, endTime: 6.5 },
    { pitch: 62, startTime: 6.5, endTime: 7.0 },
    { pitch: 60, startTime: 7.0, endTime: 8.0 },
  ],
  totalTime: 8
};

let melodyRNN;

function setup() {
  noCanvas();
  musicPlayer = new mm.Player();
  melodyRNN = new ml5MelodyRNN(modelReady);
  select('#twinkle').mousePressed(playSong);
  select('#generate').mousePressed(generateMelody);
}

function playSong() {
  musicPlayer.start(TWINKLE_TWINKLE);
}

function generateMelody() {
  let notes = parseInt(select('#notes').value());
  let temperature = 1.5;
  melodyRNN.generate(TWINKLE_TWINKLE, notes, temperature, gotMelody);
}

function gotMelody(sample) {
  musicPlayer.start(sample);
}

function modelReady() {
  console.log('music rnn ready');
}
