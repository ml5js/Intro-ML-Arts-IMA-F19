# Convolutional Neural Network (CNN)

* [Week 6 CNN Slides](https://docs.google.com/presentation/d/1aN0uLSKF1nR4gmBbDhYI1J9VI6nm-rNUmuhgeGiGaEI/edit?usp=sharing)

## Session A: What is CNN?

### Objectives:
* Understand when and why you might train your own model from scratch versus use a pre-trained model or transfer learning.
* Learn about the Google “Quick, Draw!” dataset.
* Understand how to work with image data for training your own model.

### Quick, Draw! Data
* [Data and Documentation](https://github.com/googlecreativelab/quickdraw-dataset)
* [Video tutorial: Replaying Drawings with node server](https://thecodingtrain.com/CodingChallenges/122.1-quick-draw)
* [Video tutorial: Replaying Drawings with Google Web API](https://thecodingtrain.com/CodingChallenges/122.2-quick-draw)
* [Preparing Data as Images for Doodle Classifer Part 1](https://youtu.be/gX7U6WA7Ffk)
* [Preparing Data as Images for Doodle Classifer Part 2](https://youtu.be/wMe6qcpD8jI)

### Examples
* [Displaying MNIST](mnist_viewer) (no web editor version)
* [Displaying Quick, Draw! 28x28 images](https://editor.p5js.org/ima_ml/sketches/wOO4nvwyw)
* [Animating Quick, Draw! paths](https://editor.p5js.org/ima_ml/sketches/aT9zxHX7n)

### Creative Quick, Draw! projects
* [Exploring and Visualizing an Open Global Dataset](https://research.googleblog.com/2017/08/exploring-and-visualizing-open-global.html) by Google Research
* [Letter collages](http://frauzufall.de/en/2017/google-quick-draw/) by [Deborah Schmidt](http://frauzufall.de/)
* [Face tracking experiment](https://www.instagram.com/p/BUU8TuQD6_v/) by [Neil Mendoza](http://www.neilmendoza.com/)
* [Faces of Humanity](http://project.laboiteatortue.com/facesofhumanity/) by [Tortue](www.laboiteatortue.com)
* [Scribbling Speech](http://xinyue.de/scribbling-speech.html) by [Xinyue Yang](http://xinyue.de/)
* [How do you draw a circle?](https://qz.com/994486/the-way-you-draw-circles-says-a-lot-about-you/) by [Quartz](https://qz.com/)
* [Machine Learning for Visualization](https://medium.com/@enjalot/machine-learning-for-visualization-927a9dff1cab) - Talk / article by Ian Johnson

### Related Projects:
* [MegaPixels: Faces](https://ahprojects.com/megapixels-glassroom/) curated by Tactical Tech, design and development by Adam Harvey
* [Watch What Neural Networks See](https://experiments.withgoogle.com/what-neural-nets-see) by Gene Kogan
* [Interactive Node-Link Visualizations of Convolutional Neural Networks](http://scs.ryerson.ca/~aharley/vis/)
* [Recognizing Human Facial Expressions With Machine Learning](https://thoughtworksarts.io/blog/recognizing-facial-expressions-machine-learning/) by Angelica Perez

## Session B: Doodle Classification

### Objectives
* Learn to train an image classifier (no convolutional layers) with ml5.js.
* Learn the distinction between different types of layers of a neural network, specifically “What is a convolutional layer?”
* Learn to feed the input of a graphics canvas into a machine learning model.

### Convolutional Neural Nets
* [Original 1998 "LetNet5" paper: "Gradient-Based Learning Applied to Document Recognition"](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf) by Y. Lecun, L. Bottou, Y. Bengio, P. Haffner
* [How computers got shockingly good at recognizing images](https://arstechnica.com/science/2018/12/how-computers-got-shockingly-good-at-recognizing-images/) by Timothy B. Lee
* [Image Kernels Explained Visually](http://setosa.io/ev/image-kernels/) by Victor Powell
* [An Intuitive Explanation of Convolutional Neural Networks](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) by Ujjwal Karn
* [A visual and intuitive understanding of deep learning, CNNs](https://www.youtube.com/watch?v=Oqm9vsf_hvU) (0:00 - 9:40) by Octavio Good

### Examples
* [Convolution p5.js demo](https://editor.p5js.org/ima_ml/sketches/mSlffqOZX)
* [Training a model with `ml5.neuralNetwork()` and Google Quick, Draw! images](https://editor.p5js.org/ima_ml/sketches/bL6jONrFQ)
* [Classifying Drawings with ml5's DoodleNet](https://editor.p5js.org/ima_ml/sketches/IbXlN6voN) (model trained by @yining1023)

### Assignment 6 Due Monday October 14 at 12pm

#### Reading
* [@ellennickles summary](https://github.com/ml5js/Intro-ML-Arts-IMA/issues/59#issuecomment-539356461) of [Datasheets for Datasets](https://arxiv.org/abs/1803.09010#) paper.
* [A Duke study recorded thousands of students’ faces](https://www.dukechronicle.com/article/2019/06/duke-university-facial-recognition-data-set-study-surveillance-video-students-china-uyghur) by Jake Satisky
* [Atlanta Asks Google Whether It Targeted Black Homeless People](https://www.nytimes.com/2019/10/04/technology/google-facial-recognition-atlanta-homeless.html) by Jack Nicas, NY Times
* [An Intuitive Explanation of Convolutional Neural Networks](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) by Ujjwal Karn
* [AI ‘Emotion Recognition’ can’t be Trusted](https://theverge.com/2019/7/25/8929793/emotion-recognition-analysis-ai-machine-learning-facial-expression-review) by James Vincent

### Reflection
* Spend a few minutes playing [Quick, Draw!](https://quickdraw.withgoogle.com/) and reviewing the documentation of the [Quick, Draw! dataset](https://github.com/googlecreativelab/quickdraw-dataset). Put yourself in the shoes of the researchers at Google collecting the data and answer the following questions from the [Datasheets for Datasets](https://arxiv.org/abs/1803.09010#) to the best of your ability. If you prefer, find another dataset to analyze (the datasets described in the above readings are good choices as well.)
    * Does the dataset contain data that might be considered confidential?
    * Does the dataset contain data that, if viewed directly, might be offensive, insulting, threatening, or might otherwise cause anxiety?
    * Does the dataset identify any subpopulations of people (e.g., by age, gender)?
    * Were individuals (e.g. players of Quick, Draw!) notified about the data collection?
    * Did these individuals in question consent to the collection and use of their data?
    * If consent was obtained, were the consenting individuals provided with a mechanism to revoke their consent in the future or for certain uses?
    * Are there tasks for which the dataset should not be used?

### Coding Exercise
For this week's coding exercise you can build on top of your neural network assignment from last week. Make sure to bring in the [latest ml5 build](https://github.com/ml5js/Intro-ML-Arts-IMA/blob/source/ml5_build/README.md) to your code. Here are some ideas (note I am not suggesting you do all of them, this is just a list to consider, invent your own!)

* If your sketch was not working, try fixing bugs with the new ml5.js version.
* If "classification" is more appropriate for your sketch, switch your `task` to `'classification'`.
* Consider adding functionality to save training data or save the model (reloading it later). A [working example of saving/loading](https://editor.p5js.org/ima_ml/sketches/Etmls1Eq-) is now available in the week 5 material.

Instead of building on your previous assignment, you can also choose to create a new sketch inspired by the examples around classifying drawings and convolutional neural networks. For example:

* Can you train your own image classifier with `ml5.neuralNetwork()`? You can build upon the [doodle classification example](https://editor.p5js.org/ima_ml/sketches/bL6jONrFQ). This example assumes the image data is loaded via binary files. How might you work with actual image files?
* Can you invent a user interaction around classifying drawings building on the [ml5 DoodleNet classification example](https://editor.p5js.org/ima_ml/sketches/IbXlN6voN).
