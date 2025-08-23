## Helper Script to build Heating schedule Hex Downlinks

<img width="654" height="596" alt="image" src="https://github.com/user-attachments/assets/5a10c7f0-960e-4d79-a991-eae87ea284e9" />

<img width="997" height="694" alt="image" src="https://github.com/user-attachments/assets/146330c9-d0ac-4c67-a84f-66114ae72bf5" />



### Example
This Script helps to build the right command(s) for Heating schedule
In this example to show the command for have temperature Monday to Friday from 9am-5pm 21.5 degree and the rest of the time 18.0 degree

First Start Mo-Fr 9am 21.5 degree as event Index 0
<img width="1017" height="582" alt="image" src="https://github.com/user-attachments/assets/8fe70cb3-02cb-46ce-8513-c266e3bdf51b" />

Result is ```090000D71F``` for the schedule and
```00090000D71F``` include the event index 00 in front

Now create Start Mo-Fr 5pm 18.0 degree as event Index 1

<img width="987" height="687" alt="image" src="https://github.com/user-attachments/assets/9cdfea10-d5e5-4bf3-96bc-7625eb29453d" />

Result is ```170000B41F``` for the schedule and
```01170000B41F``` include the event index 01 in front


So the Complete Downlink Command is with ```59 – command code``` in front

```5900090000D71F5901170000B41F```

To get Get events 0–7 we Complete the DL Command with ```5A00```

```5900090000D71F5901170000B41F5A00```

Uplink (Answer)
```4400005a00090000d71f170000b41f00000000000000000000000000000000000000000000000000000000000052004b```

```
44 00 00 5A 00 
09 00 00 D7 1F = 09:00 / 00 D7 → 215 = 21.5 °C / 1F Mo-Fr
17 00 00 B4 1F = 17:00 / 00 B4 → 180 = 18.0 °C / 1F Mo-Fr
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
52 00 4B
```








