### Ultaschall Distanz Sensor

<img width="372" height="332" alt="image" src="https://github.com/user-attachments/assets/252fdd16-817f-4782-bfa8-4f9dbd013ebb" />


<img width="627" height="664" alt="image" src="https://github.com/user-attachments/assets/078ea06c-bcaa-4732-89e7-5838f35cadae" />


<img width="691" height="287" alt="image" src="https://github.com/user-attachments/assets/658b0343-4abe-45fb-9370-a15a0a199232" />




<img width="687" height="301" alt="image" src="https://github.com/user-attachments/assets/999ea2db-2984-4da7-92c7-8fe757d5b120" />











<img width="678" height="677" alt="image" src="https://github.com/user-attachments/assets/1c838d41-3c06-4ae5-ad48-1bc7e3166107" />


<img width="697" height="553" alt="image" src="https://github.com/user-attachments/assets/c5d00ec7-ccf6-427c-9cdd-445d7fd2ca18" />



#### Plan /ToDo

Distanzwert geglättet + RAW + Temperatur abrufen

```
01 03 01 00 00 03

Slave ID 01
Read 03
Start 01 00
Anzahl Register  00 03
```


Decoder anpassen:

```
// MIT License (MIT)
// Copyright (c) 2024 Joerg Froehner hafenmeister.com
// It is not allowed to remove this entry
// It is not allowed to give away without permission
//
// Time Interval Einstellung: Messaging, Downlink, Port 1, replace Downlink, Bytes
// 3 Std = 01 00 2A 30
// 1 Std = 01 00 0E 10
// 20 Min = 01 00 04 B0
// 10 Min = 01 00 02 58
// 5 Min = 01 00 01 2C
// 1 Min = 01 00 00 3C
// andere Zeiten Sekunden in HEX umwandeln und hinter 01 00 hängen
//
// Reset /Restart 04 FF
//
// Demo
// 0D 10    01    02 F2    02 EF   01  2C
// 0D100102F202EF012C


function decodeUplink(input) {
  var bytes = input.bytes;
  var fPort = input.fPort;
  

  
 if( fPort == 2 ) {

   
    var batteryVoltageLoRa = (bytes[0]<<8 | bytes[1]) /1000;
    var distance = (bytes[3]<<8 | bytes[4]) ;
    var distance_raw = (bytes[5]<<8 | bytes[6]) ;
    var temperature = (bytes[7]<<8 | bytes[8]) /10 ;
    var utc = new Date().toUTCString();
    var device = "Dragino";
    
  return {
    data: {
      LoRa_Voltage: batteryVoltageLoRa,
      Distance_mm: distance,
      Distance_mm_RAW: distance_raw,
      
      Temperature: temperature,
      Device: device,
      Timestamp_UTC: utc,

    }  
    }
  }
  
  else {
    return {
    data: {
// RAW: bytes

    }
    }
 }
}
// MIT License (MIT)
// Copyright (c) 2024 Joerg Froehner hafenmeister.com
// It is not allowed to remove this entry
//




```


<img width="427" height="395" alt="image" src="https://github.com/user-attachments/assets/2a8a0905-7cc3-4c9f-91f7-c407344803b0" />




