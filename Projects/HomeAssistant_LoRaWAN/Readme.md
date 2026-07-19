## LoRaWAN Integration in HomeAssistant over HACS

Was lange währt wird endlich gut.

(Good things come to those who wait)

Special thanks to Benjamin Schmidt. 

Here is the link to the project page:

[https://github.com/BenAhrdt/home-assistant-lorawan](https://github.com/BenAhrdt/home-assistant-lorawan)



### Prerequisites:
- Installed Home Assistant
- with HACS set up
- with MQTT set up

### Integration Install

- Go to HACS
- klick the 3 dots in upper right corner
- go to Custom Repositories

<img width="1091" height="701" alt="image" src="https://github.com/user-attachments/assets/41bd1a65-dc31-4254-9804-ba322f350650" />


- Typ "Integration
- Add ```https://github.com/BenAhrdt/home-assistant-lorawan```

<img width="755" height="521" alt="image" src="https://github.com/user-attachments/assets/531875c4-8001-4494-8364-34fbb1a05fdc" />


- Search for LoRaWAN
- klick the 3 Dots on right side
- Download

<img width="868" height="723" alt="image" src="https://github.com/user-attachments/assets/37639ce6-e7c4-46ee-a700-287c3b6a1295" />

- Go Settings
- Integration
- Add Integration (lower right corner)
- search for LoRaWAN
- Click the right arrow @ LoRaWAN


<img width="1087" height="888" alt="image" src="https://github.com/user-attachments/assets/413df56b-f024-4878-abcc-d1ceae2f2691" />

#### Complete the data (example: TTN)

<img width="593" height="871" alt="image" src="https://github.com/user-attachments/assets/6f91c106-703f-4415-8525-9a2260523d83" />

Found in your TTN Account:


<img width="1084" height="822" alt="image" src="https://github.com/user-attachments/assets/005ab914-03ca-4398-b739-b25ab382db60" />

#### Complete the data (example: Chirpstack as HACS Installation in HA)

<img width="642" height="879" alt="image" src="https://github.com/user-attachments/assets/9bf248e7-2feb-4e23-8e84-bc865be01834" />

In this example, ChirpStack is set up as a HACS integration. A non-admin user is used for the MQTT broker configured in Home Assistant. See:

``` https://github.com/databang-io/chirpstack-ha-addon ```

### Result:

<img width="1065" height="890" alt="image" src="https://github.com/user-attachments/assets/64951415-34ea-46dc-ba1c-d9b7b4a5e9c1" />

#### Custom Setting for Climate devices

<img width="840" height="824" alt="image" src="https://github.com/user-attachments/assets/e4728ead-c3e8-4109-85cf-db87b0a99294" />


<img width="575" height="613" alt="image" src="https://github.com/user-attachments/assets/7be9796b-1bc8-4ced-a400-5919ac5e9c4a" />

### Result:

<img width="852" height="872" alt="image" src="https://github.com/user-attachments/assets/437a9e75-ffba-4e98-8b85-ad1f72fd8f34" />

### Example 2 (MClimate PIR MIni)

- Go to Configutation (after the first uplink) and add ```MC-PIR-MINI```

<img width="595" height="868" alt="image" src="https://github.com/user-attachments/assets/a948ce8d-9113-44c9-b0ea-52af9217d02a" />

Downlink Configutation comes up:

<img width="1113" height="698" alt="image" src="https://github.com/user-attachments/assets/196faa36-8d20-445e-9c83-7b55feb1f2f1" />


- 







