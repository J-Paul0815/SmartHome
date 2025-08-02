Stichpunkte zum Projekt Jellyfin LXC Container unter Proxmox
Unter Proxmox existiert bereits eine VM mit OpenMediaVault mit eingerichtetem Freigabe Ordner "Public" mit allen Rechten für Jedermann, da ich hier local allein bin.
Der Ordner "Public" hat Freigaben NFS (für Linux Maschinen und SMB (Windows)

Neu erstellung LXC Container auf Grundlage von Debian 12 Template, 2 Cores, 2048 GB RAM, IP DHCP, IP in der FritzBox gefixt, Haken bei "unprevelligiert" herausgenommen, unter Optionen NFS angehakt, gestartet.

```
apt update -y && apt upgrade -y
apt install curl
apt-get install nfs-common
nano /etc/fstab
```
```
# UNCONFIGURED FSTAB FOR BASE SYSTEM
192.168.0.50:/Public    /mnt/data nfs auto,rw,sync,hard,intr 0 0

```
```
reboot
```
Mounts mit Freigaben prüfen:
```
cd /mnt/data
ls -la
```
hier sollten die Freigaben mit dem Kontent (Filme) sichtbar sein:
```
total 84
drwxrwsrwx 10 root users  4096 Dec 16  2023 .
drwxr-xr-x  3 root root   4096 Jun  9 11:29 ..
drwxrwsrwx  8 root users  4096 Jul 30  2023 Musik
drwxrwsrwx 26 root users  4096 Jun  8 17:13 Video
drwxrwsrwx  2 root users  4096 Mar 23 16:59 Videos
drwxrwsrwx  2 root users 12288 Nov 24  2024 motioneye
drwxrwsrwx  2 root users  4096 Jun  8 17:09 nzb
drwxrwxrwx  9 root users  4096 Jan  5  2023 paperless
drwxrwsrwx  2 root users  4096 Dec 14  2022 pingvin
drwxrwxrwx  2 root users  4096 Jun  8 17:13 tmp
```
Installation Jellyfin:
```
cd /
16  curl https://repo.jellyfin.org/install-debuntu.sh | bash
```
Nach der Installation wird die URL angegeben unter der Jellyfin erreichbar ist (Beispiel):
```
http://192.168.0.149:8096
```
Beim ersten Aufruf wird der Installations Assistent aufgerufen, den man immer mit "Weiter" durcharbeitet.
Hier werden das Admin Passwort und die Freigabe Ordner abgefragt.
Lokal ist damit Jellyfin als Medien Server einsatzfähig.

![image](https://github.com/user-attachments/assets/54ad4bf3-132c-4db2-8fad-74dff27f99d8)

Sollten mehrere Benutzer Zugriff erhalten, so sind weitere Benutzer mit eigenen Rechten und Freigaben einzurichten.

Um auch von ausserhalb des HeimNetzes auf die Filme zugreifen sind noch einige Schritte nötig.

In meinem Fall wird bei Strato unter Domainverwaltung eine neue Subdomain eingerichtet und unter DNS, C-Name die Dyn-DNS Adresse (z.B. MyFritz Adresse) eingetragen und ein Punkt hinten angestellt:

![image](https://github.com/user-attachments/assets/2060938a-e6a8-44b5-bbb4-df3a1b08db05)

In der FritzBox sind die Ports 80 und 443 zu einem Ngnix Reserve Proxy witergeleitet, der für die Verteilung auf die lokalen Maschinen, Verschlüsselung und Zertifikate Verwaltung zuständig ist.
Hier wird ein neuer Host eingerichtet und SSL eingeschaltet:
![image](https://github.com/user-attachments/assets/64b01182-1118-4949-be4f-42fc5001537f)

![image](https://github.com/user-attachments/assets/94cf113f-8b9a-4259-9ab9-6d17dd6bd5a1)

Damit ist auch ein Zugriff von Ausserhalb des Heimnetzes ein Zugriff über die eingerichtete Sub.Domain.com möglich und zwar verschlüsselt mit gültigem Zertifikat:

![image](https://github.com/user-attachments/assets/c6ed9d77-b3dc-4460-b559-cfbae97f23e6)

Optional können aus den jeweiligen AppStores (Apple, Google) die entsprechenden Jellyfin Apps für Handys und Pads geladen werden.
Für den fireTV Stick kann die Installation direkt aus dem amazon Store angeschoben werden:
![image](https://github.com/user-attachments/assets/47276b23-130d-4104-988a-bb668f65899b)

![image](https://github.com/user-attachments/assets/194065ca-77a9-4e3b-b757-ce6c8693a278)
