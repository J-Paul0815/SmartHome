## Proxmox Upgrade

#### Video vom Umbau NUC 15 in ein Akasa lüfterloses Alu Gehäuse

[https://youtu.be/9ouoL_6rC_I](https://youtu.be/9ouoL_6rC_I)

altes NUC 2 Cores (i3), 32 GB RAM stößt an seine Grenzen
#### Vorher

<img width="729" height="304" alt="image" src="https://github.com/user-attachments/assets/a01afda2-8165-49d1-bc1e-e6ee6b73fc9e" />

#### Nachher

<img width="704" height="310" alt="image" src="https://github.com/user-attachments/assets/8fd9f883-eea8-4ca4-b2cb-8f22c0a7700d" />

## Neues NUC Asus 15, 5 Pro 225H, 64 GB RAM, 2TB M.2 SSD
<img width="692" height="510" alt="image" src="https://github.com/user-attachments/assets/3324f1c0-6498-42fb-ae41-ee1de9c77ec7" />


#### Mehr Effizienz geht wohl kaum, 14 Cores, 40 Server am laufen bei ca. 20 Watt Leistungsaufnahme

<img width="571" height="577" alt="image" src="https://github.com/user-attachments/assets/237cbfbb-a0b1-4f30-b626-6b6a6cf32f0e" />



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
Nach der Instalation von RAM und SSD

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
Package id 0:  +45.0°C  (high = +105.0°C, crit = +105.0°C)
Core 0:        +46.0°C  (high = +105.0°C, crit = +105.0°C)
Core 4:        +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 8:        +42.0°C  (high = +105.0°C, crit = +105.0°C)
Core 9:        +42.0°C  (high = +105.0°C, crit = +105.0°C)
Core 10:       +42.0°C  (high = +105.0°C, crit = +105.0°C)
Core 11:       +42.0°C  (high = +105.0°C, crit = +105.0°C)
Core 12:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 13:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 14:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 15:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 16:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 20:       +44.0°C  (high = +105.0°C, crit = +105.0°C)
Core 32:       +40.0°C  (high = +105.0°C, crit = +105.0°C)
Core 33:       +40.0°C  (high = +105.0°C, crit = +105.0°C)

ucsi_source_psy_USBC000:002-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

nvme-pci-0100
Adapter: PCI adapter
Composite:    +32.9°C  (low  = -273.1°C, high = +89.8°C)
                       (crit = +94.8°C)
Sensor 1:     +32.9°C  (low  = -273.1°C, high = +65261.8°C)
Sensor 2:     +32.9°C  (low  = -273.1°C, high = +65261.8°C)

acpi_fan-isa-0000
Adapter: ISA adapter
fan1:             N/A

asus-isa-000a
Adapter: ISA adapter
cpu_fan:     1700 RPM
pwm1:             N/A

ucsi_source_psy_USBC000:001-isa-0000
Adapter: ISA adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +40.0°C  
temp2:        +46.0°C  


```
```nano /usr/local/bin/cpu_temp_send_iobroker.sh```

```
#!/bin/bash

IPP="192.168.0.222:8087"

# ioBroker Datenpunkte
DP_CPU_PACKAGE="0_userdata.0.System.CPU_Package"
DP_CPU_MAX="0_userdata.0.System.CPU_CoreMax"
DP_CPU_AVG="0_userdata.0.System.CPU_CoreAvg"
DP_NVME="0_userdata.0.System.NVMe_Temp"
DP_BOARD="0_userdata.0.System.Board_Temp"

DP_SHUTDOWN="0_userdata.0.System.prxmxshutdown"

#############################################
# CPU Werte
#############################################

PACKAGE=$(sensors | awk '/Package id 0:/ {gsub(/\+|°C/,"",$4); print $4}')

CORES=$(sensors | awk '/Core [0-9]+:/ {gsub(/\+|°C/,"",$3); print $3}')

CORE_MAX=$(echo "$CORES" | awk 'BEGIN{max=0} {if($1>max) max=$1} END{print max}')
CORE_AVG=$(echo "$CORES" | awk '{sum+=$1; n++} END{if(n>0) printf "%.1f", sum/n}')

#############################################
# NVMe Temperatur
#############################################

NVME=$(sensors | awk '/Composite:/ {gsub(/\+|°C/,"",$2); print $2}')

#############################################
# Board / ACPI Temperatur
#############################################

BOARD=$(sensors | awk '/acpitz-acpi-0/ {found=1; next} found && /temp2:/ {gsub(/\+|°C/,"",$2); print $2; exit}')

#############################################
# Werte an ioBroker senden
#############################################

curl -s "http://${IPP}/set/${DP_CPU_PACKAGE}?value=${PACKAGE}" >/dev/null
curl -s "http://${IPP}/set/${DP_CPU_MAX}?value=${CORE_MAX}" >/dev/null
curl -s "http://${IPP}/set/${DP_CPU_AVG}?value=${CORE_AVG}" >/dev/null
curl -s "http://${IPP}/set/${DP_NVME}?value=${NVME}" >/dev/null
curl -s "http://${IPP}/set/${DP_BOARD}?value=${BOARD}" >/dev/null

#############################################
# Shutdown Check
#############################################

DPSD=$(curl -s "http://${IPP}/getPlainValue/${DP_SHUTDOWN}")

if [ "$DPSD" = "true" ]; then
    logger "ioBroker: Proxmox Shutdown ausgelöst"

    curl -s "http://${IPP}/set/${DP_SHUTDOWN}?value=false" >/dev/null

    sleep 60
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

### JSON zum Import der Datenpunkt Struktur in Iobroker 

```
{
  "0_userdata.0.System": {
    "type": "folder",
    "common": {
      "name": "System"
    },
    "native": {}
  },
  "0_userdata.0.System.CPU_Package": {
    "type": "state",
    "common": {
      "name": "CPU Package Temperature",
      "type": "number",
      "role": "value.temperature",
      "unit": "°C",
      "read": true,
      "write": true
    },
    "native": {}
  },
  "0_userdata.0.System.CPU_CoreMax": {
    "type": "state",
    "common": {
      "name": "CPU Core Max Temperature",
      "type": "number",
      "role": "value.temperature",
      "unit": "°C",
      "read": true,
      "write": true
    },
    "native": {}
  },
  "0_userdata.0.System.CPU_CoreAvg": {
    "type": "state",
    "common": {
      "name": "CPU Core Average Temperature",
      "type": "number",
      "role": "value.temperature",
      "unit": "°C",
      "read": true,
      "write": true
    },
    "native": {}
  },
  "0_userdata.0.System.NVMe_Temp": {
    "type": "state",
    "common": {
      "name": "NVMe Temperature",
      "type": "number",
      "role": "value.temperature",
      "unit": "°C",
      "read": true,
      "write": true
    },
    "native": {}
  },
  "0_userdata.0.System.Board_Temp": {
    "type": "state",
    "common": {
      "name": "Board / ACPI Temperature",
      "type": "number",
      "role": "value.temperature",
      "unit": "°C",
      "read": true,
      "write": true
    },
    "native": {}
  },
  "0_userdata.0.System.prxmxshutdown": {
    "type": "state",
    "common": {
      "name": "Proxmox Shutdown Trigger",
      "type": "boolean",
      "role": "switch",
      "read": true,
      "write": true
    },
    "native": {}
  }
}

```
### Fortführung des Projekts NAS im NUC

siehe:
[https://github.com/J-Paul0815/SmartHome/tree/main/Projects/NAS_im_NUC_mit_OMV](https://github.com/J-Paul0815/SmartHome/tree/main/Projects/NAS_im_NUC_mit_OMV)

Hierfür habe ich eine Western Digital 512GB NVMe M.2 2242 Festplatte geordert
Geplant ist diese Platte wieder in eine OpenmediaVault VM zu reinzureichen um hauptsächlich zum Datenaustausch NFS und Samba Freigaben NAS Funktionen zu haben.

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/b69fdea9-90a3-4282-96a5-4d79ecc23c5a" />

Eingebaut wurde die Platte erwartungsgemäss auch sofort im Bios erkannt und angezeigt.
Allerdings war die Ernüchterung groß, als fest stand, dass mit einegbauter 2. Platte kein LAN mehr funktioniert.
Grund ist, dass die NVMe-SSD PCIe-Lanes beansprucht , die der LAN-Controller braucht. Proxmox mit WLAN zu betreiben ist keine Option.
Also werkelt die Platte nun in einem UGREEN 40Gbbps M2 SSD Gehäuse, USB4, kompatibel mit Thunderbolt 4 bis zu 3848MB/s

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/803f5660-1cba-4e29-a0d0-b66e1c0cccf5" />


<img width="1313" height="884" alt="image" src="https://github.com/user-attachments/assets/2f05b22b-2649-4b13-9f7e-9077dc260349" />





<img width="992" height="362" alt="image" src="https://github.com/user-attachments/assets/4915c745-2ef6-4320-a352-402c5afd79fb" />

















