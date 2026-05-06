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
#### 1. Bridge Funktion von Iobroker zu HomeAssistant, bidirektional (steuern und schalten ist möglich)

#### 1.1 Funktion LoRaWAN Geräte und States (Entitäten) zu HomeAssistant bridgen
Handelt es sich um LoRaWAN Geräte so werden diese in der LoRaWAN Instanz "Bridge LoRaWAN" eingerichtet
Vorteil hierbei ist, dass Geräte die im LoRaWAN Network Server eingerichtet wurden automatisiert auch zu HomeAssistant gebridged werden (ZeroTouch)

<img width="1093" height="778" alt="image" src="https://github.com/user-attachments/assets/d8cd3bdd-7bb2-4c08-bc67-6d3bc671eb81" />

<img width="1025" height="495" alt="image" src="https://github.com/user-attachments/assets/4f0314c1-5127-4c74-a073-b8fdc6968587" />

#### 1.2 Funktion Nicht LoRaWAN (Spezial) Geräten (Licht, Thermostate, Garadinen, Luftbefeuchter usw.) mit den State (Entitäten) zu HomeAssistant bridgen

(Spezial) Geräte werden im LoRaWAN Adapter Instanz im Tab "Bridge fremde States" in den jeweiligem Abschnitt der Geräte Art zugeordnet


<img width="1006" height="715" alt="image" src="https://github.com/user-attachments/assets/df2011f9-ca16-4765-826e-737e6c4eacf1" />

<img width="1035" height="880" alt="image" src="https://github.com/user-attachments/assets/f5bd987a-199d-430c-9876-df505cc836c7" />

#### 1.3 Funktion Nicht LoRaWAN und nicht (Spezial) Geräten  als geräte, oder States (Entitäten) zu HomeAssistant bridgen

Handelt es sich NICHT um LoRaWAN Geräte und NICHT um Spezial Geräte, werden Geräte, oder einzelne States gebridged, indem ihnen eine (vorher definierte) Funktion zugewiesen wurde:


<img width="1086" height="353" alt="image" src="https://github.com/user-attachments/assets/e5ba2f69-8359-4b2b-8301-f3d4849d6ef6" />


<img width="1031" height="760" alt="image" src="https://github.com/user-attachments/assets/0a66e378-f679-4463-ba37-c1f8af596a5b" />


#### 2. Bridge Funktion von HomeAssistant zu Iobroker, bidirektional (steuern und schalten ist möglich)

Hierzu wird dem Gerät, oder einer einzelnen Entität ein (vorher definiertes) Label zugeordntet

<img width="1019" height="695" alt="image" src="https://github.com/user-attachments/assets/e4641ae0-177a-4a47-a277-6ec61bd11657" />


Geräte und die States werden dann zu Iobroker gebridged

<img width="1110" height="638" alt="image" src="https://github.com/user-attachments/assets/06c4e8ff-f678-4b7d-880c-8aa5eb5abe14" />

#### Gebridgte Geräte erscheinen im LoRaWAN Tab als Device Manager Kacheln
Dunkelblau= Gebridgte (Iob->HA) LoRaWAN Geräte
Hellblau  = Gebridgte Geräte (Iob->HA) (nicht LoRaWAN)
Grün      = Gebridgte Geräte (HA->Iob)




<img width="1058" height="807" alt="image" src="https://github.com/user-attachments/assets/ca376efd-8270-4464-8165-d76df8fee25e" />




















