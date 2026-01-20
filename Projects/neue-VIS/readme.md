### Zugriff auf HomeAssistant einrichten von Aussen
#### Subdomain beim Provider einrichten

<img width="1181" height="670" alt="image" src="https://github.com/user-attachments/assets/a4a3d4c1-547f-4502-b077-ae1d0d6f2f96" />

#### Einträge NGINIX Reserve Proxy vornehmen
NPM wird nicht mehr weiter entwickelt, wer also neu anfängt, sollte sich mal zoraxy (oder Traefik) ansehen

[https://github.com/tobychui/zoraxy](https://github.com/tobychui/zoraxy)

<img width="485" height="537" alt="image" src="https://github.com/user-attachments/assets/9a7bbd09-ec45-486b-b781-19dac100ab5e" />


<img width="489" height="379" alt="image" src="https://github.com/user-attachments/assets/fc923de3-e75b-4f93-be65-7260956823bd" />








In der ```configuration.yaml``` eintragen:
(In diesem Beispiel ist 192.168.0.198 der NPM)
```
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 192.168.0.198
  server_port: 8123
```

HA Restart
HomeAssistant ist nun per HTTPS mit Zertifikat auch von Aussen erreichbar
Gutes Passwort (Bitwarden) sollte sowieso selbstverständlich sein

<img width="816" height="324" alt="image" src="https://github.com/user-attachments/assets/d94a7771-dca7-4b8b-be6e-32eeab0ba113" />


<img width="538" height="405" alt="image" src="https://github.com/user-attachments/assets/548d89b9-1f3f-438b-87cf-a16254350bd8" />


Diese Domain kann und sollte dann auch in der HA App von mobilen Geräten wie Handy, oder Pad eingetragen sein.


### Neue Visualisierung erstellen, auch in Bezug von Iobroker
#### Ziele
- Ansprechendes responisiv Design
- Übersichtlich 
- von aussen erreichbar, ohne VPN
- WAF tauglich
- kein abo, keine Kosten



### Voraussetzungen
- Home Assistant
- installierter Kiosk AddOn

<img width="816" height="465" alt="image" src="https://github.com/user-attachments/assets/90f39b60-240a-4442-b143-4fa6ce3b1696" />

<img width="619" height="315" alt="image" src="https://github.com/user-attachments/assets/21a4e38b-e058-4d48-a68c-a58e15905c67" />


  
- erreichbarkeit über Subdomain


<img width="426" height="575" alt="image" src="https://github.com/user-attachments/assets/10e0afff-440b-4ea2-b0bd-83c33526c2cc" />



Auf der RAW Konfiguration ganz oben einfügen:

<img width="294" height="110" alt="image" src="https://github.com/user-attachments/assets/8f5eba17-3053-46b6-b3b7-63f5f1f3ba9e" />


```
kiosk_mode:
  non_admin_settings:
    hide_header: true
    hide_sidebar: true
```

<img width="944" height="774" alt="image" src="https://github.com/user-attachments/assets/7ecbbb50-c2a1-453a-b02b-e9cd93ce0a21" />


<img width="1651" height="479" alt="image" src="https://github.com/user-attachments/assets/71ebddea-dac4-45ce-af14-32bb721128d0" />


