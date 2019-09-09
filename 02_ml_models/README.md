# Using a Machine Learning Model

## Session 1: Introduction to ml5.js and pre-trained models

### Objectives:
* Understand the concept of a “machine learning model.”
* What is a “pre-trained model”?
* What does it mean to discuss the “architecture” of a machine learning model?
* Define and diagram an artificial neural network.
* Understand what ml5.js is and how it fits into the TensorFlow and open source machine learning library ecosystem.
* Learn how to create an image classifier with ml5.js and MobileNet.
* Understand how the MobileNet model was trained, specifically the origins and collection methodology for the training.
* [Week 2 Slides](https://docs.google.com/presentation/d/10e49FloSXEBOOcC26CKyncPDcM0qDrHYG34C_JMZdEo/edit?usp=sharing)

### ml5.js video tutorials
* [A Beginner's Guide to Machine Learning with ml5.js - video tutorial](https://youtu.be/jmznx0Q1fP0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)
* [ml5.js: Image Classification with MobileNet - video tutorial](https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)
* [ml5.js: Webcam Image Classification - video tutorial](https://youtu.be/D9BoBSkLvFo?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)

### ml5.js resources
* [ml5 website](https://ml5js.org)
* [ml5 web editor examples](https://github.com/ml5js/ml5-examples/)

### ml5 code editor examples
* [Image Classification](https://editor.p5js.org/ml5/sketches/DUxe1Z0DXG)
* Drag and Drop Image Classification -- link to come
* [Webcam Image Classification](https://editor.p5js.org/ml5/sketches/IlF1JFvWjc)
* [Webcam Image Classification Text to Speech](https://editor.p5js.org/ml5/sketches/Ry7EL4JvA3)
* [Image Classification Multiple Images](https://editor.p5js.org/ml5/sketches/f3rqIqNey5)
* [Image Classification Scavenger Hunt](https://editor.p5js.org/ml5/sketches/APzpeXOuEQ)

### Defining Machine Learning yet again
* "Machine learning is programming with examples, not instructions" -- from [Kyle McDonald - Weird Intelligence](https://vimeo.com/304110435).
* "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E." -- Tom Mitchell (1998): [Machine Learning book](http://amzn.to/2nLdRgQ).
  * Example: classifying images of dogs and cats.
    * E = Watching you classify images as dogs or cats.
    * T = Classifying images as dogs or cats.
    * P = The % of images correctly classified.

### Classification and Regression
* Classification and regression both involve making a "prediction" based on input data.
* Classification refers to predicting an output with a discrete set of possibilities like a set of categories or labels. For example: "Given an input image, is it a dog or cat?"
* Regression refers to predicting an "continuous" output (a fancy way of saying number). For example: "Given the number of bedrooms, what is the price of a house?" or "Given an input image of a cat, how much does the cat weigh?"

### Reading / Viewing:
1. Read Andrey Kurenkov's ['Brief' History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/)
2. Read [ImageNet: The Data That Transformed AI Research—and Possibly the World](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) by Dave Gershgorn (Note: Fei-Fei Li is no longer at Google; she is currently Co-Director of the Stanford Human-Centered AI Institute)

### Assignment
1. Explore [ImageNet](http://image-net.org/index). What surprises you about this data set? What questions do you have? Thinking back to last week’s assignment, can you think of any ethical considerations around how this data was collected Are there privacy considerations with the data?
2. Using the [ml5.js examples above](), try running image classification on a variety of images. Pick at least 10 objects in your room. How many of these does it recognize? What other aspects of the image affect the classification, including but not limited to position, scale, lighting, etc.
3. Document your thoughts on MobileNet and image classification in a blog post and add a link to the [Assignment 2 Wiki](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Assignment-1).

## Session 2: Transfer learning

### Objectives:
* Diagram and define the layers of a neural network, introducing the concept of a “convolutional layer.”
* Distinguish between a “feature vector” (aka logits) and the last layer (aka softmax probabilities) of a classification network.
* Understand the process of “transfer learning.”
* Learn to save a trained model for re-use later.
* [Week 2 Slides](https://docs.google.com/presentation/d/10e49FloSXEBOOcC26CKyncPDcM0qDrHYG34C_JMZdEo/edit?usp=sharing)

## Supervised Learning
* From Andrew Ng: "In supervised learning, we are given a data set and already know what our correct output should look like, having the idea that there is a relationship between the input and the output."
* Adapted from [Nature of Code Chapter 10](http://natureofcode.com/book/chapter-10-neural-networks/): Supervised Learning is a strategy that involves a "teacher" that trains the learning system. For example, consider facial recognition. The "teacher" shows the network a bunch of faces (the teacher already knows the names associated with each face). The learning system makes its guesses and the teacher provides the answers. The learning system can then compare its answers to the known “correct” ones and make adjustments according to its errors.

### ml5.js video tutorials
* [ml5.js: Transfer Learning with Feature Extractor - video tutorial](https://youtu.be/kRpZ5OqUY6Y?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)
* [ml5.js: Feature Extractor Classification - video tutorial](https://youtu.be/eeO-rWYFuG0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)
* [ml5.js: Feature Extractor Regression - video tutorial](https://youtu.be/aKgq0m1YjvQ?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)

### Related Projects:
* [Webcam Pacman](https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html) by Google’s TensorFlow.js Team
* [Pong ML](https://github.com/matamalaortiz/Pong-ML) by Alejandro Matamala Ortiz
* [Regression Curve](https://github.com/byjoohyunpark/regression-curve) by Joohyun Park
* [Asemic Writing Teachable Machine](http://blog.jzhong.today/computationaltypo/Asemic-Writing-Teachable-Machine/) by Jillian Zhong
* [Resistor classification](https://leafava2.wixsite.com/portfolio/blog-1/week-2-ml-hw) by Azalea Vaseghi and Amitabh Shrivastava

### Reading / Viewing:
1. Watch [But what *is* a Neural Network?](https://youtu.be/aircAruvnKk) by 3Blue1Brown

### Assignment:
1. Train your own image classifer using transfer learning and ml5.js and apply the model to an interactive p5.js sketch. You can train the model with Teachable Machine or with your own ml5.js code. Feel free to try sound instead of or in addition to images. You may also choose to experiment with a "regression" rather than classification.
