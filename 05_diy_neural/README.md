# DIY Neural Network

## Session A: Real-Time Data

### Objectives:
* Evaluate and critique models trained in week 4 assignment.
* Compare training and inference for real-time interaction with more traditional machine learning pipelines.

### Pose Tracking
* [PoseNet all points](https://editor.p5js.org/ima_ml/sketches/ZZtfEKugW)

### Face Tracking
* [FaceAPI all points](https://editor.p5js.org/ima_ml/sketches/fCsz7tb6w)

### p5.js Oscillators
* [p5.js Oscillator example](https://editor.p5js.org/ima_ml/sketches/fSGClc_aK)
* [Sound Synthesis video tutorial](https://youtu.be/Bk8rLzzSink)

### Related projects that map gesture to sound
* [MARtLET](https://vimeo.com/19980514) by Michelle Nagai
* [From the Waters](https://www.youtube.com/watch?v=k6dwnr5RDow) by Anne Hege
* [This Is Not A Theremin](https://sofiaitp.wordpress.com/2018/12/04/this-is-not-a-theremin/) by Guillermo Montecinos and Sofía Suazo
* [Eye Conductor](https://andreasrefsgaard.dk/project/eye-conductor/) by Andreas Refsgaard

## Session B: Training the Model

### Objectives:
* Revisit and examine the concepts of classification and regression as applied to real-time interaction.

### Examples
* [Train regression model with Mouse](https://editor.p5js.org/ima_ml/sketches/eW8o-mYJf)
* [Train classification model with Mouse](https://editor.p5js.org/ima_ml/sketches/2tpjAh8e1)
* [Train regression model model with Pixels](https://editor.p5js.org/ima_ml/sketches/EMDiQlIhV)
* [Train regression model model with Face Keypoints](https://editor.p5js.org/ima_ml/sketches/US3ZX6zCD)
* [Train classification model model with PoseNet](https://editor.p5js.org/ima_ml/sketches/Gdt8ClYbsD)

### Assignment 5 Due Sunday October 6 at 6pm
1. Watch [Machine Learning for Human Creative Practice](https://vimeo.com/287094397), Dr. Rebecca Fiebrink at Eyeo 2018. Write a response to the following question posed by Dr. Fiebrink:
    * How can machine learning support people's existing creative practices? Expand people's creative capabilities?
2. Dream up and design the inputs and outputs of a real-time machine learning system for interaction and audio/visual performance. This could be an idea well beyond the scope of what you can do in a weekly exercise.
3. Create your own p5+ml5 sketch that trains a model with real-time interactive data. This can be a prototype of the aforementioned idea or a simple exercise that builds on this week's code examples. Here are some exercise suggestions:
    * Try to invent more elegant and intuitive interaction for collecting real-time data beyond clicking buttons?
    * Train a model using several PoseNet keypoints or even the full PoseNet skeleton. You can build off of [the example we started in class](https://editor.p5js.org/ima_ml/sketches/ED-8eBe3F).
    * Can you design a system with multiple outputs? For example, what if you train a model to output a red, green, and blue value?
    * What other real-time inputs might you consider beyond mouse position, image pixels, or face/pose tracking? Could you use real-time sensor data?
    * What other real-time outputs might you consider beyond color or sound modulation? Could the output be a physical computing device?
4. Complete a blog post with your response, real-time ML system, and documentation of your code exercise and [link from the homework wiki](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Assignment-5).
