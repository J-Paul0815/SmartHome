## Proxmox Upgrade
altes NUC 2 Cores (i3), 32 GB RAM stößt an seine Grenzen
<img width="729" height="304" alt="image" src="https://github.com/user-attachments/assets/a01afda2-8165-49d1-bc1e-e6ee6b73fc9e" />

## Neues NUC Asus 15, 5 Pro 225H, 64 GB RAM, 2TB M.2 SSD
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

<img width="1261" height="550" alt="image" src="https://github.com/user-attachments/assets/1fda0948-d5f2-4d00-8c15-89ea1985c765" />


### Installation
Nach der Instaööation von RAM und SSD

#### RAM Test

[https://www.memtest86.com/download.htm](https://www.memtest86.com/download.htm)

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/cc719177-2079-47cd-98ed-4f8ad9219876" />

<img width="1280" height="452" alt="image" src="https://github.com/user-attachments/assets/e86e2fb2-b7dd-448d-a3ef-aa5b6d3ab2e5" />

Memtest hat wohl in Verbindung mit dem Asus NUC einen bekannten Bug, so dass die Maschine nach einigen Durchläufen einfror.
Bin dann auf den RAMtest86+ umgestiegen

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/c2c92fde-dcbd-4ca6-b78e-641e2ec88a01" />



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

#### Email Notification einrichten
<img width="1085" height="749" alt="image" src="https://github.com/user-attachments/assets/cdf6db6f-03c6-4b84-abcf-12a6a3bd31e8" />

### Core Temperaturen zu Iobroker schicken
```apt-get install lm-sensors```

```
root@pve:~# sensors
coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +47.0°C  (high = +100.0°C, crit = +100.0°C)
Core 0:        +47.0°C  (high = +100.0°C, crit = +100.0°C)
Core 1:        +45.0°C  (high = +100.0°C, crit = +100.0°C)

acpitz-acpi-0
Adapter: ACPI interface
temp1:       -263.2°C  

pch_skylake-virtual-0
Adapter: Virtual device
temp1:        +43.5°C  

```
```nano /usr/local/bin/cpu_temp_send_iobroker.sh```

```
#!/bin/bash

# ioBroker IP:Port
IPP="192.168.0.222:8087"

# Temperatur-Datenpunkte
DP_CORE0="0_userdata.0.System.Core0"
DP_CORE1="0_userdata.0.System.Core1"
DP_PACKAGE="0_userdata.0.System.Package0"
DP_PCH="0_userdata.0.System.PCH"

# Shutdown-Datenpunkt
DP_SHUTDOWN="0_userdata.0.System.prxmxshutdown"

#############################################
# Temperaturen auslesen
#############################################

CORE0=$(sensors | awk '/Core 0:/ {gsub(/\+|°C/,"",$3); print $3}')
CORE1=$(sensors | awk '/Core 1:/ {gsub(/\+|°C/,"",$3); print $3}')
PACKAGE0=$(sensors | awk '/Package id 0:/ {gsub(/\+|°C/,"",$4); print $4}')

PCH=$(sensors | awk '
    /pch_skylake-virtual-0/ {found=1; next}
    found && /temp1:/ {
        gsub(/\+|°C/,"",$2)
        print $2
        exit
    }')

#############################################
# Werte an ioBroker senden
#############################################

curl -s "http://${IPP}/set/${DP_CORE0}?value=${CORE0}" >/dev/null
curl -s "http://${IPP}/set/${DP_CORE1}?value=${CORE1}" >/dev/null
curl -s "http://${IPP}/set/${DP_PACKAGE}?value=${PACKAGE0}" >/dev/null
curl -s "http://${IPP}/set/${DP_PCH}?value=${PCH}" >/dev/null

#############################################
# Shutdown prüfen
#############################################

DPSD=$(curl -s "http://${IPP}/getPlainValue/${DP_SHUTDOWN}")

if [ "$DPSD" = "true" ]; then

    logger "ioBroker: Shutdown von Proxmox angefordert"

    # Reset des Schalters
    curl -s "http://${IPP}/set/${DP_SHUTDOWN}?value=false" >/dev/null

    # Sicherheitswartezeit
    sleep 60

    # System herunterfahren
    /sbin/shutdown -h now
fi
```

```chmod +x /usr/local/bin/cpu_temp_send_iobroker.sh```

```
crontab -e
aufrufen und in die letzte Zeile einfügen (z.B. aus dem Cron Tab.txt):

* * * * * bash /usr/local/bin/cpu_temp_send_iobroker.sh > /dev/null 2>&1
```
### Shutdown von Proxmox von Iobroker aus ermöglicht
bereits im Script enthalten
beim setzten von ```0_userdata.0.System.prxmxshutdown``` auf ```true```
wird dieser wieder auf ```false``` gesetzt, Proxmox fährt alle VMs und LXC sauber runter und schaltet dann ab.










