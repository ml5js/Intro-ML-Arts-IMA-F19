# Training an RNN model

## Session A: Data Collection and Python Environment

### Objectives
* Learn about preparing a text dataset
* Learn how to setup a native TensorFlow Python local environment

### Local Python Environment
* [Python and Virtualenv Tutorial](https://youtu.be/nnhjvHYRsmM)
* [Creation of Virtual Environments Documentation](https://docs.python.org/3/library/venv.html)
* [ml5 charRNN training repo](https://github.com/ml5js/training-charRNN)
* [Training Steps](training.md)

### Running p5.js sketches locally
* [node.js](https://nodejs.org/en/)
* [git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [All Coding Train Workflow Videos](https://thecodingtrain.com/Tutorials/19-workflow/)

### ml5.js examples
* [charRNN Generate Text](https://github.com/ml5js/ml5-examples/tree/release/p5js/CharRNN/CharRNN_Text)
* [charRNN Interactive Text](https://github.com/ml5js/ml5-examples/tree/release/p5js/CharRNN/CharRNN_Interactive)
* [charRNN "stateful" Text](https://github.com/ml5js/ml5-examples/tree/release/p5js/CharRNN/CharRNN_Text_Stateful)

### Assignment:
1. Collect a text dataset minimum 5 MB of text. We'll use this dataset in class on Wednesday.

## Session B: Deploying the Model

### Objectives
* Review and continue to learn about training a charRNN model.
* Understand how “temperature” affects the charRNN’s generated text.
* Understand the distinction between “stateful” and “stateless” generation.

### Cloud Computing
* Spell
  * [Introduction to Spell](https://youtu.be/ggBOAPtFjYU)
  * [Text Generation with LSTM and Spell with Nabil Hassein](https://youtu.be/xfuVcfwtEyw)
* NYU HPC
  * [HPC Tutorial and Documentation](https://github.com/oveddan/itp_presentations/blob/master/hpc/getting_started.md) by Dan Oved
* Google Colab
* AWS
* Paperspace

### Text Data Sources
* [Project Gutenberg](https://www.gutenberg.org/)

### GitHub Pages
* [GitHub Pages documentation](https://pages.github.com/)
* [GitHub Pages Video Tutorial](https://youtu.be/8HPYsDTk17A) -- this is from 2016, several things have changed, the most significant being that you no longer are required to use `gh-pages` as the branch name.


### Assignment:

#### Reading / Viewing
* [Eyeo 2017 Talk](https://vimeo.com/232545219) about [Writing with the machine](https://www.robinsloan.com/notes/writing-with-the-machine/) by Robin Sloan (Text & Music)
* [The Subtext of a Black Corpus](https://medium.com/ml5js/the-subtext-of-a-black-corpus-4440de02eb32) In conversation with ITP SIRs Nikita Huggins & Ayodamola Okunseinde by Ashley Lewis
* [Adventures in Narrated Reality Part 1](https://medium.com/artists-and-machine-intelligence/adventures-in-narrated-reality-6516ff395ba3) and [Adventures in Narrated Reality Part 2](https://medium.com/artists-and-machine-intelligence/adventures-in-narrated-reality-part-ii-dc585af054cb) by Ross Goodwin

#### Instructions
1. Collect a text dataset. Try to achieve a minimum of 5 MB of text.
2. Set up a local or cloud environment and train a model with your own data.
3. Create an interactive sketch with your model and ml5.js. (Note that you will not be able to run your p5.js sketch in the editor since it does not support uploading of charRNN models. You can run your sketch locally and document the results on your blog. Include your code (an easy way is to link to a [GitHub Gist](https://gist.github.com/). If you are feeling ambitious I would suggest hosting your sketch via GitHub Pages.)
