# Applications of Machine Learning models

## Session A: Other pre-trained models

### Objectives:
* Understanding how to use pre-trained models other than image classification.
* Ability to work with PoseNet and ml5.js
* Ability to work with  Image Segmentation models (UNet and BodyPix) and ml5.js.
* [Week 3 Slides](https://docs.google.com/presentation/d/1NAIpbSrlXf4dK1ABQa2Mazzqfk-ECc2EK4-UIon9ZZw/edit?usp=sharing)

### ml5 documentation
* [PoseNet](https://ml5js.org/reference/api-PoseNet/)
* [UNet](https://ml5js.org/reference/api-UNET/)
* [BodyPix](https://ml5js.org/reference/api-BodyPix/)

### ml5 video tutorials
* [Hour of Code PoseNet video](https://youtu.be/EA3-k9mnLHs)

### ml5 code editor examples
* [PoseNet Webcam Part Selection](https://editor.p5js.org/ml5/sketches/I-alLCVhX3S)
* [PoseNet Webcam Full Skeleton](https://editor.p5js.org/ml5/sketches/5FZeotHo76R)
* [PoseNet Single Image](https://editor.p5js.org/ml5/sketches/MmUoz2_thEa) -- This is broken at the moment
* [UNet Image Segmentation](https://editor.p5js.org/ima_ml/sketches/ii30sqpgL)
* [BodyPix Image Segmentation](https://editor.p5js.org/ima_ml/sketches/-R3ybO0uz)


### Related Projects
* [Sidewalk Orchestra](https://twitter.com/c_valenzuelab/status/979131716907536384) by Cristóbal Valenzuela
* [Pose Music](https://codepen.io/teropa/full/QxLrMp/) by Tero Parviainen
* Golan Levin’s Electronic Media Studio (Carnegie Mellon School of Art) students using ml5.js and p5.js:
    * [Nixel](http://cmuems.com/2018/60212f/nixel/10/12/nixel-body/)
    * [Chromsan](http://cmuems.com/2018/60212f/chromsan/10/12/chromsan-body/)
    * [Casher](http://cmuems.com/2018/60212f/casher/10/12/casher-body/)
    * [Shuann](http://cmuems.com/2018/60212f/shuann/10/12/shuann-body/)
    * ([all class projects in the Augmented Body Gallery](http://cmuems.com/2018/60212f/deliverables/5-due-10-12/augmented-body-gallery/) using a variety of tools)
* Tensorflow Pose Estimation Use Cases:
    * [The Treachery of Sanctuary](https://www.youtube.com/watch?v=I5__9hq-yas&feature=youtu.be) by Chris Milk
    * [Gait Analysis](https://www.runnersneed.com/expert-advice/gear-guides/gait-analysis.html) from runnersneed

## Session B: Physical interaction

### Objectives:
* Explore the possibilities of physical interaction as the output of a machine learning system.

### Code Examples
In each example, a p5.js sketch captures some input data and sends it to an Arduino. The Arduino sketch tells the microcontroller how to read that data and what to do with it. This type of communication is called [asynchronous serial communication](https://itp.nyu.edu/physcomp/lessons/serial-communication/serial-communication-the-basics/). (Fun fact: the Arduino can *also* capture data and send it to a p5.js sketch!)

* Webcam Image Classification using MobileNet to Turn LED On/Off
    * [p5.js sketch with ml5 + p5.serialport](https://editor.p5js.org/ima_ml/sketches/QyfDUvIK2)
    * [Arduino sketch](examples_arduinoSketches/Example1_MobileNet_LED_On_Off.ino)
* Pose Detection using PoseNet to Fade LED
    * [p5.js sketch with ml5 + p5.serialport](https://editor.p5js.org/ima_ml/sketches/WAJHThO1G)
    * [Arduino sketch](examples_arduinoSketches/Example2_PoseNet_Fade_LED.ino)

### Materials for Examples
* [p5.js web editor](https://editor.p5js.org)
* [Arduino IDE 1.8.9 app](https://www.arduino.cc/en/main/software)
* [p5.serialcontrol app](https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.1) to enable serial communication between your p5.js sketch in the browser and your Arduino microcontroller. Download the latest version, and save it in your Applications folder. If you use a Mac, then download and install this option: `p5.serialcontrol-darwin-x64.zip`.
* 1 USB Cable
* 1 Arduino Uno
* 1 Half-size Breadboard
* 1 LED
* 1 220 Ohm Resistor
* Jumper Wires
* [Image of an Arduino connected to an LED](images/arduino_fritzingDiagram.png)

### Troubleshooting Serial Communication
For the above examples, if nothing happens on the Arduino when you start the p5.js sketch, use this checklist to troubleshoot: [Serial Communication Checklist](serial_comm_checklist.md)

### Additional Resources
* [Asynchronous Serial Communication: The Basics](https://itp.nyu.edu/physcomp/lessons/serial-communication/serial-communication-the-basics/)
* [Lab: Serial output from P5.js](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/)
* [p5.serialport library](https://github.com/p5-serial/p5.serialport)


### Related Projects
* [PomPom Mirror](https://vimeo.com/128375543) by Danny Rozin
* [Now You Are In the Conversation](https://chelseachenchen.com/portfolio/now-you-are-in-the-conversation/) by Chelsea Chen Chen


### Assignment 3 Due Sunday September 22 at 12pm:
1. Read [Real-Time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) by Dan Oved, with editing and illustrations by Irene Alvarado and Alexis Gallo.
2. Read [Mixing movement and machine](https://medium.com/artists-and-machine-intelligence/mixing-movement-and-machine-848095ea5596) by Maya Man
4. Read [Review of Deep Learning Algorithms for Image Semantic Segmentation](https://medium.com/@arthur_ouaknine/review-of-deep-learning-algorithms-for-image-semantic-segmentation-509a600f7b57) by Arthur Ouaknine
3. Explore [COCO Dataset](http://cocodataset.org/#explore). What surprises you about this data set? How is it similar or different to ImageNet? What questions do you have? Can you think of any ethical considerations around how this data was collected? Are there privacy considerations with the data?
4. Prototype a physical interaction as the output of a machine learning model using any of the tools or techniques demonstrated in weeks 2 and 3. This can be a new idea or build off of your week 2 assignment. Here are some questions to explore:
    * For image classification, how might you use confidence score data as a type of creative input?
    * For pose detection, how might you work with multiple keypoints?
    * What other creative outputs can you use? speakers? motors? what else?
5. Document your exercise in a blog post and add a link to the post and your sketch on the [Assignment 3 Wiki](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Assignment-3). In your blog post, include visual documentation such as a recorded screen capture / video of your training session and sketch running in the browser. How the readings above inform your idea and development of the project? Include a response to COCO dataset question prompts.
