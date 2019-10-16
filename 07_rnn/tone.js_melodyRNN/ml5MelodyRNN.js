// Based on
// https://hello-magenta.glitch.me/

class ml5MelodyRNN {

  constructor(callback) {
    this.musicRNN = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
    this.initialize().then(callback);
  }

  async initialize() {
    await this.musicRNN.initialize();
  }

  async generate(melody, rnn_steps, rnn_temperature, callback) {
    let qns = melody;
    if (qns.notes.length > 0 && qns.notes[0].quantizedStartStep == undefined) {
      qns = mm.sequences.quantizeNoteSequence(melody, 4);
    }
    let sample = await this.musicRNN.continueSequence(qns, rnn_steps, rnn_temperature);
    callback(sample);
  }

}