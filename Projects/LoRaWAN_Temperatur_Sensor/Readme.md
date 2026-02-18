#### Bau eines LoRaWAN Temperatur Sensors


<img width="1381" height="581" alt="image" src="https://github.com/user-attachments/assets/829b0f31-b9ea-40fb-b307-32359c6e0327" />


##### Hardware
1. Sensor OneWire DS18B20
2. PullUp Widerstand 4,7 kOhm als Pullup zwischen VDD und Data
3. Batteriefach 3fach
4. 3 x Akkus AA 1,2V
5. Solarpanel 3-5V (ca. Postkartengröße)
6. Heltec Dev Board HTCC-AB01
7. Gehäuse, Steckverbinder

<img width="694" height="457" alt="image" src="https://github.com/user-attachments/assets/ea7d39e8-29ff-4a12-a0ef-03c5bcc1e507" />


<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/a9861d47-1b2a-489b-9a27-1096071f59fd" />


<img width="801" height="731" alt="image" src="https://github.com/user-attachments/assets/af93858d-ade0-479a-9b74-a5ba4efd91a2" />

<img width="807" height="687" alt="image" src="https://github.com/user-attachments/assets/035bd27f-32a9-4390-96bb-3940828097e2" />


##### Software

1. Download Install Arduino IDE
   
2. File, Prefereces, Add Board Manager URL
   
   ```https://resource.heltec.cn/download/package_heltec_esp32_index.json```

   <img width="1071" height="709" alt="image" src="https://github.com/user-attachments/assets/46f2dd34-cff8-42d3-a32f-7db7a537bca2" />

4. Tools → Board → Boards Manager → "Heltec CubeCell" suchen → INSTALL

   <img width="466" height="457" alt="image" src="https://github.com/user-attachments/assets/03c34dcf-6c00-4d5f-bde8-3930f0695d66" />

5. Tools → Board → CubeCell → "CubeCell-AB01"
   Tools → Port → COM-Port auswählen (115200 Baud)
   


   <img width="1090" height="708" alt="image" src="https://github.com/user-attachments/assets/df9f612c-7c11-4812-9551-1cdb88aa46a0" />


Region: EU 868
UpLinkMode= Unconfirmed

   <img width="637" height="798" alt="image" src="https://github.com/user-attachments/assets/98f73bd0-3610-4813-9257-5cdf0cd51d6d" />


6. Keys holen von TTN / Neues Gerät einrichten

   <img width="1232" height="845" alt="image" src="https://github.com/user-attachments/assets/46b447b1-471d-4fac-be04-d92ac9b17e89" />

   DevEUI und AppKey Generate, Namen (ID) vergeben

7. In Arduino IDE neuen Sketch anlegen, Sketch Code einfügen und die eben generierten Keys einfügen


8. Install, Sketch Prüfen, wenn OK, dann Upload
9. TTN Join beobachten
10. Payload formatter (Decoder) einfügen
11. Live beobachten


   <img width="1056" height="720" alt="image" src="https://github.com/user-attachments/assets/5eed8aa3-3ac4-46ef-9e97-f3b564c887e1" />

So kommen die Daten zu Iobroker:

   <img width="987" height="448" alt="image" src="https://github.com/user-attachments/assets/1c5b2e84-8490-446f-b810-a5c1f67d6bd4" />

So kommen die Daten zu HomeAssistant

<img width="1142" height="597" alt="image" src="https://github.com/user-attachments/assets/0bf0225a-b0bf-48cd-9571-e2ef718ab21d" />









   
