### Nutzung des Scripts zur automatisierten Einrichtung
#### Pro Tip
- Bevor es los geht, empfehle ich das Anlegen einer eigenen Kategorie (Hier HA Entität)
- Zuordnung von jedem State, der Verbindung zu HA hat
- So ist ein Auffinden durch filtern sehr einfach
<img width="1585" height="737" alt="image" src="https://github.com/user-attachments/assets/ae2af894-8938-4273-8bf2-650472754acb" />


#### Voraussetzungen siehe Main.md

Script per Copy and Paste in Iobroker hinzufügen

<img width="1272" height="707" alt="image" src="https://github.com/user-attachments/assets/c8248e02-1e48-49f4-85d0-a1e756692b73" />

Wichtige Definitionen einstellen, bzw. überprüpfen z.B. die passende MQTT Instanz ID 

```
// Clientinstanz des MQTT Clients
const Clientinstanz = 'mqtt-client.0';

// Zu verwedendes Starttopic
const Topicstart = 'iobroker/'

```
#### Vorgehensweise:
- Für die zu übertragenenen States werden über das Zahnrad die nötigen Einstellungen vorgenoemmen
- Sollen die Daten nur von Iobroker zu HA ist ```MQTT-Client``` zu aktivieren, das ```Topic``` einzutragen und ```Publish``` und ```Retain``` zu aktivieren
- Aufbau des Topics: iobroker (mit kleinem i, oder so, wie es in den Script Definitionen angegeben ist) / Name_des Geräts / Name_der_Entität
- Beispiel Das Topic ```iobroker/Garten/Temperatur``` erzeugt ein Gerät in HA mit dem Namen ```Garten``` mit der Entität ```Temperatur```
- Sollen die Daten auch von Home Assistant zurück zu Iobroker übertragen werden können, so ist auch zusätzlich ```abonnieren``` zu aktivieren
- Das Script wird gestartet um die Auto Discovery in Home Assistant einzuleiten
- In Home Assistant werden die ergänzenden Einstellungen vorgenommen, zum Beispiel der Bereich gewählt, oder einem Dashboard hinzuzufügen
- Fertig

##### States vom Type ```string``` übertragen:
(ohne Möglichkeit von HA zu Iobroker zurück)

<img width="1122" height="646" alt="image" src="https://github.com/user-attachments/assets/555b4144-8a52-4bf6-a6a1-3f49b7ad69c5" />

<img width="1115" height="363" alt="image" src="https://github.com/user-attachments/assets/090408d7-ab08-464c-b98e-b452fa339f1b" />


Nach starten des Scripts ist der State als Entität in HA vorhanden und kann über den Stift einem Bereich zugeordnet werden
<img width="1040" height="692" alt="image" src="https://github.com/user-attachments/assets/0c1ee344-690d-4d3b-9c15-8441d09aab0d" />


##### States vom Type ```number``` übertragen:
States vom typ ```number``` werden auch als Number zu HA übetragen
Sollen auch Daten von HA zu Iobroker übertragen werden, so ist auch ```abonnieren``` zu aktivieren

<img width="1007" height="804" alt="image" src="https://github.com/user-attachments/assets/4ffd3bfc-52e6-4011-809c-cc4057771c3d" />

<img width="1033" height="530" alt="image" src="https://github.com/user-attachments/assets/aa7b0498-550d-4286-90e7-1506a3266f66" />


##### States vom Type ```bool``` ```State``` (nur publisch) als Sensor übertragen:

States vom Typ ```bool``` sind, aber ohne ```abonnieren``` übertragen werden, sind auch in HA Boolsche Entitäten, werden dort typischer als Ein/Aus als String geführt

<img width="303" height="151" alt="image" src="https://github.com/user-attachments/assets/071b642e-a437-4e71-9a67-4f0e6bbce969" />

##### States vom Type ```bool``` ```State``` (mit abonnieren) als Switch übertragen:

States vom Typ ```bool``` sind, aber mit ```abonnieren``` übertragen werden, sind auch in HA Boolsche Entitäten, werden dort typischer als Schalter geführt:

<img width="985" height="457" alt="image" src="https://github.com/user-attachments/assets/0c2a6c42-247f-4a4d-a20f-61df91db7f4e" />

Diese sind dann in HA auch Steuerelemente, das schalten in HA hat dann auch ein sofortiges Schalten in Iobroker zur Folge

<img width="818" height="538" alt="image" src="https://github.com/user-attachments/assets/922c8d06-10f2-4de1-85d9-bef05ed9a837" />

##### States vom Type ```bool``` mit der Rolle ```button``` werden auch als Button übertragen:
Der State muss vom Type ```bool``` sein, die Rolle ```button``` haben und ```abonnieren``` muss auch aktiviert sein
<img width="334" height="232" alt="image" src="https://github.com/user-attachments/assets/705d4126-feed-454c-9482-df2f20817cde" />

Ein "Drücken" in HA setzt den "Botton State" in Iobroker kurz auf ```true```

Beispiel Blockly, bei dem dieser ```Botton State``` ein Script triggert, der das ```Integrations Script``` stoppt und wieder startet.
##### Somit kann man sich praktisch States von Iobroker "abholen", nachdem die MQTT Einstellungen in den States in Iobroker eingetragen worden sind

<img width="665" height="520" alt="image" src="https://github.com/user-attachments/assets/544828e5-437c-4901-9928-f0ddae83ff9b" />

























