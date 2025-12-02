### Projekt Double Bridge to Matter

#### Double Bridge? Welche 2 Brücken?
1. Die erste Brücke verbindet Iobroker mit HomeAssistant
2. Die zweite Brücke verbindet Homeassistant mit Matter
   

#### Double Bridge? Wozu?

die Double Bridge bringt Iobroker Geräte und States über Matter in die Matter kompatiblen Ökosysteme

- Apple HomeKit
- Amazon Alexa
- Google Home
- etc.

#### Double Bridge? Warum?

Einbindung von Geräten und States in die Sprachsysteme Siri, Alexa usw.

- Einfach
- ZukunftsSicher
- dauerhaft kostenfrei
  
#### Double Bridge? Was wird nicht mehr gebraucht?
- IoT Adapter
- IoT Assistenten Lizenz
- Yahka Adapter
- Matter Adapter (Bridge Funktion) um Geräte die sich im Matter Universum befinden auch in Iobroker nutzen zu können kann der Matter Adapter dafür (kostenfrei) genutzt werden
- Eine Nutzung von Matter Geräten in Iobroker ist aber auch ohne Matter Adapter möglich

#### Double Bridge? Was wird gebraucht?

##### Installation der beiden Bridges ist separat beschrieben, bitte den folgenden Links folgen (nacheinander)

1. [Link zur Installation der HomeAssistant Matterbridge](https://github.com/J-Paul0815/SmartHome/blob/main/Projects/DoubleBridge2Matter/HA2Matterbridge.md)

2. [Link zur Installation der Iobroker zu HomeAssistant Bridge](https://github.com/J-Paul0815/SmartHome/blob/main/Projects/DoubleBridge2Matter/Iobroker2HomeassistantBridge.md)

### Nachdem ! beides installiert ist, folgt die Verknüpfung

#### Nun können wir die MatterBridge mit einem ÖkoSystem verbinden
Hier am Beispiel von HomeKit, die Vorhensweise bei Alexa, GoogleHome ist aber immer gleich

In Matterbridge das Pairing einschalten

<img width="602" height="501" alt="image" src="https://github.com/user-attachments/assets/d674dc02-3944-4993-9afe-a500a0da060c" />

den angezeigten QR Code in HomeKit öffnen, oder
in HomeKit auf Bridge hinzufügen gehen und dann den QR Code scannen

<img width="254" height="346" alt="image" src="https://github.com/user-attachments/assets/d240172e-f3e0-4c9d-a94f-202891037de7" />


Die in der Matterbridge angelegten Geräte werden nun in das jeweilige öko-System (hier HomeKit) hinzugefügt.
Übrig bleibt nur die Zuweisung zu dem jeweiligem Raum


<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/143e9e34-9476-47a8-a619-efba7894cb80" />






