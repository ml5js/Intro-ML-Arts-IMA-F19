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
spell run "python train.py --data_path /NAME/input.txt" -m uploads/NAME/input.txt
```

## More Training Options

```
# This are the hyperparameters you can change to fit your data
python train.py --data_path=./data/file.txt \
--rnn_size 128 \
--num_layers 2 \
--seq_length 50 \
--batch_size 50 \
--num_epochs 50 \
--save_checkpoints ./checkpoints \
--save_model ./models
```
