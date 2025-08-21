### Calculating the flow in liters per minute
#### Positive values ​​mean that the cistern is filling up, negative values ​​mean that it is emptying
#### The actual existing interval is used for the time, regardless of the setting and also regardless of whether an uplink has been lost

##### Since the liter values ​​for maximum filling and emptying are known, the time when the cistern will be full or empty can be determined.

Create new Javascript Blockly with any Name
Import waterFlow.xml

<img width="890" height="438" alt="image" src="https://github.com/user-attachments/assets/ee128559-92e1-4204-a343-015d79e8eaa8" />

Start, Ignore Error, Restart
Go To 0_User Directory Waterflow


Add your Source State to ```0_userdata.0.WaterFlow.Source_DP```

```lorawan.0.ApplicationID.devices.A84041XXXXXXX.uplink.decoded.Liter```

Restart the Script
After some Uplinks (min 2) you found the Flow in Liter/Min here:
0_userdata.0.WaterFlow.Waterflow

