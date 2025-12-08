### Nutzung der Double Bridge 
#### Nachdem ! Beide Bridges eingerichtet sind


Beispiel: Ziel soll sein einen WLED Streifen über Matter und HomeKit per Sprache steuern

"Siri, schalte Flurleiste ein"

"Siri, Flurleiste 20 Prozent"

"Siri, Flurleiste lila"


#### 1. Schritt in Iobroker

   (Smart) Name in WLED eintragen, so wie das Gerät später "genannt" werden soll
   In Spezial Gerät "Light" in der LoRaWAN Instanz die 3 (4) Datenpunkte die zur Steuerung nötig sind auswählen

   <img width="962" height="270" alt="image" src="https://github.com/user-attachments/assets/f69de41c-cb9c-4f23-91d8-568cb427527a" />

   Speichern, Schließen

#### 2. Schritt in HomeAssistant
   In HomeAssistant in Einstellungen, Geräte, MQTT, Flurleiste suchen
   Über die 3 Punkte das Label "matterbridge" aktivieren

   <img width="873" height="522" alt="image" src="https://github.com/user-attachments/assets/b8487ce6-debe-4437-af33-cbb391286c43" />

#### 3. Schritt in Matterbridge
   Matterbridge neu starten
   <img width="278" height="74" alt="image" src="https://github.com/user-attachments/assets/3483dbff-e631-446b-861a-41fe42c171c7" />

#### 4. Schritt in Siri (und/oder Alexa)
   In HomeKit die Raum Zuordnung vornehmen

   <img width="1042" height="895" alt="image" src="https://github.com/user-attachments/assets/fae288b3-1dd4-4ada-8204-766a401573a2" />


#### Fertig
- Das Gerät ist einsatzbereit, lässt sich über die App, oder Sprache steuern

  <img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/ec32a869-7861-43a6-bcbb-387f744cff1f" />

  <img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/8ee6cd68-7467-4e46-80f6-e0fab235fe4e" />

  




   


