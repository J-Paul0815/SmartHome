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
- Sollen die Daten auch von Home Assistant zurück zu Iobroker übertragen werden können, so ist auch zusätzlich Publish zu aktivieren
- Das Script wird gestartet um die Auto Discovery in Home Assistant einzuleiten
- In Home Assistant werden die ergänzenden Einstellungen vorgenommen, zum Beispiel der Bereich gewählt, oder einem Dashboard hinzuzufügen
- Fertig

##### States vom Type ```string``` übertragen:
(ohne Möglichkeit von HA zu Iobroker zurück)

<img width="1122" height="646" alt="image" src="https://github.com/user-attachments/assets/555b4144-8a52-4bf6-a6a1-3f49b7ad69c5" />

<img width="1115" height="363" alt="image" src="https://github.com/user-attachments/assets/090408d7-ab08-464c-b98e-b452fa339f1b" />


Nach starten des Scripts ist der State als Entität in HA vorhanden und kann über den Stift einem Bereich zugeordnet werden
<img width="1040" height="692" alt="image" src="https://github.com/user-attachments/assets/0c1ee344-690d-4d3b-9c15-8441d09aab0d" />


##### States vom Type ```bool``` übertragen:












