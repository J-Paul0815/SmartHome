### Xiaomi Waage per BLE über ESPHome auslesen
An einem kreiertem Präsenssensor war noch "Platz" um nürzliche Zusatzaufgaben zu übernehmen
Eigentliche Aufgabe ist, eine Statusanzeige zu aktievieren, wenn jemand davor steht
Nebenbei wird über einen BME280 gleich die Luftfeuchte, Temperatur und Luftdruck abgeholt
Da der ESP32 auch Bluetooth kann kann er auch gleich vorhandene BLE Geräte mit einbinden.
Zum einen die Mi-Flora Sensor für die Hibiskus Pflanze und eben auch die Daten von einer Xiaomi Personenwaage
Die ESP Home Yaml Datei findet sich hier im Projekt 

Nun zur Waage:

[Liste der unterstützen Xiaomi Waagen](https://esphome.io/components/sensor/xiaomi_miscale.html#)

Hier eine Übersicht welche Daten ankommen:

<img width="322" height="832" alt="image" src="https://github.com/user-attachments/assets/6752ba26-c964-41ad-bc51-e0c3f749eff4" />

Damit hätte man bereits immer den aktuellen Wert des Gewichts von demjenigen, der sich gerade wiegt.

Ziel soll aber eine Erfassung und Speicherung des Gewichts pro Person sein:

<img width="512" height="195" alt="image" src="https://github.com/user-attachments/assets/12d428dc-ffef-4d0d-81d2-c189aa35eda9" />

In der Configuration.yaml wurde der Ordner /Templates bereit includiert

```
template: !include_dir_merge_list templates/
```
In dem Ordner /templates wurde eine neu Datei ```templates/mi_scale_person.yaml``` angelegt.
Den Inhalt findet man auch hier im Projekt

Wichtig ist dass die Quelle der Gewichtsdaten hier ```sensor.esphome_ble_xiaomi_mi_scale_gewicht``` exakt übereinstimmt.
Die Namen und kg Werte können natürlich angepasst und erweitert werden.

Sobald von der jeweiligen Person ein gültiges Gewicht gemessen wurde, 
Werden die Daten in separaten Entitäten abgelegt, die in Dashboard angezeigt werden können.

