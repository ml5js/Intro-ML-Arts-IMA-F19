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

### Demo: Code a machine learning image classifier using ml5.js and MobileNet.

### Assignment:
1. Watch [But what *is* a Neural Network?](https://youtu.be/aircAruvnKk) by 3Blue1Brown
2. Read [ImageNet: The Data That Transformed AI Research—and Possibly the World](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) by Dave Gershgorn (Note: Fei-Fei Li is no longer at Google; she is currently Co-Director of the Stanford Human-Centered AI Institute)
3. Explore [ImageNet](http://image-net.org/index)
4. TBA (exercise related to running ml5 image webcam example and/or teachable machine training -- no code writing just yet.)

## Session 2: Transfer learning

### Objectives:
* Diagram and define the layers of a neural network, introducing the concept of a “convolutional layer.”
* Distinguish between a “feature vector” (aka logits) and the last layer (aka softmax probabilities) of a classification network.
* Understand the process of “transfer learning.”
* Learn to save a trained model for re-use later.

### Demo: Code your own “teachable machine” with ml5.js.

### Related Projects:
* [Webcam Pacman](https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html) by Google’s TensorFlow.js Team
* [Pong ML](https://github.com/matamalaortiz/Pong-ML) by Alejandro Matamala Ortiz
* [Regression Curve](https://github.com/byjoohyunpark/regression-curve) by Joohyun Park
* [Asemic Writing Teachable Machine](http://blog.jzhong.today/computationaltypo/Asemic-Writing-Teachable-Machine/) by Jillian Zhong
* [Resistor classification](https://leafava2.wixsite.com/portfolio/blog-1/week-2-ml-hw) by Azalea Vaseghi and Amitabh Shrivastava

### Assignment:
1. Train your own image classifer using transfer learning and ml5.js and apply the model to an interactive p5.js sketch. You can train the model with Teachable Machine or with your own ml5.js code. Feel free to try sound instead of or in addition to images. You may also choose to experiment with a "regression" rather than classification.
