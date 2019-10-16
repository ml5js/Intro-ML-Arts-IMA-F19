// Based on Code of Music Fall 2019 by Luisa Peirera
// https://luisaph.github.io/the-code-of-music-grad-fall-2019/#MelodyCode

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
    { pitch: 60, startTime: 7.0, endTime: 8.0 }
  ],
  totalTime: 8
};

let synth, part;
let melodyRNN;
// Assume 120bpm -> * 0.5s; 4 steps per quantized quarter note -> * 0.25
let mult = 0.5 * 0.25;


function setup() {
  noCanvas();
  melodyRNN = new ml5MelodyRNN(modelReady);
  select('#twinkle').mousePressed(generateMelody);
}

function playSong() {
  Tone.Transport.stop();
  if (!synth) {
    synth = new Tone.Synth().toMaster();
  }
  part.start(0);
  Tone.Transport.start();
}

function generateMelody() {
  let temperature = 1.5;
  let steps = 20;
  melodyRNN.generate(TWINKLE_TWINKLE, steps, temperature, gotMelody);
}

function playNote(time, value) {
  // let duration = value.endTime - value.startTime;
  let duration = (value.quantizedEndStep - value.quantizedStartStep) * mult;
  synth.triggerAttackRelease(Tone.Frequency(value.pitch, "midi"), duration);
}

function gotMelody(sample) {
  console.log(sample);
  // Adapt note array to a Tone.Part format (objects must include a 'time' property)
  for (let note of sample.notes) {
    note.time = note.quantizedStartStep * mult;
  }
  part = new Tone.Part(playNote, sample.notes);
  playSong();
}

function modelReady() {
  console.log('music rnn ready');
}
