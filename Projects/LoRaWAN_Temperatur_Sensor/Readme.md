#### Bau eines LORaWAN Temperatur Sensors

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
   




   
