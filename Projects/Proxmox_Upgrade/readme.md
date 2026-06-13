## Proxmox Upgrade
altes NUC 2 Cores (i3), 32 GB RAM stößt an seine Grenzen
<img width="729" height="304" alt="image" src="https://github.com/user-attachments/assets/a01afda2-8165-49d1-bc1e-e6ee6b73fc9e" />

Neues NUC Asus 15, 5 Pro 225H, 64 GB RAM, 2TB M.2 SSD
<img width="692" height="510" alt="image" src="https://github.com/user-attachments/assets/3324f1c0-6498-42fb-ae41-ee1de9c77ec7" />

### Hardware
#### NUC
<img width="1610" height="825" alt="image" src="https://github.com/user-attachments/assets/dd0c5196-bb8e-48da-ba9b-0bb39bee8691" />


<img width="376" height="299" alt="image" src="https://github.com/user-attachments/assets/fdfa35ab-00f4-4ee1-b87a-de286ae97cad" />

#### RAM

<img width="1617" height="741" alt="image" src="https://github.com/user-attachments/assets/92114e8d-68d5-4a99-9c9e-e420047b048b" />

#### SSD

<img width="880" height="560" alt="image" src="https://github.com/user-attachments/assets/79606c16-2b17-4b56-b649-152f015b9ffa" />

<img width="206" height="441" alt="image" src="https://github.com/user-attachments/assets/b5d93e4d-701e-48ac-9763-dec8e6b72102" />

#### Geplantes Gehäuse

<img width="1118" height="631" alt="image" src="https://github.com/user-attachments/assets/cbe5036f-5700-49fb-b95c-4d2608c9b91f" />

<img width="1226" height="649" alt="image" src="https://github.com/user-attachments/assets/8209f537-7935-47d5-8586-e932c6b80c98" />

### Installation
Nach der Instaööation von RAM und SSD

#### RAM Test

[https://www.memtest86.com/download.htm](https://www.memtest86.com/download.htm)

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/cc719177-2079-47cd-98ed-4f8ad9219876" />

<img width="1280" height="452" alt="image" src="https://github.com/user-attachments/assets/e86e2fb2-b7dd-448d-a3ef-aa5b6d3ab2e5" />

#### Bios Update 

Download CAP Datei:
[https://www.asus.com/de/supportonly/nuc15crk/helpdesk_bios/](https://www.asus.com/de/supportonly/nuc15crk/helpdesk_bios/)

<img width="1480" height="637" alt="image" src="https://github.com/user-attachments/assets/1147f92d-75ef-4291-9d44-0054c696c6f1" />

In meinem Fall war das Bios gerade mal 1 Woche alt.

Nach dem Download entpacken, dort findet man die CAP Datei


Beim Boot Vorgang F7 drücken, dann Stick mit ```CRARL579.0030.CAP´´´ einstecken und BIOS Update starten

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/904658ea-db20-4007-9495-16418d79a591" />

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/6f67504d-776c-41c1-9b30-b4bdced5341f" />


#### TDP für Passiv Gehäuse vorbereiten
Genaue Anleitung:

[https://akasa.co.uk/download/manual/NUC_15_Pro_Cyber_Canyon_TDP_Support_BIOS_settings_28W_v1_12052025.pdf](https://akasa.co.uk/download/manual/NUC_15_Pro_Cyber_Canyon_TDP_Support_BIOS_settings_28W_v1_12052025.pdf)


<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/65b37643-b72e-4afe-a1bb-0b59a5fec23b" />

#### Proxmox Installieren
Proxmox Download:
[https://www.proxmox.com/de/downloads/proxmox-virtual-environment](https://www.proxmox.com/de/downloads/proxmox-virtual-environment)

Balena Etcher Download:
[https://etcher.balena.io/#download-etcher](https://etcher.balena.io/#download-etcher)

USB Stick mit der mit Balena Etcher erstelleten Proxmox Install booten und Installation starten

Nicht vergessen in die Optionen zu gehen:

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/3339f84d-9c29-4a74-b858-3376c1eb07c1" />

<img width="871" height="383" alt="image" src="https://github.com/user-attachments/assets/6b81b843-b4cb-4369-9b40-ca437caced76" />

Nach dem Starten die passende Subscription auswählen, Updates fahren













