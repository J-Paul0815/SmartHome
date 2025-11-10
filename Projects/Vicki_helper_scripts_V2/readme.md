Nachtrag 10.11.25

Aufgrund der Begrenzung auf 51 Byte bei den Uplinks wurde das SET, zum setzen in 3 Teile aufgeteilt
- Setzen Heizpläne 1-4
- Setzen Heizpläne 5-8
- Setzen Heizperdiode Anfangsdatum und Enddatum

- Das (neue) Get Modul beinhaltet alles, HP 1-8 und Heizperiode
  
### Heizpläe und Heizperiode setzen
#### Von iobroker und HomeAssistand aus

##### Funktionsweise
- Das, oder die Vickis sind in einem LNS angemeldet, also entweder TTN, oder besser Chirpstack
- Mindestens FW 4.6
- Iobroker Installation mit dem LoRaWAN Adapter incl. Eingeichteter Bridge zu HomeAssistant

##### Vorgehensweise
- Blockly Script importieren, als einzige Einstellung ist (zur Zeit noch) die Instanz Nummer im Script anzupassen (jetzt LoRaWAN.1)
- Das importierte Script starten und gleich noch einmal restarten

<img width="1038" height="427" alt="image" src="https://github.com/user-attachments/assets/15ed7ca0-9974-4078-ad27-9b50ba47d47b" />


- Im 0_User Ordner werden nun die nötigen DP angelegt

 <img width="1132" height="754" alt="image" src="https://github.com/user-attachments/assets/8df76ac9-6b3d-47d4-96f9-249ab84437df" />

 ##### Benutzung in Iobroker
 - Sämliche Einstellungen zu den Heizplänen und Anfang/Ende der Heizperiode werden vorgenommen
 - mit dem Betätigen von Datenpunkt "Send" wird der erzeugte Hex für den Downlink in "StateCustomSend" geschrieben
 - Dieser könnte nun manuell im LNS,  oder LoRaWAN Adapter übergeben werden
 - Ein automatischen Absetzen des DL ist möglich wenn im DP "DevEUI" die DevEUI vom Vicki eingetragen ist UND
 - 0_userdata.0.Vicki.HeatingPlan.Downlink_Active "true" ist

##### Benutzung in HomeAssistant
- Die über die Bridge Funktion übertragenen States könnten könnten genauso wie in Iobroker genutzt werden
- Die hier im Projekt zum Import hinterlegten YAML Dateien ermöglichen die Nutzung bequem über ein Swipe Karten
- Eine Swipe Karte (Set) ist zum setzen der Einstellungen
- Karte (Get) zeigt (nach den nächsten (max 2) Uplinks das Ergebnis der Einstellungen, so wie sie im Vicki dann aktiv sind
- Entitäten gegebenenfalls anpassen

Platzhalter für ein YT Video, welches die Funktionsweise zeigt, allerdings erst nach Freigabe der FW 4.6 durch MClimate

<img width="1388" height="789" alt="image" src="https://github.com/user-attachments/assets/45ce9c43-38df-4f1a-8ab8-3dd0555d3cf0" />

NEU
<img width="1654" height="930" alt="image" src="https://github.com/user-attachments/assets/d3b0b7d4-6148-456e-9f5f-26b71e505b7b" />




<img width="1398" height="634" alt="image" src="https://github.com/user-attachments/assets/419fb68a-02ab-42cd-8c79-e6a847a4a827" />

<img width="1390" height="900" alt="image" src="https://github.com/user-attachments/assets/25f193b7-743f-4d6e-9686-5548c78fdb8e" />





