#### Media Steuerung des Home Pod Mini Elementar Play und Stop (Pause)

Lautstärke Änderung wird nicht unterstützt

In der ```configuration.yaml``` mus das Light Template aktiviert werden:


```light: !include templates/media_player_template.yaml```



In /Templates dann folgende Datei ```media_player_template.yaml```


```
- platform: template
  lights:
    homepod_steuerung:
      friendly_name: HomePod Mini
      value_template: >
        {{ is_state('media_player.wohnzimmer', 'playing') }}
      turn_on:
        service: media_player.media_play
        target:
          entity_id: media_player.wohnzimmer
      turn_off:
        service: media_player.media_pause
        target:
          entity_id: media_player.wohnzimmer
      icon_template: >
        {% if is_state('media_player.wohnzimmer', 'playing') %}
          mdi:speaker-play
        {% else %}
          mdi:speaker-off
        {% endif %}

```


Die erstellt einen Schalter mit dem man Starten und stoppen kann


<img width="635" height="618" alt="image" src="https://github.com/user-attachments/assets/45f268d6-8c55-4b53-8fa4-dcde9141a406" />


<img width="1056" height="445" alt="image" src="https://github.com/user-attachments/assets/02944e7b-9782-4544-a4d0-7c211f017bf9" />





