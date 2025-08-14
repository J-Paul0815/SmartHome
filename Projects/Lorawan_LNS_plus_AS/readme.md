## Projekt LoRaWAN Network Server (LNS) mit einem Application Server (AS) als einen Dienst zu verknüpfen (Open Source)
### Im 2. Schritt kann dann eine bidirktionale Bridge zu Home Assistant eingerichtet werden

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
```apt update && apt install -y git apparmor docker.io docker-compose -y```

### 3. Docker aktivieren und starten
```systemctl enable --now docker```

### 4. Projekt- und Datenverzeichnisse anlegen
```git clone https://github.com/brocaar/chirpstack-docker```

### 5. Compose-Datei erstellen und bearbeiten
```cd chirpstack-docker```

```nano docker-compose.yml```
gegen das hier verlinkte docker-compose austauschen, oder die Änderungen für iobroker im Abschnitt ```services:``` 
der untere Teil der yaml sieht dann so aus:
```
  # --- ioBroker Integration ---
  iobroker:
    image: buanet/iobroker:latest
    container_name: iobroker
    hostname: iobroker
    restart: unless-stopped
    ports:
      - "8081:8081"
    volumes:
      - iobroker_data:/opt/iobroker
  # ----------------------------


volumes:
  postgresqldata:
  redisdata:
  iobroker_data:
```
Vollständige docker-compose.yaml;:

[Link zur docker-compose.yaml](https://github.com/J-Paul0815/SmartHome/blob/main/Projects/Lorawan_LNS_plus_AS/docker-compose.yaml)

### 6. Container starten
```docker-compose up -d```

### 7. IP Adresse prüfen
```ip a```

### 8. LNS und AS prüfen
Chirpstack ```IP_Adresse:8080```

Iobroker ```IP_Adresse:8081```

### 9. Chirpstack einrichten
#### Vorbereitungen im LoRaWAN Gateway (hier am Beispiel Mikrotik)
Im IOT Tab Lora anwählen, Server, NEW: (IP Adresse ist die von der eben erstellten Maschine Port 1700 und 1700)
<img width="985" height="556" alt="image" src="https://github.com/user-attachments/assets/7efd266d-cc8f-4daf-a49b-9e683dd0fa38" />
Im Tab Devices:
Enable ausschalten,Apply (sonst werden keine Änderungen übernommen)
den eben hinzugefügten Server (oben) und TTN EU V3 (darunter) hinzufügen
<img width="948" height="623" alt="image" src="https://github.com/user-attachments/assets/6d06fa85-6e73-45e0-b3e9-9eb8ff06a28e" />

## Chirpstack für Dich, TTN für die Community und für Dich als Backup !!!

Gateway ID merken, kopieren
Enable wieder einschalten, Apply


#### Chirpstack einrichten
Nun in Chirpstack einloggen User admin Passwort admin
Gateway hinzufügen:
<img width="1061" height="845" alt="image" src="https://github.com/user-attachments/assets/d1925d08-8d8c-4cde-a74c-d2468db13d89" />
Die gemerkte Gateway ID eintragen:
<img width="977" height="489" alt="image" src="https://github.com/user-attachments/assets/def77b07-1e26-4ae2-a8f5-8830ab8707e5" />
nach Submit sollte das Gateway nun Online dargestellt werden (dauert evtl. ein paar Sekunden)
<img width="513" height="570" alt="image" src="https://github.com/user-attachments/assets/0bf5b30f-44e4-4fda-9049-bec2fc436ccd" />

Die nächsen Schritte sind dann Device Profile mit den Decodern zu erstellen
Application erstellen
Dort Devices hinzuzufügen, mit der DEVEUI, JoinEUI (AppEUI bei TTN) und dem APPKey und dem Device ein (eben erstelltes) Device Profil zuzuordnen.

Platzhalter für die Einrichtung von Devices

### 10. Iobroker einrichten

Stichpunkte:
Ersteinrichtung (Durchklicken)
Installation von Adaptern:
- Javascipt
- LoRaWAN
- MQTT-Client (nicht MQTT Master/Server als Client!)

LoRaWAN Adapter Instanz einrichten:
IP Adresse der eben erstellten Maschine, kein SSL, kein Benutzer, kein Passwort, Quelle Chirpstack

<img width="887" height="580" alt="image" src="https://github.com/user-attachments/assets/d3749a56-2cf8-49f4-ab48-74fc8c6c26cb" />

speichern und Schlißen, Instanz sollte nun "grün" werden

<img width="546" height="39" alt="image" src="https://github.com/user-attachments/assets/744c46a7-4c35-4c52-b5b0-5462a473f491" />

Für die in Chirpstack (oder TTN) eingerichteten Geräte, werden nun Objekte angelegt:

<img width="1393" height="764" alt="image" src="https://github.com/user-attachments/assets/37c3692d-71de-45e8-8be4-eb5d909c2af6" />

Damit wäre das Projekt LNS & AS abgeschlossen
Hier in Stichworten, wie man nun die bidirektinale Verbindung zu Home Assistant einrichtet
Vorraussetzung hierfür ist der Einsatz eines in Home Assistant eingerichteten MQTT Server
Dies kann der in interne Mosquitto von HA sein, aber auch ein anderer. In meinem  Fall nutze ich den MQTT Server vom Zigbee2MQTT LXC Container, dieser in in HA eingerichtet und läuft auch immer.

Es müssen 2 Scripte importiert werden, die für die Übertragung zu HA das Autodiscovery übernehmen

Siehe hierzu folgendes Github Projekt:

[https://github.com/BenAhrdt/SmartHome/tree/main/ioBroker/Skripte/Home%20Assistant/MQTT](https://github.com/BenAhrdt/SmartHome/tree/main/ioBroker/Skripte/Home%20Assistant/MQTT)

Hier ein Video auf Youtube, welches die Funktionsweise zeigt:


[https://youtu.be/cl2A3-pa9MY](https://youtu.be/cl2A3-pa9MY)

<img width="1043" height="778" alt="image" src="https://github.com/user-attachments/assets/fc0db48c-71a8-42e3-85e9-6f168e2546d9" />






  
  





 



