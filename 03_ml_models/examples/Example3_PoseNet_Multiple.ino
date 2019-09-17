
// Source: https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/

void setup() {
  // initialize serial communication:
  Serial.begin(9600);
  // initialize the LED pins:
  for (int thisPin = 2; thisPin < 5; thisPin++) {
    pinMode(thisPin, OUTPUT);
  }
}

void loop() {
  // read the sensor:
  if (Serial.available() > 0) {     // see if there's incoming serial data
    int inByte = Serial.read();     // read it

    if (inByte == 'a') {            // if it's a lowercase 'a' (ASCII 97),
      digitalWrite(2, HIGH);        // turn the LED on
    } else {
      digitalWrite(2, LOW);         // otherwise turn it off
    }

   if (inByte == 'b') {             // if it's a lowercase 'b' (ASCII 98),
      digitalWrite(3, HIGH);        // turn the LED on
    } else {
      digitalWrite(3, LOW);         // otherwise turn it off
    }    

    if (inByte == 'c') {            // if it's a lowercase 'c' (ASCII 99),
      digitalWrite(4, HIGH);        // turn the LED on
    } else {
      digitalWrite(4, LOW);         // otherwise turn it off
    }   
  }
}
