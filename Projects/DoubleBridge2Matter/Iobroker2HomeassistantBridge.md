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











