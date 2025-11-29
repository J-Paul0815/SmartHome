## Projekt Zisterne über LoRaWAN 
Hinweis auf das Projekt LoRaWAN zu Home Assistant Bridge:

[https://github.com/J-Paul0815/SmartHome/tree/main/Projects/Lorawan_LNS_plus_AS](https://github.com/J-Paul0815/SmartHome/tree/main/Projects/Lorawan_LNS_plus_AS)

<img width="1536" height="1024" alt="ohkpifphhtpbc1939sjs" src="https://github.com/user-attachments/assets/06dfb920-cf45-41e0-bf20-3e654cd0f46c" />

#### Messung per
- Pegelsonde
- Ultraschall
 
### Teile die benötigt werden
- LoRaWAN Node RS485 z.B. Dragino RS485 BL (ab ca. 30€)

<img width="734" height="679" alt="image" src="https://github.com/user-attachments/assets/3f199306-222c-4e09-92d3-3fb58f2694e5" />

  
- Pegelsonde RS485 5m, es sollte auch eine Ausgabe über Float32 möglich sein, z.B. von ComWinTop AliExpress, ca. 35€
  der Vorteil bei RS485 ist, dass Register mit dem entsprechendem Wert ausgelesen werden, ohne Umrechnung.
  Eine Lösung über Messumformer Sensoren 4-20mA wäre aber auch möglich
- Mini Box mit DAE (Druckausgleichselement)
- Mini Step-Up Spannungswandler Modul 12V (z.B. Ebay 2,99€, drauf achten, dass bereits 12V voreingestellt ist)
- Optional Stecker/Buchse Steckverbinder SP13/4Pin

<img width="1280" height="928" alt="image" src="https://github.com/user-attachments/assets/c50f6e11-0a74-45c0-a760-ad1557a37257" />
  
<img width="433" height="1280" alt="image" src="https://github.com/user-attachments/assets/f402e128-69b7-4650-97e2-c1ba5d62d8dc" />

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/c864c0f6-8750-471f-8827-a0f662afd2a8" />


Bei dem in diesem Projkt hinterlegte Decoder ist (auch) ausgelegt für die Füllstandsmessungen für liegende Zylinder, auch mit abgerundeten Enden
Folgende Daten kommen bereits aus dem Decoder und landen somit dann auch in Iobroker, InfluxDB, Home Assistant etc.
Pegel im mm (mit 10 Nachkommastellen genau), cm (ohne Nachkommastellen), m³, Liter, Prozentuelle Füllung 

### Modbus Auslesung

<img width="503" height="280" alt="image" src="https://github.com/user-attachments/assets/0f3159e0-18c5-43e5-a3cd-06995322b87f" />

In Register 16 und 17 befindet sich der Wert für die Füllhöhe als Float32 Wert

Der Modbus Befehl lautet also:

##### Modbus Command (read)
010300160002
01 Slave ID=01
03  Modbus Command Read Holding Register
0016 Start Adress (Hex)
0002 Number of Register (to read) 0002 (2 Register)

##### Modbus Answer
3fc6d7ac
1. Register = 3fc6
2. Register = d7ac

(Value) Antwort ist also
3fc6d7ac

Dies entspricht in Dezimal
1.553456783294677734375 (in Metern)
155.3456783294677734375 (in cm)
1553.456783294677734375  (in mm)

<img width="820" height="248" alt="image" src="https://github.com/user-attachments/assets/b60a549a-c14b-45d3-9828-b464b35d406b" />

Fazit:
Die Hex-Zahl 3fc6d7ac besteht aus 2 Doppelbyte, also 4 Byte, also 8 Hex-Zeichen
Aus 8 Zeichen wird ein Wert übertragen in der Genauigkeit von Millimeter mit 18 Nachkommastellen

Da sich gerundete, und damit ungenaue Werte der Füllhöhe später bei der Umrechnung auf die Füllmenge potenzieren würden, ist eine genaue Messung extrem wichtig.

Siehe Artikel:
[LinkedIn Link zum Artikel Pegelsonden differenz In16 / Float32]([https://www.linkedin.com/posts/joerg-froehner-9b7a8b234_pegelsonden-info-differenz-int16-float32-activity-7287892932974534656-VcVP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqJT9sBGbVXui2BtwwXPsJJ_EXUDVFyS1I)

<img width="960" height="930" alt="image" src="https://github.com/user-attachments/assets/6907f9d5-922d-48c1-9df3-f700c81e3848" />











#### Ultraschall ToF Messung

<img width="495" height="509" alt="image" src="https://github.com/user-attachments/assets/29d36950-493b-4caa-ba2c-d6c6d40a5e0c" />

siehe auch Example Link aus dem loRaWAN Wiki

[https://wiki.hafenmeister.com](https://wiki.hafenmeister.com/de/Fecal-pit)
