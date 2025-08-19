Prepair Proxmox System with IPv6

[https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1755592984441](https://forum.iobroker.net/topic/81020/ipv6-f%C3%BCr-matter-einrichten-ohne-aktivierung-ipv6-im-router?_=1755592984441)

Create LXC Container, Debian 12, 2 GB RAM, 8GB HDD, IP4 DHCP, IP6 SLAAC



```
    apt update && apt upgrade -y
    apt install curl sudo -y
    adduser hafenmeister
    usermod -aG sudo hafenmeister
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
    apt-get install nsolid -y
    node -v
    npm -v

    root@matterbridge:~# node -v
    v22.17.1
    root@matterbridge:~# npm -v
    10.9.2

    su hafenmeister
    sudo date


      sudo npm install -g matterbridge --omit=dev
      sudo npm install -g npm@11.5.2
      sudo nano /etc/systemd/system/matterbridge.service

```

```
[Unit]
Description=Matterbridge Service
After=network.target

[Service]
ExecStart=/usr/bin/matterbridge -bridge
Restart=on-failure
User=root
WorkingDirectory=/root
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=matterbridge

[Install]
WantedBy=multi-user.target

```
```
 sudo systemctl daemon-reload
 sudo systemctl enable matterbridge.service
 sudo systemctl start matterbridge.service
 sudo systemctl status matterbridge.service

```


```
hafenmeister@matterbridge:/root$ sudo systemctl status matterbridge.service
* matterbridge.service - Matterbridge Service
     Loaded: loaded (/etc/systemd/system/matterbridge.service; enabled; preset: enabled)
     Active: active (running) since Tue 2025-08-19 08:36:56 UTC; 18s ago
   Main PID: 10829 (matterbridge)
      Tasks: 12 (limit: 38299)
     Memory: 106.1M
        CPU: 7.632s
     CGroup: /system.slice/matterbridge.service
             `-10829 matterbridge

Aug 19 08:37:07 matterbridge matterbridge[10829]:   <E2><96><88><E2><A0><80><E2><96><88><E2><A0><80><E2><A0><80><E2><A0><80><E2><96><88><E2><A0><80><E2><96><88>
Aug 19 08:37:07 matterbridge matterbridge[10829]:   <E2><96><88><E2><A0><80><E2><96><88><E2><96><84><E2><96><84><E2><96><84><E2><96><88><E2><A0><80><E2><96><88>
Aug 19 08:37:07 matterbridge matterbridge[10829]:   <E2><96><88><E2><96><84><E2><96><84><E2><96><84><E2><96><84><E2><96><84><E2><96><84><E2><96><84><E2><96><88>
Aug 19 08:37:07 matterbridge matterbridge[10829]:   <E2><96><80><E2><96><80><E2><96><80><E2><96><80><E2><96><80><E2><96><80><E2><96><80><E2><96><80><E2><96><80>
Aug 19 08:37:07 matterbridge matterbridge[10829]:   QR code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=MT:Y.K90SO5275LR90XZ00
Aug 19 08:37:07 matterbridge matterbridge[10829]: [5B blob data]
Aug 19 08:37:07 matterbridge matterbridge[10829]: [71B blob data]
Aug 19 08:37:07 matterbridge matterbridge[10829]: [105B blob data]
Aug 19 08:37:07 matterbridge matterbridge[10829]: [132B blob data]
Aug 19 08:37:07 matterbridge matterbridge[10829]: [65B blob data]

```
```
hafenmeister@matterbridge:/root$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: eth0@if239: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether bc:24:11:ea:15:db brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 192.168.0.82/24
```
```
http://192.168.0.82:8283/
```
```
hafenmeister@matterbridge:/root$ matterbridge -bridge
[08:48:30.469] [Matterbridge] Created Matterbridge Directory: /home/hafenmeister/.matterbridge
[08:48:30.473] [Matterbridge] Created Matterbridge Frontend Certificate Directory: /home/hafenmeister/.matterbridge/certs
[08:48:30.475] [Matterbridge] Created Matterbridge Frontend Uploads Directory: /home/hafenmeister/.matterbridge/uploads
[08:48:30.480] [Matterbridge] Created Matterbridge Plugin Directory: /home/hafenmeister/Matterbridge
[08:48:30.481] [Matterbridge] Created Matterbridge Matter Certificate Directory: /home/hafenmeister/.mattercert
[08:48:30.514] [Matterbridge] Matterbridge is starting...
[08:48:31.019] [Matterbridge] Matterbridge version 3.2.2 mode bridge running on Linux (v.6.8.12-13-pve) platform linux arch x64
[08:48:31.022] [Matterbridge] Starting matter node storage...
[08:48:31.023] [Matterbridge] Matter node storage service created: /home/hafenmeister/.matterbridge/matterstorage
[08:48:31.026] [Matterbridge] Matter node storage manager "Matterbridge" created
[08:48:31.027] [Matterbridge] Creating server node storage context "Matterbridge.persist" for Matterbridge...
[08:48:31.128] [Matterbridge] Matter node storage started
[08:48:31.129] [Matterbridge] Creating matter node storage backup...
[08:48:31.139] [Matterbridge] Created matter node storage backup
[08:48:31.168] [Frontend] Frontend http server error listening on 8283
[08:48:31.168] [Frontend] Port 8283 is already in use
[08:48:31.170] [Frontend] WebSocketServer error: undefined
[08:48:31.172] [Matterbridge] Creating server node for Matterbridge on port 5540 with passcode 13006062 and discriminator 139...
[08:48:31.220] [ServerNodeStore] Opened Matterbridge storage at /home/hafenmeister/.matterbridge/matterstorage/Matterbridge
[08:48:31.742] [BaseEventStore] Initialized new volatile event store
[08:48:31.813] [Endpoint] Matterbridge ready endpoint#: 0 type: RootNode (0x16) behaviors: 💤parts ✓index ✓basicInformation ✓accessControl ✓groupKeyManagement ✓generalCommissioning ✓administratorCommissioning ✓operationalCredentials ✓generalDiagnostics ✓commissioning ✓network 💤productDescription 💤subscription 💤sessions ✓events 💤controller ✓descriptor
[08:48:31.820] [Matterbridge] Created server node for Matterbridge
[08:48:31.823] [Matterbridge] Creating Matterbridge aggregator...
[08:48:31.825] [Matterbridge] Created Matterbridge aggregator
[08:48:31.851] [Endpoint] Matterbridge.Matterbridge ready endpoint#: 1 type: Aggregator (0xe) behaviors: 💤parts ✓index ✓descriptor
[08:48:31.852] [Matterbridge] Creating virtual devices for Matterbridge server node...
[08:48:31.993] [Endpoint] Matterbridge.Matterbridge.RestartMatterbridge:outlet ready endpoint#: 2 type: OnOffPlugInUnit (0x10a) behaviors: ✓identify ✓groups ✓onOff ✓bridgedDeviceBasicInformation ✓descriptor
[08:48:32.063] [Endpoint] Matterbridge.Matterbridge.UpdateMatterbridge:outlet ready endpoint#: 3 type: OnOffPlugInUnit (0x10a) behaviors: ✓identify ✓groups ✓onOff ✓bridgedDeviceBasicInformation ✓descriptor
[08:48:33.069] [Matterbridge] Starting Matterbridge server node
[08:48:33.070] [Matterbridge] Matterbridge bridge started successfully
[08:48:33.070] [Node] Matterbridge going online
[08:48:33.165] [Node] Matterbridge is online
[08:48:33.201] [Commissioning] Matterbridge is uncommissioned passcode: 13006062 discriminator: 139 manual pairing code: 01355007935
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  █⠀▄▄▄▄▄⠀██▀▄▀▄█⠀▄▄▄▄▄⠀█
  █⠀█⠀⠀⠀█⠀█▄▀▄▀▄█⠀█⠀⠀⠀█⠀█
  █⠀█▄▄▄█⠀██⠀▀▀▄█⠀█▄▄▄█⠀█
  █▄▄▄▄▄▄▄█⠀█⠀▀▄█▄▄▄▄▄▄▄█
  █▄⠀▄▀⠀▄▄⠀⠀█▄▄⠀⠀⠀█▀█⠀█▀█
  ██▄█⠀▄▀▄⠀▄▄████▄█⠀⠀▀█▀█
  █▄██▄██▄█▄⠀▀⠀▄▀█⠀▄▄▀▄▀█
  █⠀▄▄▄▄▄⠀█⠀▀▄█▄▀▀▀⠀▄⠀█⠀█
  █⠀█⠀⠀⠀█⠀█▄█▀⠀⠀▀⠀⠀▀▄⠀▀██
  █⠀█▄▄▄█⠀█⠀▄██▄██▀█⠀⠀▀⠀█
  █▄▄▄▄▄▄▄█▄█▄▄▄██▄██▄█▄█
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  QR code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=MT:Y.K90YDA13RRBD7GA00
  
[08:48:33.202] [Matterbridge] Server node for Matterbridge is online
[08:48:33.202] [Matterbridge] Server node for Matterbridge is not commissioned. Pair to commission ...
[08:48:33.204] [Matterbridge] QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=MT:Y.K90YDA13RRBD7GA00
[08:48:33.204] [Matterbridge] Manual pairing code: 01355007935
[08:49:33.073] [Matterbridge] Setting reachability to true for Matterbridge
```
<img width="1910" height="981" alt="image" src="https://github.com/user-attachments/assets/385df901-d7b5-4198-97fe-c8e07e8f999e" />
