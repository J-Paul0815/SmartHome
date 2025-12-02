###  HomeAssistant Geräte und Entitäten ins Matter 
- und damit dann weiter zu HomeKit
- Alexa
- Google Home


### Installation der Matterbridge
#### Methoden
- Eigene HA Integration (Empfehlung)
- eigene Maschine (z.B. LXC Container) auf Basis von Node
- eigene Maschine (z.B. LXC Container) auf Basis von Node  über Proxmox Commuity Install Script
- eigene Maschine (z.B. LXC Container) auf Basis von Docker
- Docker (z.B. Portainer)
(siehe Dokumentation der Matterbridge Luligu aug Github

####  Installation Eigene HA Integration

1. Möglichkeit automatisiert (falls möglich)

[https://github.com/Luligu/matterbridge-home-assistant-addon/blob/main/README.md](https://github.com/Luligu/matterbridge-home-assistant-addon/blob/main/README.md)

klick auf:

<img width="314" height="96" alt="image" src="https://github.com/user-attachments/assets/65341feb-8121-47b6-83c9-bf257357cd62" />


2. Möglichkeit manuell

In HomeAssistant auf Einstellungen, AddOn, AddStore
<img width="694" height="429" alt="image" src="https://github.com/user-attachments/assets/3b2b63e0-bee5-445f-be76-09ccf70ba523" />

oben rechts auf die 3 Punkte, Repositories
dort folgenden link einfügen 

```https://github.com/Luligu/matterbridge-home-assistant-addon```

<img width="436" height="370" alt="image" src="https://github.com/user-attachments/assets/9baffaab-da80-481f-afc0-9b0f3007134f" />

Matterbridge wird nur im AddOn Store gefunden

<img width="548" height="438" alt="image" src="https://github.com/user-attachments/assets/61cbff97-1314-4839-b435-879d784753f5" />
anklicken und auf Installieren klicken

Geduld haben, es dauert eine kleine Weile

Danach:
Beim Booten einschalten, Watchdog, zur Seitenleiste hinzufügen
Starten


<img width="587" height="292" alt="image" src="https://github.com/user-attachments/assets/76d98593-5c1b-403a-bff6-fa866271b14c" />

Weboberfläche öffnen

Auf die 3 Punkte
<img width="1306" height="218" alt="image" src="https://github.com/user-attachments/assets/9e7b46a0-44aa-43bb-9c7f-151394f8a163" />

Matterbridge-Hass auswählen

<img width="325" height="238" alt="image" src="https://github.com/user-attachments/assets/902c4eb3-5834-4ed1-80d1-f854ac650375" />

Install auswählen

nach der Installation auf das Zahnrad für die Konfiguration

Ich empfehle bei Host die IP Adresse einzutragen

<img width="538" height="642" alt="image" src="https://github.com/user-attachments/assets/c76dad02-6a17-4863-8e54-c71790ac8bf7" />

Den Token bekommt man in HomeAssistant auf der Hauptseite (unten links) auf deinen Benutzer klicken, Sicherheit

<img width="889" height="456" alt="image" src="https://github.com/user-attachments/assets/31302165-0b67-4021-bc42-6c3229a5af83" />

Ganz runter scrollen

<img width="626" height="341" alt="image" src="https://github.com/user-attachments/assets/efa189dd-11b6-4a75-bab8-9bf4c259ddbb" />

Langlebigen Token kreieren, Namen geben (z.B. Matterbridge) den Token kopieren

und in der Matterbridge Konfiguration unter Token ein kopieren

Empfehlung:
Filter by Label
<img width="278" height="122" alt="image" src="https://github.com/user-attachments/assets/c44c6c17-eaa7-4f46-83c1-fbd5a434d419" />

```matterbridge```
eingeben, dann ganz unten mit Confirm bestätigen
danach Matterbridge neu starten, oben auf 

<img width="278" height="74" alt="image" src="https://github.com/user-attachments/assets/8d409b38-51e3-417f-aa71-9cdb2c103895" />

nun unter Einstellungen
Bereiche, Label, Zonen
Label
ein neues label erstellen mit Namen "matterbridge"

<img width="684" height="371" alt="image" src="https://github.com/user-attachments/assets/bba83720-e8be-4a8e-b81f-1d41bbdcee0d" />

Damit ist die Installation abgeschlossen





















