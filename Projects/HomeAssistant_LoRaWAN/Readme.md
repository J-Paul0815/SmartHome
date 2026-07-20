## LoRaWAN Integration in HomeAssistant over HACS

Was lange währt wird endlich gut.

(Good things come to those who wait)

Special thanks to Benjamin Schmidt. 

Here is the link to the project page:

[https://github.com/BenAhrdt/home-assistant-lorawan](https://github.com/BenAhrdt/home-assistant-lorawan)



### Prerequisites:
- Installed Home Assistant
- with HACS set up
- with MQTT set up (only if use of Chirpstack as HA (intern) Integration)

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


### Use Downlinks
there are ready to use Downlink Configurations (ZeroTouch)

#### Example Dragino LT-22222
see at Downlink Section:

<img width="928" height="867" alt="image" src="https://github.com/user-attachments/assets/853cb923-a0b2-4473-89f7-60c4eff89910" />


If the device type and its downlink configuration are already stored in the decoder, it is automatically detected and entered under the "Device Type" configuration (ZeroTouch). 

Recommended: 
Use the decoders adapted by us, available here:

[https://github.com/BenAhrdt/LoRaWANDeviceProfiles/tree/main/DeviceProfiles](https://github.com/BenAhrdt/LoRaWANDeviceProfiles/tree/main/DeviceProfiles)

Otherwise, it can also be entered manually:

<img width="407" height="211" alt="image" src="https://github.com/user-attachments/assets/786f7238-7dbf-4d13-bf89-509ae6b73696" />



<img width="383" height="889" alt="image" src="https://github.com/user-attachments/assets/013420b0-5a2a-478f-a6b7-4b9fe88a6ebc" />

In the process, the defined controls are created and can be used immediately.

Examples:
Switch on Relay 1

<img width="359" height="383" alt="image" src="https://github.com/user-attachments/assets/c369b219-e05e-4f4e-949c-50cc74a2687c" />


Switch on Relay 2 for 25 seconds, then switch off:

<img width="375" height="397" alt="image" src="https://github.com/user-attachments/assets/b7a7bf58-ffff-494c-9f59-fbc04d3dae3d" />



















