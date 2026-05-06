Auf dem Weg zum Hybriden Smarthome war ich schon eine Weile unterwegs
Nun bin ich über ein Youtube Video von Matthias Kleine von Hausautomatisierung auf das Projekt

### ha-app-iobroker

gestoßen. Hatte ich mir im Vorwege bereits überlegt, dass dies sinnvoll ist, auf Grund der Kompexität aber erstmal verschoben.
Bis jetzt. Das Projekt ist noch ziemlich neu, nicht alles funktioniert wie es sein soll, aber mit den jetzt vorhandenen Einschränkungen kann ich gut leben.

hier mal meine Notizen dazu, die ich nach und nach ergänzen werde.

<img width="658" height="751" alt="image" src="https://github.com/user-attachments/assets/35d72673-1446-4fab-ba60-25fbf91bee30" />

####  Aus Homeassistant und Iobroker wird EINS

Der Iobroker läuft hierbei bei HomeAssistant  als Docker im Hintergrund, aber in der gleichen Maschine.

Im Gegensatz zu der Lösung von M. Kleine ist nicht der HASS Adapter, sondern die Bridge Funktion des LoRaWAN Adapters in Benutzung.

#### Installation und Einrichtung weiter unten

#### Funktionen
#### Funktion LoRaWAN Geräte und States (Entitäten) zu HomeAssistant bridgen







