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








