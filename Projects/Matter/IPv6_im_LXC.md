### Matter erwartet IPv6 

Wenn nur intern IPv6 aktiviert werden soll:
Proxmox Host vorbereiten:


[https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1766146907083](https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1766146907083)


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

