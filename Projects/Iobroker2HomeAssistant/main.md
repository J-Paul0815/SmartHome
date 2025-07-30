### Projekt Bidirektionale Verbindungen der Systeme Iobroker zu HomeAssistant und von HomeAssistant zu Iobroker mit Auto Discovery. Geräte werden automatisiert korrekt in HA erstellt
Ziel ist es das Beste aus beiden Welten miteinander zu verbinden, da beide Systeme ihre Stärken auspielen, um als 
#### Ein Ganzen Royal Hyper System Iobroker2HomeAssistant
zu agieren. So kann die gelungene Oberfläche von HomeAssistant mit den einfachen Logik Möglichkeiten von Iobroker z.B. Blockly innerhalb eines einzigen Systems genutzt werden.
Besonderer Dank an dieser Stelle an Benjamin Schmidt für den beispielosen Einsatz.

#### Hinweis:
Viele Wege führen nach Rom. Die Beschreibung dieses Projekts zeigt nur eine von vielen Möglichkeiten auf und soll in erster Linie Inspiration sein. Andere Wege, oder Abweichungen können sicher das gleiche Ergebnis liefern.

#### Voraussetzngen:

- Iobroker Installation
- HomeAssistant Installation
- MQTT Broker Installation
- Iobroker und HA Verbindung zu dem Broker herstellen
- Iobroker JS Integrations Script 

##### Iobroker Installation 
Beispiele in der Proxmox Umgebung:

[Iobroker Installation Beschreibung aus dem LoRawan Adapter](https://wiki.hafenmeister.com/de/Installation)

[Offizielle Anleitung](https://www.iobroker.net/#de/documentation/install/linux.md)

##### Home Assistant Installation 
Beispiele in der Proxmox Umgebung:

[Proxmox Community HomeAssistant OS VM Install Script](https://community-scripts.github.io/ProxmoxVE/scripts?id=haos-vm)

##### MQTT Broker Installation
Hinweis: In meinem Fall habe ich die Gelegenheit benutzt um von dem Iobroker Zigbee Adapter zu der Zigbee2Mqtt Adapter Lösung zu wechseln.
Näheres hierzu am Ende dieses Textes 
Beispiel:
Unter Proxmox wurde ein neuer LXC Container erstellt auf Basis von Debian 12
Nach den üblichen Vorbereitungen wie Update/Upgrade, User erstellen, diesem in die Sudo-Gruppe hinzufügen wurde Mosquitto installiert, User und Passwörter erstellt

[Beschreibung Mosquitto Installation, mit Einrichtung von Usern/Passwörter](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi)

##### Iobroker und HomeAssistant Verbindungsaufbau
- Iobroker
  Adapter, Hinzufügen von einer Instanz für MQTT-Client (Nicht MQTT Broker im Client Modus)
  In der Instanz IP Adresse des Mosquitto LXCs, Port, Benutzer und Passwort eingeben (wie in der Mosquitto Installation eingerichtet)
  <img width="1051" height="487" alt="image" src="https://github.com/user-attachments/assets/b68758ed-16a3-4b2d-b35c-007ec7f43d76" />
- Home Assistant
  Einstellungen, Geeräte Dieste, Integration, (unten rechts) Integration hinzufügen, MQTT, MQTT-Broker Verbindungsinformationen manuell eingeben:
  
  <img width="944" height="709" alt="image" src="https://github.com/user-attachments/assets/71514cb9-d6a2-4621-94ed-1232226079fa" />
  <img width="471" height="562" alt="image" src="https://github.com/user-attachments/assets/4546a829-6110-4a49-af70-ebee36475c66" />

  Wurde (wie hier optional beschrieben) in dem LXC Container auch Zigbee2Mqtt installiert, so werden auch alle Zigbee Geräte bereits in HA gelistet:
  <img width="1284" height="836" alt="image" src="https://github.com/user-attachments/assets/c2861fa5-f962-4760-97df-fc345f082a4d" />




##### Iobroker Script Installation

Script findet sich hier im Projekt

Beschreibung, wie dieser genutzt wird ist in "Script Nutzung" beschrieben



________________________________________
Optional Zigbee2MQTT
In meinem Fall habe ich diesen Mosquitto LXC Container auch zusätlich für die Zigbee2MQTT Installation genutzt

[Installation Beschreibung Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/installation/01_linux.html)
Nach der Installation wurde vom Iobroker Zigbee Adapter zum Zigbee2MQTT Adapter gewechselt
Eine paralelle und gleichzeitige Nutzung von Zigbee in iobroker und HomeAssistant ist dann neben dem Zigbee2MQTT Dashboard problemlos möglich

[Anleitung zum Wechsel der Adapter](https://github.com/arteck/ioBroker.zigbee2mqtt/blob/main/docs/DE/DE_get-started_move.md)


<img width="1516" height="980" alt="image" src="https://github.com/user-attachments/assets/d726a27b-582c-42a7-9f63-74b0a53b08fc" />





