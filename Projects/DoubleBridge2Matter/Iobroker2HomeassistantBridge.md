#### Installation der (bidirektionalen) Bridge Iobroker zu HmoeAssistant

<img width="724" height="782" alt="image" src="https://github.com/user-attachments/assets/aea77e79-3f96-4f2e-b572-a67aadb281bf" />


#### Voraussetzungen
- HomeAssistant Installation
- ein darin eingerichteter MQTT Broker
  dies kann das MQTT AddOn (Mosquitto) in HomeAssistant sein
  oder der MQTT Broker der im Zigbee2Mqtt system werkelt
  oder auch ein MQTT Broker der eigenständig läuft (Mosquitto, EMQX, oder oder)
- ein (möglichst eigener) dort eingerichteter User/Benutzer mit Passwort
  In HomeAssistant kann einfach in den einstellungen ein User (mqttuser) mit Passwort eingerichtet werden, dieser muss kein Admin sein

- Iobroker Installation
- Iobroker LoRaWAN Adapter


#### Einrichtung Bridge Funktion im LoRaWAN Adapter Instanz

- Vorbereitung
  Es wird eine Funktion erzeugt, mit der dann im Anschluss gewählt werden kann welche States "gebridged" werden sollen
  Zum Anfang muss eine neue Funktion unter Kategorien angelegt werden:
  Kategorien, Funktionen, oben rechts aufs "+" Zeichen, ganz unten Benutzerdefiniert

  <img width="1207" height="893" alt="image" src="https://github.com/user-attachments/assets/1961560d-4415-442c-8858-4b91451d82e0" />

  Dort einen Namen vergeben, wie Bridge, oder wie hier HomeAssistant

  <img width="475" height="334" alt="image" src="https://github.com/user-attachments/assets/e69037f8-3354-459f-98da-f6675a615a1d" />

  Ist das Erledigt, so sollte der Browser aktualisiert (F5) werden, damit die angelegte Funktion im weiteren Verlauf auch ausgewählt werden kann.

- Einrichtung der Bridge in der LoRaWAN Instanz

  <img width="883" height="568" alt="image" src="https://github.com/user-attachments/assets/03babf64-a8f4-4eaa-88ce-c81ef3cf8fea" />

  In der erzeugten Instanz werden dann folgende Einstellungen vorgenommen:
Bridge Art HomeAssistant, IP Adresse des MQTT Brokers, der in HomeAssistant eingerichtet ist. Das kann der interne von HA sein, oder auch ein externer wie hier in meinem Fall der Mosquitto MQTT Broker auf dem Zigbee2MQTT LXC, Benutzername und Passwort (so wie dort eingerichtet)

Mit dem Klick auf Verbindungstest, können die Einstellungen überprüft werden. Ist alles OK, dann erscheint unten links "Verbindung OK"
Im Tab "Bridge fremde States" stellt man nun die eben erstellte Funktion ein:

<img width="1131" height="687" alt="image" src="https://github.com/user-attachments/assets/31e68e06-339a-427c-bd6b-6da9afd3c316" />

Dort finden sich auch die Einstellungen für "Spezielle Geräte" (siehe weiter unten)

Nach speichern und schließen ist die Einrichtung der iob2HA Bridge fertig

Wie Geräte und States im Anschluss durchgängig von Iobroker (über die Double Bridge) zu Matter gelangen ist hier beschrieben

Link zur Nutzung von Iobroker Geräten in Matter über die Double Bridge

#### Aktivierung von Geräten die gebridged werden sollen

1. Beispiel an einem (Zigbee) Tür Fenster Sensor der zu HomeAssistant gebridged werden soll
Hierfür gibt es gute Gründe, z.B. dass es dann in HA für diesen Sensor keinen "Unbekannt" Status mehr gibt

das Gerät (hier Büro Fenster) bekommt (auch) die Funktion (so wie in der LoRaWAN Instanz eingerichtete, hier:) Bridge

<img width="989" height="354" alt="image" src="https://github.com/user-attachments/assets/44bcd4de-21f5-4e43-bca2-cd2e3a917ca7" />

Sobald das discovery in HA abgeschlossen ist (evtl. paar Sekunden) ist das Gerät mit dem Namen (hier Büro Fenster) in HA unter MQTT zu finden

<img width="860" height="896" alt="image" src="https://github.com/user-attachments/assets/177827e0-f08b-41ad-96e6-f577411262df" />

2. Beispiel (selbst erstellte) Datenpunkte in 0_User
   <img width="1023" height="382" alt="image" src="https://github.com/user-attachments/assets/f28d0403-ebfd-4f20-9e8c-61c26ad4fde5" />

   Es ist darauf zu achten, dass sich die States in einen Channel, oder in einem Device (NICHT Folder!) mit Namen befinden, weil daraus der Geräte Name in HA gebildet wird.

   <img width="1044" height="689" alt="image" src="https://github.com/user-attachments/assets/dd434d9e-5e28-4ed3-9881-f0a423ffc70c" />


4. Beispiel eine "Lampe" die gebridged werden soll (hier ein WLED Streifen)
   In HomeAssistant ist der WLED Streifen steuerbar Ein/Aus, Helligkeit, Farben, sowie die Auswahl der Effekte
   Wird das gerät dann über die MatterBridge (z.B.) zu HomeKit gebridged, so bleibt die Steuerung Ein/Aus, Helligkeit, Farben, aber keine Effekte, da Matter dies (noch) nicht beherrscht

   <img width="957" height="355" alt="image" src="https://github.com/user-attachments/assets/c06b5c24-f676-4b30-bc9e-7eeaab6495e8" />

   <img width="891" height="794" alt="image" src="https://github.com/user-attachments/assets/7857916a-29e7-461a-918c-5a063d6d3735" />

5. Beispiel eines (LoRaWAN) Thermostats

 <img width="1091" height="710" alt="image" src="https://github.com/user-attachments/assets/a720fe87-63bb-4225-9c22-861cdc110b62" />

 <img width="682" height="476" alt="image" src="https://github.com/user-attachments/assets/fe8ae2c2-ca56-4515-88fb-56b6f8914bbe" />

 <img width="554" height="584" alt="image" src="https://github.com/user-attachments/assets/1a56c723-4d8c-4a8b-a43a-0fd05dc65681" />

 ### Messaging (optinal) Benachrichtigungen in HomeAssistant aktivieren

 Auf Iobroker Seite im Bridge Tab der LoRaWAN Instanz die Benachrichtigungen aktivieren:

 <img width="832" height="506" alt="image" src="https://github.com/user-attachments/assets/0a2100ed-6f7c-4ee3-bfe8-8c4431f1df2b" />

 dann in HomeAssistant in Einstellungen
 
<img width="595" height="78" alt="image" src="https://github.com/user-attachments/assets/5e8a9b1a-5218-4fe8-b72c-7d6a9df71d14" />

eine neue Automatisation erstellen


<img width="355" height="157" alt="image" src="https://github.com/user-attachments/assets/138a2046-5f9c-4977-9a62-f2fb186b5e27" />

<img width="486" height="336" alt="image" src="https://github.com/user-attachments/assets/813f4d75-ea90-4694-afbc-80f9f7d96f12" />

Auslöser hinzufügen, Gerät

<img width="909" height="686" alt="image" src="https://github.com/user-attachments/assets/8e371514-f2a9-4104-a57e-6714ffe4a702" />

bei Gerät: LoRaWAN.0 auswählen:

<img width="706" height="595" alt="image" src="https://github.com/user-attachments/assets/f8a3f7ba-04e8-478d-ad84-6f33c6ab4c97" />

Bei "Dann" Aktion hinzufügen: Benachrichtigung

<img width="913" height="762" alt="image" src="https://github.com/user-attachments/assets/9deeea12-94f7-4965-9d09-8735a02ebc28" />

Anhaltende Benachrichtigung senden aufs "+" klicken

<img width="492" height="245" alt="image" src="https://github.com/user-attachments/assets/8eae6246-7656-4c07-a6eb-caa421338f2c" />

Bei Nachricht eintragen ```{{ trigger.payload }}```
Titel anhaken und eintragen ```LoRaWAN Benachrichtigung```

<img width="526" height="684" alt="image" src="https://github.com/user-attachments/assets/48b2f07c-b34f-4409-be71-8f6d7ad89f8e" />

Speichern

<img width="486" height="319" alt="image" src="https://github.com/user-attachments/assets/b5d54cb7-0147-4200-8ac7-8b11a130dad3" />

Namen vergeben und Speichern

Ergebnis sind Benachrichtigungen:

<img width="492" height="319" alt="image" src="https://github.com/user-attachments/assets/6a1b1426-90fa-4781-876d-99e951781473" />




















   
   
















