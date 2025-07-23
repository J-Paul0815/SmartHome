# Projekt Raumklima Device PoC
## Ziel soll sein ein Gerät zu haben, welches als externes Steuerungsgerät für einen Thermostaten dient, ähnlich wie die abgesetzten Geräte beim FHT80B oder den direktvernüpften Geräten bei Homematic. Das Projekt ist ein ESPHome-basiertes Raumklima-Messgerät mit CO2-, Temperatur-, Taupunkt- und Feuchtigkeitsmessung, das eine individuell einstellbare Solltemperatur über Drehgeber und Taster ermöglicht. Beim Einstellen der Zieltemperatur wird der Wert invertiert und vergrößert auf dem Display angezeigt, um eine klare Rückmeldung zu geben, bis die Einstellung durch Tastendruck bestätigt oder nach einer Zeit ohne Bestätigung verworfen wird. Das Display-Layout ist dabei speziell konfiguriert, um Textgröße, Layout und Formatierung für optimale Lesbarkeit zu gewährleisten.
Hier um diese externe Temperatur zur Steuerung von Thermostaten zu nutzen, z.B. MClimate Vicki, oder dnt-Thermostate

- Erfassen von Raumklima Daten
- Temperatur
- Temperatur abgesetzt (erweiterbar auf weitere Sensoren für Aussen, Nebenraum etc.)
- Luftfeuchte
- CO2
- Taupunkt

- Display Anzeige Paper Inc
- Sensordaten Anzeige
- Temperatur
- Taupunkt Temperatur
- Luftfeuchte
- CO2
- Datum
- Uhrzeit
- Zieltemperatur

- Datenübergbe und Steuerung der Zieltemperatur
- HomeAssistant
- Iobroker
- HomeKit

- ToDo
- Eingabe der neuen Ziel- (Soll-) Temperatur am Gerät
- entweder mit Tasten (hoch/runter)
- oder Drehregler (beides ist einfach möglich)
- Stromversorgung 
- Gehäuse designen und drucken

  <img width="1280" height="959" alt="image" src="https://github.com/user-attachments/assets/85cc7603-4d15-429c-88c9-a1d3421fd30d" />

  ### Teile
  - ESP32 Wroom Dev Board
  - Waveshare 2,9 Zoll PaperInc Display
  - Sensiron SCD41 CO2, Temperatur, Luftfeuchte Sensor
  - DS18B20 One-Wire Dallas Temperatur Sensor (bessere Geanuigkeit, besser möglichkeit zur Positionierung)
  - Fonts [Roboto](https://fonts.google.com/specimen/Roboto) 
  - Eventuell [Drehregler](https://arduino-projekte.info/products/ec11-rotary-encoder?srsltid=AfmBOoq8iUjnZtkUYDSDJO9BwFQWsFmIyCT1Rtr-7xz0YOARG2ZHJWaq)

  ### Firmware
  - ESP Home
  - (siehe separate YAML Datei)

  #### Anschlüsse am ESP32
  <img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/dbd86b12-9a3b-4397-a619-dd2b93a079d0" />

  ##### Display
  - BS Brücke nicht gesetzt (4-line SPI)
    
  - Busy     lila          GPIO15
  - RST      weiss         GPIO16
  - DC grün  GPIO17
  - CS orange GPIO26
  - CLK gelb GPIO18
  - DIN (Mosi) blau GPIO23
  - GND schwarz GND
  - VCC grau VIN 5V

##### SCD41
- VCC 3V3
- GND GND
- SDA 21
- SCL 22

##### DS18B20
- VCC 3V3
- GND GND
- GPIO27

##### Stellrad EC11 Rotary Encoder
<img width="492" height="409" alt="image" src="https://github.com/user-attachments/assets/e9f3d5ca-cd55-4d46-89f1-4ba158f0d7a7" />

- GND + GND -> GND (ESP32)
- Out A GPIO14
- Out B GPIO25
- Switch GPIO33

beim drehen am Stellrad ändert sich der Wert in 0.5 Grad Schritten

##### Taupunkt 
- errechnet aus
- Temperatur DS18B20
- Luftfeuchte CSD41

##### Zieltemperatur
- Virtuell 6-25 Grad

  <img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/166a4681-76d2-4803-b34c-8e4009623f1c" />

### Intergrationen
Integrationen sind an beliebiger Stelle einsehbar und Steuerbar und verteilen sich automatisch (Display, HA, Iobroker)

#### HomeAssistant
<img width="1175" height="904" alt="image" src="https://github.com/user-attachments/assets/c8c123e4-c719-49e0-b851-9638d1d0eacc" />



#### Iobroker
<img width="1258" height="797" alt="image" src="https://github.com/user-attachments/assets/09effbac-043d-4cf7-967b-1bad628a0e35" />

  

  

