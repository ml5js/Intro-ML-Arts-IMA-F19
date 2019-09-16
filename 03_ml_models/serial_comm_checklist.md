# Serial Communication Checklist

## Check 1 - Arduino
* Your Arduino is connected to your computer 
* The Arduino IDE sofware registers your Arduino board at a paricular port: ![arduinoIDE_arduinoPort](images/arduinoIDE_port.png)
* You uploaded the correct Arduino sketch to your Arduino
* Everything is wired correctly
* The Arduino IDE's Serial Monitor is not open

## Check 2 - p5.serialcontrol App
* The p5.serialcontrol app is running and the port to which your Arduino is connected is open and connected: 
![p5serialcontrol_port](images/p5serialcontrol_port.png)

## Check 3 - p5 Web Editor
* Your p5.js sketch includes the p5.serialport library file in the sidebar: 
![p5serialport_libraryFile](images/p5serialport_libraryFile.png) 
* Your p5.js sketch knows to use the p5.serialport library by referencing it in your project's `index.html` file like this: 
  ```
  <body>
    <script src="p5.serialport.js"></script>
    <script src="sketch.js"></script>
  </body>
  ```
* Your p5.js sketch is programmed to send data to the same port to which your Arduino is connected. Look for this method in your p5.js setup() function to update the port number.
    ```
    serial.open("/dev/tty.usbmodem14301");
    ``` 
* Bonus! This last one is not related to serial communication, but you should check it anyway. Make sure your p5.js sketch also includes the ml5.js library by referencing it in the `index.html` file. Look for this line between the `header tags`.
    ```
    <script src="https://unpkg.com/ml5@0.3.1/dist/ml5.min.js" type="text/javascript"></script>
    ```