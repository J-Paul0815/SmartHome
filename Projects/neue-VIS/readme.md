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


