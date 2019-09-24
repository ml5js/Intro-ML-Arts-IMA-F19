
// Source: Arduino Example, File > Examples > 04.Communication > ReadASCIIString

// pins for the LEDs
// note that these are PWM pins (https://www.arduino.cc/en/Tutorial/SecretsOfArduinoPWM)
const int yellowPin = 3; 
const int redPin = 5;  

void setup() {
  // initialize serial
  Serial.begin(9600);

  // make the pins outputs
  pinMode(yellowPin, OUTPUT);
  pinMode(redPin, OUTPUT);
}

void loop() {
  // see if there's incoming serial data, read it
  if (Serial.available() > 0) {             

    // look for the next valid integer in the incoming serial stream
    // in other words, look for an integer before a comma
    int yellowValue = Serial.parseInt();
    // do it again
    int redValue = Serial.parseInt();

    // Then look for the newline
    // That's the end of your sentence that you declared in your p5 sketch
    if (Serial.read() == '\n') {

      // fade the yellow and red LEDs
      analogWrite(yellowPin, yellowValue);
      analogWrite(redPin, redValue);
    }
    
  }
}
