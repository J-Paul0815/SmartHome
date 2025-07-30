### Nutzung des Scripts zur automatisierten Einrichtung

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
(ohne Möglichkeit von HA zu Iobrokwer zurück)

<img width="1122" height="646" alt="image" src="https://github.com/user-attachments/assets/555b4144-8a52-4bf6-a6a1-3f49b7ad69c5" />

##### States vom Type ```bool``` übertragen:












