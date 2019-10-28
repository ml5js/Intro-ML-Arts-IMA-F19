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
pip install spell
spell login
spell upload input.txt
spell run "python train.py --data_path /NAME/input.txt" -m uploads/NAME/input.txt
```

### Certificate Fail Error

If you get an error after upload, you need to run a certificate command script. Those are two separate commands. If you have a different version of Python in Applications you might need to adjust.

```
pip install certifi 
/Applications/Python\ 3.6/Install\ Certificates.command
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

# Windows Training Steps

## Locally

```
# cd into the folder you want to contain python virtual environment folder
# and training-charRNN project
> python -m venv your_venv_name
> your_venv_name\Scripts\Activate.ps1
# Now you are in the virtual environment
> git clone https://github.com/ml5js/training-charRNN
> cd training-charRNN
> pip install -r requirements.txt
> python train.py --data_path /path/to/data/file.txt
# After finishing all the training
> deactivate
```
