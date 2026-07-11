Auf dem Weg zum Hybriden Smarthome war ich schon eine Weile unterwegs
Nun bin ich über ein Youtube Video von Matthias Kleine von Hausautomatisierung auf das Projekt

## ha-app-iobroker

gestoßen. Hatte ich mir im Vorwege bereits überlegt, dass dies sinnvoll ist, auf Grund der Kompexität aber erstmal verschoben.
Bis jetzt. Das Projekt ist noch ziemlich neu, nicht alles funktioniert wie es sein soll, aber mit den jetzt vorhandenen Einschränkungen kann ich gut leben.

hier mal meine Notizen dazu, die ich nach und nach ergänzen werde.

<img width="658" height="751" alt="image" src="https://github.com/user-attachments/assets/35d72673-1446-4fab-ba60-25fbf91bee30" />

####  Aus Homeassistant und Iobroker wird EINS

Der Iobroker läuft hierbei bei HomeAssistant  als Docker im Hintergrund, aber in der gleichen Maschine.

Im Gegensatz zu der Lösung von M. Kleine ist nicht der HASS Adapter, sondern die Bridge Funktion des LoRaWAN Adapters in Benutzung.

### Installation und Einrichtung weiter unten

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


## Installation und Einrichtung

### Vorbereitungen in HomeAssistant

#### Einen User mit Passwort in HomeAssistant anlegen
Einstellungen, Personen, Hinzufügen

<img width="943" height="879" alt="image" src="https://github.com/user-attachments/assets/dd69eeb1-c28c-4e54-a314-49f3b8390641" />

Anmeldung erlauben ja, Nur lokal ja, auch Admin nein

#### Mosquitto MQTT Broker installieren (falls noch nicht gemacht)

Einstellungen, Apps, Hinzufügen, Mosquitto

<img width="912" height="822" alt="image" src="https://github.com/user-attachments/assets/1a4a996d-9595-40e5-8c4a-03901459336e" />

#### MQTT Integration hinzufügen (falls noch nicht gemacht)

<img width="1084" height="803" alt="image" src="https://github.com/user-attachments/assets/620132ae-481f-44e5-b246-0286834f90e2" />


## ha-app-iobroker Installieren

#### Repository hinzufügen

Einstellungen, Apps, App installieren, (oben rechts) drei Striche, Repository, Hinzufügen

<img width="1031" height="316" alt="image" src="https://github.com/user-attachments/assets/ac60db01-1c94-4b4e-bd0d-f21ac2b26ccd" />



```https://github.com/klein0r/ha-app-iobroker```

#### App  installieren

Nach dem Hinzufügen kann in Apps Iobroker ausgewählt werden zu Installation und danach zum starten
Achtung, das ganze dauert wirklich ein paar Minuten, nicht ungeduldig werden, LOG beobachten

<img width="511" height="344" alt="image" src="https://github.com/user-attachments/assets/4151b427-d49e-4d7c-b446-4e7602d674f0" />


<img width="1291" height="587" alt="image" src="https://github.com/user-attachments/assets/42de3648-c7c7-47d9-883d-31a6be7530d4" />

Benutzeroberfläche aufrufen funktioniert (noch) nicht, auch nicht von der Seitenleiste aus

Also neuen Tab aufmachen, Homeassistant_IP:8081

<img width="1289" height="521" alt="image" src="https://github.com/user-attachments/assets/69ae3995-71aa-466c-8799-efed2b6c10bc" />

HASS Adapter ausschalten, wird nicht benötigt

### Funktion Bridge erzeugen
In Kategorien, Funktionen, (+) Hinzufügen, (ganz unten) Benutzerdefiniert, (z.B.) Bridge

<img width="735" height="479" alt="image" src="https://github.com/user-attachments/assets/9aaf2ce3-59fe-4cf4-a775-88753ed30478" />

### Admin auktualisieren, LoRaWAN Adapter installieren, Instanz hinzufügen

Über die Katze (Experteneinstellung ein) über NPM den neusten Admin installieren und den neusten LoRaWAN Adapter installieren und eine Instanz erzeugen

### LoRaWAN Instanz Einstellungen

In den Voreinstellungen kann Ursprung (vorerst) auf "AUS"

<img width="1017" height="575" alt="image" src="https://github.com/user-attachments/assets/f950f373-d352-4439-9cde-c1342866f10c" />

Bei der Bridge weden die MQTT Einstellungen vorgenommen:
Bridge Typ ist HomeAssistant
IP vom HomeAssistant, Port 1883, den einegrichteten Benutzer und das Passwort eintragen
Verbindungstest sollte OK ergeben

<img width="1284" height="971" alt="image" src="https://github.com/user-attachments/assets/24735b88-2200-450e-ad05-760433b4f87a" />

Bei Bridge fremde States die eben erstellte Funktion (Bridge) auswählen

<img width="1268" height="630" alt="image" src="https://github.com/user-attachments/assets/139ab03a-ae8f-4905-b6b8-460c10b7ee95" />



<img width="1289" height="521" alt="image" src="https://github.com/user-attachments/assets/69ae3995-71aa-466c-8799-efed2b6c10bc" />


#### Einrichtung Bridge von Iobroker zu Homeassistant ist hiermit abgeschlossen und kann benutzt werden (siehe oben)


### weitere Vorbereitungen in HomeAssistant für die Bridge HA zu Iobroker

### Label erstellen


Einstellungen, Label, Label erstellen

```ToIob``` (grosses T, Grosses I)

<img width="624" height="466" alt="image" src="https://github.com/user-attachments/assets/2546ba14-c3c4-42be-af3d-acc0ef80d934" />

Es gibt sogar ein Iobroker Symbol ;-)


### (4) Automatisierungen hinzufügen: Hinfällig, siehe Abschnitt Hier drunter

Alle 4 hinzufügen: (NICHT mehr hinzufügen)

[https://github.com/BenAhrdt/SmartHome/tree/main/Home%20Assistant/Automationen](https://github.com/BenAhrdt/SmartHome/tree/main/Home%20Assistant/Automationen)

### (4) Neu Benachrichtigung ist nun in der HACS Intergration "Iobroker LoRaWAN Bridge" enthalten
es müssen/sollen keine Automatisierungen mehr erstellt werden

Einfach in HACS Repository hinzufügen:
[https://github.com/BenAhrdt/home-assistant-lorawan-iobroker](https://github.com/BenAhrdt/home-assistant-lorawan-iobroker)

HA neu starten
In Einstellungen, Integrationen, "Iobroker LoRaWAN Bridge" hinzufügen

<img width="1399" height="894" alt="image" src="https://github.com/user-attachments/assets/41eab6ee-0e17-435f-a415-ff3c23463ddd" />

In der linken Seitenleiste ist nun "Iobroker LoRaWAN Bridge"

<img width="1400" height="769" alt="image" src="https://github.com/user-attachments/assets/6409e882-bbe5-46bc-adcc-c19af39b9619" />





#### Einrichtung Bridge von Homeassistant zu Iobroker ist hiermit abgeschlossen und kann benutzt werden (siehe oben)


### Chirpstack 4 als App installieren
Repository hinzuzfügen (siehe oben)

```https://github.com/databang-io/chirpstack-ha-addon```

Chipstack App Installieren und starten

<img width="1279" height="659" alt="image" src="https://github.com/user-attachments/assets/a9b53906-eba3-4d44-9989-f925a352897b" />


<img width="1028" height="770" alt="image" src="https://github.com/user-attachments/assets/6ed41546-d632-499c-a993-15fbd21096fc" />

Mqtt Benutzer Passwort eintragen
und API Key erzeugen und eintragebn


Chirpstack lässt sich aufrufen über Homeassistant_IP:8080
admin
admin

<img width="1289" height="946" alt="image" src="https://github.com/user-attachments/assets/98eecbb6-d853-4f9d-a1fc-afd7ccf08d9c" />

Gateway hinzufügen

<img width="1260" height="883" alt="image" src="https://github.com/user-attachments/assets/d5b2f256-4085-4397-9cef-0548d75eda0f" />

Gateway zum Chirpstack schicken lassen:

<img width="983" height="572" alt="image" src="https://github.com/user-attachments/assets/c97783de-2163-4426-99cd-de216755800d" />

<img width="1158" height="733" alt="image" src="https://github.com/user-attachments/assets/d4421d7a-9b99-4aac-95f4-a38bf9091e96" />


<img width="1287" height="877" alt="image" src="https://github.com/user-attachments/assets/89e7ce97-d578-4c22-8434-6a1178aebf62" />


Instanz wird grün nach Einrichtung für Chirpstack

<img width="1117" height="533" alt="image" src="https://github.com/user-attachments/assets/2751196a-a408-4d9d-ba1c-313f07485c09" />


Für die Nutzung von TTN einfach eine Instanz hinzufügen

<img width="1145" height="415" alt="image" src="https://github.com/user-attachments/assets/0ff0ce94-2e7a-49d6-af95-8e103b35511a" />

Passwort ist der erzeugte APi Key bei der MQTT Integration !



<img width="915" height="82" alt="image" src="https://github.com/user-attachments/assets/7368aa1c-ddec-4b57-8261-e17e65930ca0" />




























