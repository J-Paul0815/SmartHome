## Projekt Zisterne über LoRaWAN 
Hinweis auf das Projekt LoRaWAN zu Home Assistant Bridge:

[https://github.com/J-Paul0815/SmartHome/tree/main/Projects/Lorawan_LNS_plus_AS](https://github.com/J-Paul0815/SmartHome/tree/main/Projects/Lorawan_LNS_plus_AS)


#### Messung per
- Pegelsonde
- Ultraschall
 
### Teile die benötigt werden
- LoRaWAN Node RS485 z.B. Dragino RS485 BL

<img width="734" height="679" alt="image" src="https://github.com/user-attachments/assets/3f199306-222c-4e09-92d3-3fb58f2694e5" />

  
- Pegelsonde RS485
- Mini Box mit DAE (Druckausgleichselement)
- Mini Step-Up Spannungswandler Modul 12V (z.B. Ebay 2,99€, drauf achten, dass bereits 12V voreingestellt ist)

<img width="1280" height="928" alt="image" src="https://github.com/user-attachments/assets/c50f6e11-0a74-45c0-a760-ad1557a37257" />
  

Bei dem in diesem Projkt hinterlegte Decoder ist (auch) ausgelegt für die Füllstandsmessungen für liegende Zylinder, auch mit abgerundeten Enden
Folgende Daten kommen bereits aus dem Decoder und landen somit dann auch in Iobroker, InfluxDB, Home Assistant etc.
Pegel im mm (mit 10 Nachkommastellen genau), cm (ohne Nachkommastellen), m³, Liter, Prozentuelle Füllung 


#### Ultraschall ToF Messung

<img width="495" height="509" alt="image" src="https://github.com/user-attachments/assets/29d36950-493b-4caa-ba2c-d6c6d40a5e0c" />
