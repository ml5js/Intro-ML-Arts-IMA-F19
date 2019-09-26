# DIY Neural Network

## Session A: Data Collection

### Objectives:
* Understand the full story of building a ML model for classification or regression.
* Understand how data is formatted and downloaded including CSV and JSON.
* Consider how to frame the problem and collect data.
    * Understand critical questions to ask (e.g. Who is this for? What’s the context?)
    * Understand the questions to ask about sourcing and collecting data.
    * Learn how to prepare a data set, including how to normalize and properly format it.
* Diagram the components of a two layer "vanilla" neural network.

### Tutorials
* [Data Wrangling Tutorial](https://github.com/ml5js/Intro-ML-Arts-IMA/blob/source/04_diy_neural/data-tutorial.md) by Lydia Jessup.
* Tabular Data (CSV)
   * [Tabular Data](https://youtu.be/RfMkdvN-23o) from Coding Train "Data + APIs" tutorial (lots of extra stuff here the first few minutes is probably most relevant?)
   * [Tabular Data](https://youtu.be/woaR-CJEwqc) Coding Train Processing tutorial (code is not JS!)
* JSON Data
   * [What is JSON Part 1](https://youtu.be/_NFkzw6oFtQ) - Coding Train p5.js tutorial
   * [What is JSON Part 2](https://youtu.be/118sDpLOClw) - Coding Train p5.js tutorial
   * [JSON Data](https://youtu.be/uxf0--uiX0I) from Coding Train "Data + APIs" tutorial (same as above, lots of extra unrelated stuff here).

### Related Projects
* [Feminist Data Set](https://carolinesinders.com/feminist-data-set/) by Caroline Sinders
* [Gender Shades: How well do IBM, Microsoft, and Face++ AI services guess the gender of a face?](http://gendershades.org/) by Joy Buolamwini and Timnit Gebru

### Reading and Viewing
* [This is how AI bias really happens—and why it’s so hard to fix](https://www.technologyreview.com/s/612876/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/) by Karen Hao
* Video: [Analyzing & Preventing Unconscious Bias in Machine Learning](https://www.infoq.com/presentations/unconscious-bias-machine-learning) by Rachel Thomas
* Video: [Data visualization for machine learning](https://vimeo.com/304131671)

### Assignment 4A due Wednesday, Sept 24, 9am
1. Find a dataset that interests you. Some ideas:
    * Something you find online. For example, take a look at [Kaggle](https://www.kaggle.com/) and you can find a list of datasets we've compiled on the [dataset wiki](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Datasets).
    * Find a dataset that you collect yourself or is already being collected about you. For example, personal data like steps taken per day, browser history, minutes spent on your mobile device, sensor readings, and more.
    * A dataset that you collect by crowdsourcing data. One way to approach this is to create a google form with questions and ask friends and fellow students to complete the form.
2. After you have found or collected your dataset, write a blog post that addresses these questions:
    * What is (are!) the data?
    * What format is the data in? (CSV, JSON, PDF, or . . )
    * What are the dimensions of the data (rows and columns)?
    * What are the "variables" (also known as "data items"). In a CSV these would be the column headings. Do you recognize the data types (numbers, strings, images, etc.)?    * Is there missing, incorrect, or otherwise problematic data?
    * How and why was this data collected?
    * For whom is this data accurate or useful? What is this data *unrepresentative* of? (Who is missing and left out of the data?)
    * Knowing what you know now about machine learning, what will a model trained on this data help you do? Are there are alternative (non-machine learning) methods you could use instead?
3. Link to the dataset and your post on [Assignment 4a Wiki](https://github.com/ml5js/Intro-ML-Arts-IMA/wiki/Assignment-4a).

## Session B: Training the Model

### Objectives:
* Learn steps to construct a vanilla neural network and train a classification model with ml5.js.
* Understand Neural Network architecture
    * What is a Perceptron?
    * What is a multi-layered perceptron?
    * Activation Functions
* Understand the terminology of the training process
    * Training
    * Learning Rate
    * Epochs
    * Batch size
    * Loss
* Understand the difference between training and inference

### Perceptron
* Nature of Code Chapter 10 - Neural Networks
   * Invented in 1957 by Frank Rosenblatt at the Cornell Aeronautical Laboratory ([original paper](http://www.ling.upenn.edu/courses/cogs501/Rosenblatt1958.pdf)), a perceptron is the simplest neural network possible: a computational model of a single neuron. A perceptron consists of one or more inputs, a processor, and a single output.
   * [Nature of Code Perceptron slides](https://drive.google.com/open?id=1jB5dSPH5kvrCRsgFOhmOWPG31FYgfgbO)
   * [NOC Neural Network videos](https://youtu.be/XJ7HLz9VYz0?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh) - 10.1 to 10.3 cover the "Perceptron", a model of a single neuron. The Perceptron forms the basis of modern multi-layer deep learning networks.
   * [NOC Neural Network chapter 10](https://natureofcode.com/book/chapter-10-neural-networks/) - written explanation of Perceptron and accompanying code in 10.1 to 10.4.

### Color Classifier
* [Full Coding Train Video Series using TensorFlow.js](https://youtu.be/y59-frfKR58?list=PLRqwX-V7Uu6bmMRCIoTi72aNWHo7epX4L), 7.1-7.5 cover how the data was collected and cleaned
* [Crowdsourcing Colors website](https://codingtrain.github.io/CrowdSourceColorData/index.html), [Crowdsourcing Colors source code](https://github.com/CodingTrain/CrowdSourceColorData)

### ml5.js examples
* [ml5 temporary build template](https://editor.p5js.org/ima_ml/sketches/A7vSIICpf)
* [Color Classifer](https://editor.p5js.org/ima_ml/sketches/WOLz4pub3)
* [Titanic Survival Dataset](https://editor.p5js.org/ima_ml/sketches/_I1AbpA9h)

### Artificial Neural Networks genesis
Adapted from [A 'Brief' History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/)
* In 1943, Warren S. McCulloch, a neuroscientist, and Walter Pitts, a logician, developed the first conceptual model of an artificial neural network. In their paper, "[A logical calculus of the ideas immanent in nervous activity](https://pdfs.semanticscholar.org/5272/8a99829792c3272043842455f3a110e841b1.pdf),” they describe the concept of a neuron, a single cell living in a network of cells that receives inputs, processes those inputs, and generates an output.
* Hebb's Rule from [The Organization of Behavior: A Neuropsychological Theory](https://alexa.design/2nyUyJi): "When an axon of cell A is near enough to excite a cell B and repeatedly or persistently takes part in firing it, some growth process or metabolic change takes place in one or both cells such that A's efficiency, as one of the cells firing B, is increased."
* Invented in 1957 by Frank Rosenblatt at the Cornell Aeronautical Laboratory ([original paper](http://www.ling.upenn.edu/courses/cogs501/Rosenblatt1958.pdf)), a perceptron is the simplest neural network possible: a computational model of a single neuron. A perceptron consists of one or more inputs, a processor, and a single output.
* In 1969, in their book [Perceptrons](https://mitpress.mit.edu/books/perceptrons) Marvin Minksy and Seymour Papert demonstrate the limitations of perceptrons to solve only "linearly separable" problems.  AI Winter #1!
* Paul Werbos's 1974 thesis [Beyond Regression: New Tools for Prediction and Analysis in the Behavioral Sciences](https://books.google.com/books/about/Beyond_Regression.html?id=z81XmgEACAAJ) proposes "backpropagation" as a solution to adjusting weights in the hidden layers of a neural network. The technique was popularized in the 1986 paper [Learning representations by back-propagating errors](http://www.iro.umontreal.ca/~vincentp/ift3395/lectures/backprop_old.pdf) by David Rumelhart, Geoffrey Hinton, and Ronald Williams

### Assignment 4 Due Sunday September 29 at 12pm
Train a model using `ml5.NeuralNetwork()` from a CSV or JSON dataset in the browser.

Here are some suggested exercises based on the [Color Classifer](https://editor.p5js.org/ima_ml/sketches/WOLz4pub3) and [Titanic Survival Dataset](https://editor.p5js.org/ima_ml/sketches/_I1AbpA9h) examples. Feel free to pick one of the ideas below or invent your own.

1. Follow the [Data Wrangling](https://github.com/ml5js/Intro-ML-Arts-IMA/blob/source/04_diy_neural/data-tutorial.md) tutorial for the Titanic dataset and clean the data yourself. Upload your own CSV, does the example still work?
2. Go back to the original [titanic dataset](https://docs.google.com/spreadsheets/d/1UKmuTgY8qWnZ-jQm9NBL0HGwlJS4e4VQTgNXTtluTCw/edit#gid=1774164161) and add another column from the raw data to the cleaned version. Upload a new CSV and retrain the model - what changes?
3. Try adjusting the "hyperparameters" of each example. Document what changes during the training and prediction stages. Below are some options you might try experimenting with.

```javascript
let nnOptions = {
  activationHidden: 'sigmoid', // 'relu', 'tanh'
  learningRate: 0.25, // any number!
  hiddenUnits: 16, // any number!
  modelLoss:  'categoricalCrossentropy', // 'meanSquaredError'
}

let trainingOptions = {
  epochs: 32,
  batchSize: 64
}
```

4. If you are feeling ambitious, try training a model with your own dataset.

Whatever exercise you choose, document the process of working with the data and the ml5.js library in a blog post. It's absolultely ok if nothing works, write a post that explains everything you tried, documents the errors, and theorize as to what might have gone wrong -- is the bug in the data, the ml5 library, the web editor?

