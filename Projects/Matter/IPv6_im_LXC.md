### Matter erwartet IPv6 

Wenn nur intern IPv6 aktiviert werden soll:
Proxmox Host vorbereiten:


[https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1766146907083](https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1766146907083)
(Siehe unten)

Dann innerhalb des LXCs Einstellungen vornehmen:
Hintergrund ist:

[https://github.com/ioBroker/ioBroker.matter/wiki/Troubleshooting](https://github.com/ioBroker/ioBroker.matter/wiki/Troubleshooting)

Dieses Ergebnis muss erreicht werden:

```
sysctl -n net.ipv6.conf.eth0.forwarding
0
sysctl -n net.ipv6.conf.eth0.accept_ra
2
sysctl -n net.ipv6.conf.eth0.accept_ra_rt_info_max_plen
64
```

eth0 gegebenenfalls gegen den Namen der Netzwerkschnittstelle ersetzen, rausfinden mit:

```
ip a
```

Gibt es andere Ergebnisse:


```nano /etc/systemd/system/network-fix.service```

```
[Unit]
Description=IPv6 Network Fix
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'sysctl net.ipv6.conf.eth0.accept_ra=2 net.ipv6.conf.eth0.accept_ra_rt_info_max_plen=64 net.ipv6.conf.eth0.forwarding=0'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

```

```
systemctl daemon-reload
systemctl enable network-fix.service
reboot
```


### IPv6 Vorbereitungen im Proxmox Host

Beschreibung wie ich das nötige IPv6 für den Matter Adapter eingerichtet habe, ohne Aktivierung von IPv6 im Router.
Das hier beschriebene sollte mehr als Diskussionsgrundlage angesehen werden, als eine Anleitung.
Der im Matter Wiki beschriebene Weg ist der empfohlene und diese Beschreibung dient als Ergänzung dazu, wenn wie bei mir dieser Sonderfall eintritt, dass eine Aktivierung IPv6 im Router nicht machbar erscheint.
Allerdings funktioniert der beschriebene Weg bei mir.
Grund dafür war, dass ich doch einiges eingerichtet habe um von Außen auf mein Heimnetzwerk zuzugreifen und diese Funktionalität durch das Aktivieren von IPv6 verloren habe. Hier handelt es sich in erster Linie um Subdomains, die auf mein DynDNS auf meine Fritzbox zeigen. Die FB leitet die Ports 80 und 443 auf einen Nginix Proxy Manager, der dann je nach Subdomain die Verteilung an die jeweiligen Dienste vornimmt. Ein Beispiel von vielen: https://wiki.hafenmeister.com
Mit Sicherheit gäbe es Möglichkeiten dies auch Sattelfest auf IPv6 Tauglichkeit umzustellen, da ich dies aber vorerst nicht brauche, habe ich nach einer Möglichkeit gesucht IPv6 nur intern zu aktivieren und bin folgendermaßen vorgegangen:

In PVE die Shell starten:

<img width="708" height="586" alt="image" src="https://github.com/user-attachments/assets/edd6ddfb-b425-4a63-aa06-925b455f3cf2" />


```nano /etc/network/interfaces```
dort die Zeile hinzufügt:

```up ip -6 addr add fd00:1234:abcd::1/64 dev vmbr0```

<img width="827" height="479" alt="image" src="https://github.com/user-attachments/assets/e8e7c280-c8ad-4407-a6bb-9b5dd6d8043f" />


STRG-X, Speichern und schließen
Da ich mir den Neustart vom Proxmox Host sparen wollte, habe ich auf der Console ausgeführt:

```ip -6 addr add fd00:1234:abcd::1/64 dev vmbr0```
Nun die Installation von radvd:
```
apt update
apt install radvd
```
radvd Konfigutationsdatei anlegen:

```nano /etc/radvd.conf```

```
interface vmbr0
{
    AdvSendAdvert on;
    MaxRtrAdvInterval 30;
    prefix fd00:1234:abcd::/64
    {
        AdvOnLink on;
        AdvAutonomous on;
    };
};
``` 
STRG-x, Speichern
radvd aktivieren:

```
systemctl enable radvd
systemctl restart radvd
```

Damit ist die Einrichtung auf dem Proxmox Host beendet

Weiter zu den Einstellungen für den Iobroker LXC Container:
Für diesen Container wird nun bei den Netzwerk Einstellungen IPv6 SLACC aktiviert:

<img width="854" height="485" alt="image" src="https://github.com/user-attachments/assets/b5e92000-f74f-4489-ab86-59821e358803" />


Nach einem Neustart kann man das Ergebnis in der Console vom Iobroker kontrollieren.

```root@iobroker:~# ip -6 a
inet6 fd00:1234:abcd:0:c88e:8eff:fe1b:7e6c/64 scope global dynamic mngtmpaddr noprefixroute 
 ```

```
 
root@iobroker:~# ping6 fd00:1234:abcd::1
PING fd00:1234:abcd::1 (fd00:1234:abcd::1) 56 data bytes
64 bytes from fd00:1234:abcd::1: icmp_seq=1 ttl=64 time=0.045 ms
64 bytes from fd00:1234:abcd::1: icmp_seq=2 ttl=64 time=0.072 ms
64 bytes from fd00:1234:abcd::1: icmp_seq=3 ttl=64 time=0.053 ms
64 bytes from fd00:1234:abcd::1: icmp_seq=4 ttl=64 time=0.054 ms
^C
--- fd00:1234:abcd::1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3098ms
 ```

Im Router (FritzBox) bleibt IPv6 ausgeschaltet.
Einer erfolgreichen Installation vom Matter Adapter steht nun nichts mehr im Wege.
