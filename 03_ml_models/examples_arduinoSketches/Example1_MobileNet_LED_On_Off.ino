
// Source: https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/

const int ledPin = 3; // the pin that the LED is attached to
int incomingByte;     // a variable to read incoming serial data into
 
void setup() {
 Serial.begin(9600);             // initialize serial communication
 pinMode(ledPin, OUTPUT);        // initialize the LED pin as an output
}
 
void loop() {
 if (Serial.available() > 0) {   // see if there's incoming serial data
   incomingByte = Serial.read(); // read it
   if (incomingByte == 'H') {    // if it's a capital H (ASCII 72),
     digitalWrite(ledPin, HIGH); // turn on the LED
   }
   if (incomingByte == 'L') {    // if it's an L (ASCII 76)
     digitalWrite(ledPin, LOW);  // turn off the LED
   }
 }
}
