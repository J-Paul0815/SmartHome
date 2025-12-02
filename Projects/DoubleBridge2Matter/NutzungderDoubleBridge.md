### Nutzung der Double Bridge 
#### Nachdem ! Beide Bridges eingerichtet sind


Beispiel: Ziel soll sein einen WLED Streifen über Matter und HomeKit per Sprache steuern
"Siri, schalte Flurleiste ein"
"Siri, Flurleist 20 Prozent"
"Siri, Flurleiste lila"


1. Schritt
   (Smart) Name in WLED eintragen, so wie das Gerät später "genannt" werden soll
   In Spezial Gerät "Light" in der LoRaWAN Instanz die 3 (4) Datenpunkte die zur Steuerung nötig sind auswählen

   <img width="962" height="270" alt="image" src="https://github.com/user-attachments/assets/f69de41c-cb9c-4f23-91d8-568cb427527a" />

   Speichern, Schließen

3. Schritt
   In HomeAssistant in Einstellungen, Geräte, MQTT, Flurleiste suchen
   Über die 3 Punkte das Label "matterbridge" aktivieren

   <img width="873" height="522" alt="image" src="https://github.com/user-attachments/assets/b8487ce6-debe-4437-af33-cbb391286c43" />

4. Schritt
   Matterbridge neu starten
   


