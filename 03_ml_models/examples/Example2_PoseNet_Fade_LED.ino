
// Source: https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/

const int ledPin = 3;   // the pin that the LED is attached to
byte byteFromSerial;    // a variable to read incoming serial data into

void setup() {
  Serial.begin(9600);
}
void loop() {
  if(Serial.available()){                // see if there's incoming serial data
    byteFromSerial = Serial.read();      // read it
    analogWrite(ledPin, byteFromSerial); // set LED brightness to the value of incoming serial data
  }
}
