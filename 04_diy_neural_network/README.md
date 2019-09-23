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
* Nature of Code Chapter 10
   * [NOC videos](https://youtu.be/XJ7HLz9VYz0?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh) - 10.1 to 10.3 cover the "Perceptron", a model of a single neuron. The Perceptron forms the basis of modern multi-layer deep learning networks.
   * [NOC chapter 10](https://natureofcode.com/book/chapter-10-neural-networks/) - written explanation of Perceptron and accompanying code in 10.1 to 10.4.

### Related Projects
* [Feminist Data Set](https://carolinesinders.com/feminist-data-set/) by Caroline Sinders
* [Gender Shades: How well do IBM, Microsoft, and Face++ AI services guess the gender of a face?](http://gendershades.org/) by Joy Buolamwini and Timnit Gebru
* [ImageNet Roulette](https://imagenet-roulette.paglen.com) by Kate Crawford and Trevor Paglen with Leif Ryge

### Reading and Viewing
* [This is how AI bias really happens—and why it’s so hard to fix](https://www.technologyreview.com/s/612876/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/) by Karen Hao
* [How to Make A.I. That’s Good for People](https://www.nytimes.com/2018/03/07/opinion/artificial-intelligence-human.html) by Fei-Fei Li
* [Estimating the success of re-identifications in incomplete datasets using generative models](https://www.nature.com/articles/s41467-019-10933-3) from nature.com
* Video: [Analyzing & Preventing Unconscious Bias in Machine Learning](https://www.infoq.com/presentations/unconscious-bias-machine-learning) by Rachel Thomas
* Video: [Data visualization for machine learning](https://vimeo.com/304131671)

## Session B: Training the Model

### Objectives:
* Learn steps to construct a vanilla neural network and train a classification model with ml5.js.
* Understand the terminology of the training process:
    * Training, testing, and validation.
    * “hyper parameters” (We are using “best guess” defaults!)
    * Epochs
    * Batch size
    * Loss
* Understand the difference between training and inference

### Assignment 4 Due Sunday September 29 at 12pm:
