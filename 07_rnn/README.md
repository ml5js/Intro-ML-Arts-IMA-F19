# Recurrent Neural Network (RNN)

* [Week 7 RNN Slides](https://docs.google.com/presentation/d/1HcGPiK7ECr_yqdHtgDKeGKqrQAGnQp-Ve0-e4m9_E08/edit?usp=sharing)

## Session A:  SketchRNN (RNN with Pre-Trained Models 1)

### Objectives:
* Learn about Sequential Data and Markov Chains
* Learn about Recurrent Neural Network architectures
* Become familiar with use cases for RNNs
* Learn ml5’s RNN functions and underlying pre-trained models

### Markov Chains
* [Markov Chains](http://setosa.io/blog/2014/07/26/markov-chains/) by Victor Powell and Lewis Lehe
* [ITP Course Generator by Allison Parrish](http://static.decontextualize.com/toys/next_semester)
* [N-Grams and Markov Chains by Allison Parrish](http://www.decontextualize.com/teaching/rwet/n-grams-and-markov-chains/)
* [Markov Chains from A2Z](https://shiffman.net/a2z/markov/)
* [Markov Chain video tutorial Part 1](https://youtu.be/eGFJ8vugIWA), [Markov Chain video tutorial Part 2](https://www.youtube.com/watch?v=9r8CmofnbAQ)
* [Markov Chain p5.js example](https://editor.p5js.org/codingtrain/sketches/AAgqWiJAW)

### RNNs
* [The Unreasonable Effectiveness of RNNs](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) and [Visualizing and Understanding Recurrent Networks](https://skillsmatter.com/skillscasts/6611-visualizing-and-understanding-recurrent-networks) by by Andrei Karpathy
* [Rohan & Lenny #3: Recurrent Neural Networks & LSTMs](https://ayearofai.com/rohan-lenny-3-recurrent-neural-networks-10300100899b)

### Related Projects:
* [Double Agent](http://littlepig.org.uk/installations/doubleagent/index.htm) by Simon Biggs (Drawing)
* [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/) (Drawing)
* [10 things artificial intelligence did in 2018](http://aiweirdness.com/post/181621835642/10-things-artificial-intelligence-did-in-2018) by Janelle Shane (Text)
* [Writing with the Machine](https://www.robinsloan.com/notes/writing-with-the-machine/)
* [Magenta: Make Music and Art Using Machine Learning](https://magenta.tensorflow.org/)
* [Handwriting Generation with RNN and p5.js](http://blog.otoro.net/2017/01/01/recurrent-neural-network-artist/)
* [RNN for generating Baroque Music video](https://www.youtube.com/watch?v=SacogDL_4JU)
* [Let's Read a Story](https://medium.com/ml5js/lets-read-a-story-talking-to-books-using-semantic-similarity-f283168b4264) by Itay Niv

### RDP (Ramer-Douglas-Peucker) Algorithm
* [p5.js RDP Example](https://editor.p5js.org/codingtrain/sketches/SQjSugKn6)

### SketchRNN Examples
* [Generating Drawings with SketchRNN](https://editor.p5js.org/ml5/sketches/-debGKe49YB)
* [Interactive Drawings with SketchRNN](https://editor.p5js.org/ml5/sketches/WihpJzqhkBJ)

## Session B: Magenta.js (RNN with Pre-Trained Models 2)

### Objectives
* Learn distinction between LSTM and RNN.
* Become familiar with Magenta.js and RNN models for generating music.
* Understand concept of “temperature” as it relates to RNNs.

### Neural Networks and Music
* [Neural Nets for Generating Music](https://medium.com/artists-and-machine-intelligence/neural-nets-for-generating-music-f46dffac21c0) by Kyle McDonald
* [MusicRNN Demos](https://tensorflow.github.io/magenta-js/music/demos/music_rnn.html)

### Resources
* [Parse a MIDI file into a Tone.js-friendly JSON format](https://github.com/Tonejs/Midi)
* [Note names, MIDI numbers and frequencies](https://newt.phys.unsw.edu.au/jw/notes.html)
* [Tone.js Documentation](https://tonejs.github.io/)
* [Hello Magenta Tutorial](https://hello-magenta.glitch.me/)
* [Background on MelodyRNN](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn)
* [Luisa Pereira's Code of Music course](https://luisaph.github.io/the-code-of-music-grad-fall-2019/)
* [Lakh MIDI Dataset](https://colinraffel.com/projects/lmd/)

### Related Projects
* [AI Duet](https://experiments.withgoogle.com/ai/ai-duet/view/) using [MelodyRNN](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn) by Yotam Mann
* [Connecting with Music Through Magenta.js](https://magenta.tensorflow.org/blog/2018/05/03/connecting-with-magenta-js/) by Tero Parviainen
* [magenta.js projects](https://magenta.tensorflow.org/demos/web/)
* [RUNN](http://vibertthio.com/runn/) by Vibert Thio

### MusicRNN Examples
* [Melody with Tone.js](https://editor.p5js.org/ima_ml/sketches/B7L-nHpE8)
* [Generate Melody with MusicRNN](https://editor.p5js.org/ima_ml/sketches/rSZyVD1tr)
* [Generate Melody with MusicRNN and Tone.js playback](https://editor.p5js.org/ima_ml/sketches/EgKBAeibJ)

### LSTM
* [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) by Christopher Olah

### Assignment 6 Due Sunday October 20 at 6pm

#### Reading
* [Markov Chains](http://setosa.io/blog/2014/07/26/markov-chains/) by Victor Powell and Lewis Lehe
* [Neural Nets for Generating Music](https://medium.com/artists-and-machine-intelligence/neural-nets-for-generating-music-f46dffac21c0) by Kyle McDonald
* [Teaching Machines to Draw](http://blog.otoro.net/2017/05/19/teaching-machines-to-draw/) by David Ha
* [Connecting with Music Through Magenta.js](https://magenta.tensorflow.org/blog/2018/05/03/connecting-with-magenta-js/) by Tero Parviainen

#### Instructions

Use `ml5.sketchRNN()` and/or magenta.js to generate visuals and/or sound in an interactive p5.js sketch. You can invent your own creative idea or here are some suggested exercises:

* As suggested by @hardmaru, implement the [RDP Line Simplification](https://editor.p5js.org/codingtrain/sketches/SQjSugKn6) algorithm in the [Interactive Drawings with SketchRNN](https://editor.p5js.org/ml5/sketches/uk4JsSRQgIY) example. Does the program perform "better" or "worse" (what does that even mean)? What is the optimal epsilon value? (A video tutorial about RDP algorithm will be shared via the mailing list.)
* Consider the interaction design of [Interactive Drawings with SketchRNN](https://editor.p5js.org/ml5/sketches/uk4JsSRQgIY) example? How can you improve upon the user experience? Can you craft a story around the interaction or make it into a game?
* Visualize the melody generated with MelodyRNN. magenta.js has built in functions for doing this that you can experiment with or try drawing your own visualization with p5.js.
* Create your own version of an "AI Duet", can you build a user interaction around playing a melody that the ML model continues?

Document your coding exercise and how the readings informed your work in a blog post and [link from the homework wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Assignment-7).


