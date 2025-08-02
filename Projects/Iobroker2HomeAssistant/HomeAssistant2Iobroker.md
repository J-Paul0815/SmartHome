#### Weg Beschreibung um Wert von Home Assistant zu Iobroker zu übertragen


- State in Iobroker anlegen, hier ein numerischer Wert, also vom Typ ```number``

<img width="870" height="442" alt="image" src="https://github.com/user-attachments/assets/195df65a-75c1-4bee-a4e7-49b94fccbb9f" />

- In Hoeassitstant eine neue Automatisation erstellen:

- Sobald sich der Zustand ändert

<img width="1075" height="308" alt="image" src="https://github.com/user-attachments/assets/7cf87ddc-47ef-49ac-bd70-af35b0e277a4" />


- Dann
Aktion hinzufügen, MQTT: Veröffentlichen

<img width="876" height="627" alt="image" src="https://github.com/user-attachments/assets/7fae146a-80a9-4c6f-b462-06cd3a527bfc" />

- Topic:
```homeassistant/esp/MiFlora/Feuchte```

- Payload
```{{ states('sensor.esphome_ble_xiaomi_flora_feuchtigkeit') | float | round(1) }}"```

- Retain einschalten

<img width="1088" height="750" alt="image" src="https://github.com/user-attachments/assets/91a1f20b-2ff0-4ca5-9394-c2b7c81119ce" />

- Speichern und dabei einen Namen vergeben

<img width="553" height="330" alt="image" src="https://github.com/user-attachments/assets/d7936fe1-589e-46b9-8daf-9a9c714dd72d" />


- Zurüch in Iobroker auf dem Zahnrad in der MQTT Instanz das Topic eintragen:

```homeassistant/esp/MiFlora/Feuchte```

- und abonnieren aktivieren:

<img width="1200" height="462" alt="image" src="https://github.com/user-attachments/assets/0b9c110e-2224-4914-a7e5-aee3f10e44de" />

- Schon werden die Daten von HA zu iobroker übertragen:

<img width="870" height="204" alt="image" src="https://github.com/user-attachments/assets/00199163-ffbf-45a5-9249-4ef2b2089300" />
















