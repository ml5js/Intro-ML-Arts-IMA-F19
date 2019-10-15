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

function setup() {
  noCanvas();
  select('#twinkle').mousePressed(playSong);

  // Adapt note array to a format Tone.Part understands (objects must include a 'time' property)
  for (note of TWINKLE_TWINKLE.notes) {
    note.time = note.startTime;
  }
  part = new Tone.Part(playNote, TWINKLE_TWINKLE.notes);
}

function playNote(time, value) {
  let duration = value.endTime - value.startTime;
  synth.triggerAttackRelease(Tone.Frequency(value.pitch, "midi"), duration);
}

function playSong() {
  Tone.Transport.stop();
  if (!synth) {
    synth = new Tone.Synth().toMaster();
  }
  part.start(0);
  Tone.Transport.start();
}