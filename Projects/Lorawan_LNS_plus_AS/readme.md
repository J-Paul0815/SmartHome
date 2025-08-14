## Projekt LoRaWAN Network Server (LNS) mit einem Application Server (AS) als einen Dienst zu verknüpfen (Open Source)

In diesem Beispiel wird die in einem LXC Container unter Proxmox als Docker eingerichtet
Ebenso liesse sich dies aber auch ohne Docker, oder auf einem Raspberry Pi betreiben
Dies ist ein Beispiel für den Aufbau eines Testaufbaus mit minmalsten befehlen, für einen produktiven Einsatz sind weitere scritte nötig, wie anlegen von Usern, verbabe von Rechten usw. 

### Anwendung und Ziel
- Die Anwendung ist die Cloudfreie (Lokale) Nutzung von LoRaWAN inklusive eines Application Servers, der (auch) als LoRaWAN Bridge für Home Assistant genutz werden kann
- Ziel ist es LoRaWAN in Home Assistant lesend und schreibend vollumfänglich aber ohne weitere Vorkenntnisse nutzen zu können
- Möglichkeit ein eigenes LoRaWAN Gateway, oder ein evt. öffentlich verfügbares Gateway (TTN) zu nutzen
  
### Aufbau
- Chirpstack als LNS
- Iobroker mit dem LoRaWAN Adapter als AS
- Interne Verknüfung
- externe Verknüpfung

### Installation
- Erstellung eines LXC Containers (Template debian 12, min. 4GB RAM, 32 GB HDD, 2 Cores, IP4 DHCP, Option aktiviert Nesting & keyctl )
<img width="355" height="292" alt="image" src="https://github.com/user-attachments/assets/f89a59c1-0bbd-422d-8926-c48a31278d14" />


### 1. System aktualisieren
```apt update && apt upgrade -y```

### 2. Docker & Docker Compose installieren
```apt install docker.io docker-compose -y```

### 3. Docker aktivieren und starten
```systemctl enable --now docker```

### 4. Projekt- und Datenverzeichnisse anlegen
```mkdir -p ~/lorawan/{chirpstack/config,chirpstack/data,chirpstack_db,mqtt/config,mqtt/data}```

### 5. Compose-Datei erstellen und bearbeiten
```cd ~/lorawan```

```nano docker-compose.yml```

[Link zur docker-compose.yaml](https://github.com/J-Paul0815/SmartHome/blob/main/Projects/Lorawan_LNS_plus_AS/docker-compose.yaml)

### 6. Container starten
```docker-compose up -d```

### 7. IP Adresse prüfen
```ip a```

### 8. LNS und AS prüfen
Chirpstack ```IP_Adresse:8080```

Iobroker ```IP_Adresse:8081```

### 9. Chirpstack einrichten
Platzhalter

### 10. Iobroker einrichten
Platzhalter
Stichpunkte:
Ersteinrichtung (Durchklicken)
Installation von Adaptern:
- Javascipt
- LoRaWAN
- MQTT-Client (nicht MQTT Master/Server als Client!)
  





 



