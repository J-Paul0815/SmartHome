### Stichpunkte zum Projekt NAS (OpenMediaVault) im NUC (Proxmox)

Eine dauerhafte Möglichkeit Daten zu sammeln und zu teilen ist sehr nürzlich
In meinem Fall war im NUC auch noch der m.2 Steckplatz frei, da das Proxmox selbst auf einer 2,5 Zoll Samsung SSD 2TB werkelt.
Diese ist aufgeteilt in 40 GB für Proxmox Host (local), Rest local-lvm (PVE)

Konzept ist eine OMV VM zu installieren und dieser dann eine 500 GB WD m.2 SSD reinzureichen um diese einzig und exlusiv von OMV zu nutzen.


#### Installations Schritte:
#### OMV VM kreieren
- OMV ISO hinzufügen, in local, ISO Images, Download from URL:
-  ```https://sourceforge.net/projects/openmediavault/files/iso/8.0.7/openmediavault_8.0.7-amd64.iso```

  <img width="589" height="350" alt="image" src="https://github.com/user-attachments/assets/27f53686-0d21-4faa-b54f-e9555d7e6dc9" />

  - Query URL, Download

    <img width="1290" height="245" alt="image" src="https://github.com/user-attachments/assets/01cd7744-b109-4198-a4a1-8c261866bed1" />

- Damit eine VM kreieren, 2 Cores, 2GB RAM, 30 GB HDD, starten, über die Console durchs Menue geführt installieren, über die IP-Adresse Weboberfläche prüfen:
- Login ```User: admin Passwort openmediavault´´´ Passwort ändern, VM runterfahren


#### m.2 SSD einbauen
- Habe über einen m.2 zu SATA Adapter vorher die Platte gelöscht, über windows:
- ``` diskpart, list disk, (Zeigt alle Festplatten), select disk X (Ersetzen Sie X durch die Nummer Ihrer Festplatte, hier 1), clean, exit ```

- Proxmox runtergefahren, NUC stromlos gemacht, Platte verbaut, F2 ins BIOS, geschaut, ob sie erkannt wurde
- NUC gestartet Hinweis: Intel NUC Gen 8 unterstützt noch kein M.2 PCI-Passthrough, deswegen per disk
- Proxmox Console:
- ``` lsblk```
  
- ```lsblk: sdb                                  8:16   0 465.8G  0 disk ```

- Stabile ID finden:
- ```ls -l /dev/disk/by-id/ | grep sdb```

Antwort:

```lrwxrwxrwx 1 root root  9 Apr 12 12:26 ata-WDC_WDS500G2B0B_192651805346 -> ../../sdb```

ID kopieren, dann auf der PVE Console die Reinreichung vornehmen (hier OMV VM ID=905)

```qm set 905 -scsi1 /dev/disk/by-id/ata-WDC_WDS500G2B0B_192651805346```

- Ergebnis:

  <img width="866" height="395" alt="image" src="https://github.com/user-attachments/assets/b6bc6842-f6ac-47d2-9d40-a17de1ff9e25" />

  #### Backup für diese Platte abschalten (optional)

  <img width="737" height="423" alt="image" src="https://github.com/user-attachments/assets/46b2f969-989b-492f-8e39-81dc59e7018d" />

  #### Disk in OMV einrichten
  - OMV VM starten, einloggen
  - OMV WebUI → Storage > Disks → WD SSD (/dev/sdb/sdc) → Wipe → EXT4 → Mount → Shares

    <img width="1574" height="927" alt="image" src="https://github.com/user-attachments/assets/bb9423bf-b40e-4a4b-a140-189261b6809f" />

    <img width="1447" height="595" alt="image" src="https://github.com/user-attachments/assets/56755118-306f-4bdf-862e-f56c6942734d" />

    <img width="1572" height="610" alt="image" src="https://github.com/user-attachments/assets/c0977638-24cc-4b7f-b25e-872f5e4ea540" />

    <img width="833" height="492" alt="image" src="https://github.com/user-attachments/assets/599e96a1-afc4-4f5d-9d78-372c824e44ec" />

    





