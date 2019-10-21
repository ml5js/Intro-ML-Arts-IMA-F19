# Training Steps

## Locally

```
$ python3 -m venv your_venv_name
$ source your_venv_name/bin/activate
$ git clone https://github.com/ml5js/training-charRNN
$ cd training-charRNN
$ pip install -r requirements.txt
$ python train.py --data_path /path/to/data/file.txt
```


## With Spell

```
spell upload input.txt
spell run "python train.py --data_path /NAME/input.txt" -m uploads/ima2/input.txt
```
