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



function decodeUplink(input) {
  var bytes = input.bytes;
  var fPort = input.fPort;
  

  
 if( fPort == 2 ) {

   
    var batteryVoltageLoRa = (bytes[0]<<8 | bytes[1]) /1000;
    var distance = (bytes[3]<<8 | bytes[4]) ;
    var temperature = (bytes[5]<<8 | bytes[6]) /10 ;
    var utc = new Date().toUTCString();
    var device = "Dragino";
    
  return {
    data: {
      LoRa_Voltage: batteryVoltageLoRa,
      Distance_mm: distance,
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

