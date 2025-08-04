### Richtige Einstellungen vornehmen um Energy Daten richtig darstellen zu können

- Beispiel:
  Energy Daten die per MQTT von Tasmota Geräten aus dem Sonoff Verzeichnis zu HA übertragen werden
  1. Rolle im State vom Datenpunkt EENERGY_Total korrigieren von ```"role": "value.power.consumption"```zu ```"role": "value.energy.consumption"```
  2. Datenpunkt per MQTT zum HA übertragen
  3. Dort werden die Daten als Meassurment angelegt, dies muss (Customized) geändert werden
 
  4. Eintrag hinzufügen im ```configuration.yaml```
     ```
     homeassistant:
       customize: !include customize.yaml

     ```

  6. Anlegen vom ```customize.yaml```
     ```
     sensor.kaffeemaschine_energie_total:
       device_class: energy
       state_class: total_increasing
       unit_of_measurement: "kWh"
       last_reset: "1970-01-01T00:00:00+00:00"

     sensor.computer_energie_total:
       device_class: energy
       state_class: total_increasing
       unit_of_measurement: "kWh"
       last_reset: "1970-01-01T00:00:00+00:00"

     ```
      Im Entwickler Tab YAML Prüfen, HA neu starten (schnell)
        
     
