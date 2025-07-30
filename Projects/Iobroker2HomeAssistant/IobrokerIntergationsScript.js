
// V 0.0.5 Benjamin Schmidt

/*
    In diesem Script, werden alle States, wessen Topic mit "iobroker/" (c´konfigurierbar) beginnt für Home Assistant sozusagen auto discovert.
    Es muss lediglich im jeweiligen State das Topic eingetragen und ausgewählt werden, ob nur gepublished oder auch subscribed werden soll.
    Das Topic ist folgendemaße aufzubauen:
    iobroker/Gerätenamen/Frei/Zur/Verfügung/Entitätsname
    Dabei sollte darauf geachtet werden, das keien Umlaute und kein ß verwendet wird.
*/

/*
        Beginn der DEFINITIONEN
*/

// State, welcher zur Hilfe der zu sendenden Discovery Topics dienst
const IdEntityGeneration = '0_userdata.0.Produktiv.Home_Assistant.MQTT_Config.Stateconfig';

// Clientinstanz des MQTT Clients
const Clientinstanz = 'mqtt-client.0';

// Zu verwedendes Starttopic
const Topicstart = 'iobroker/'

/*
    Hier werden die States eingetragen, die nicht beachtet werden sollen.
    Unter anderem Userdaten Home-Assistant und System States
    !!! Aber auch die Soll und Isttemperaturen, welche bspw. in den Klima Geräten verwendet werden.
*/

// Hier können Anfänge von Ids, oder auch ganze State Ids eingetragen weden, welche nicht verwendet werden dürfen.
const DisallowedStart = [   'system',
                            '0_userdata.0.HomeAssistant_Bridge.MQTT_Config'];
const StartId = '';
const SelectorOfObjects = $(`state[id=${StartId}*]`);


/*
            Ende der Hauptdefinitionen
*/

// Definition der Topicnamen für Climat Entitäten
const ClimateMode = 'TemperaturMode';
const ClimateSollwert = 'Solltemperatur';
const ClimateIstwert = 'Isttemperatur';

// Definition der speziellen Geräte (Bspw. CLimate)
const DeviceDefinitions = [];


DeviceDefinitions.push({Type:'climate',
                        Devicename: 'Vicki 001',
                        Entityname: 'Thermostat',
                        MinTemp: 6,
                        MaxTemp: 24,
                        Precision: 0.5,
                        Modes: ['auto', 'heat', 'off'],
                        AllowCreationOfEntityWithUsedTopics: true
                        }
                    );

/*
        Ende der DEFINITIONEN
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// Wenn der Sate noch nicht besteht, dann wird er erzeugt:
await createStateAsync(IdEntityGeneration,'',{"name": "Discovery","role": "state", "type": "json","read": true,"write": true,"custom": {[Clientinstanz]: {"enabled": true,"publish": true,"pubChangesOnly": false,"pubAsObject": false,"qos": false,"retain": true,"subscribe": false,"subChangesOnly": false,"subAsObject": false,"subQos": false,"setAck": false,"topic": ""}}});

// Dieses Array von Topics wird eventuell von den speziellen Geräten gefüllt,
// um die Topics nicht npochmal als normale Entitäten anzulegen.
const NotAllowedTopics = [];

await setDeviceDefinitions();

async function setDeviceDefinitions(){
    for(const DeviceDefinition of DeviceDefinitions){
        switch(DeviceDefinition.Type){
            case 'climate':
                await setCLimate(DeviceDefinition);
            break;
        }
        await sleep(100);
    }
}

// Erzeugen einer Climate Entität
async function setCLimate(DeviceDefinition){
  
    // Topic erstellen (Namen bereinigen)
    DeviceDefinition.Devicename = sanitizeForId(DeviceDefinition.Devicename);
    DeviceDefinition.Entityname = sanitizeForId(DeviceDefinition.Entityname);
    const UniquName = DeviceDefinition.Entityname? sanitizeForId(DeviceDefinition.Devicename.toLowerCase()) + '_' + sanitizeForId(DeviceDefinition.Entityname.toLowerCase()): sanitizeForId(DeviceDefinition.Devicename.toLowerCase());
    const Topic = `homeassistant/climate/${UniquName}/config`;

    // DiscoveryJSON aufbereiten
    const DiscoveryJSON = {
        "name": DeviceDefinition.Entityname,
        "unique_id": UniquName,
        "device": {
            "identifiers": [
            sanitizeForId(DeviceDefinition.Devicename.toLowerCase())
            ],
            "name": DeviceDefinition.Devicename
        },
        "mode_state_topic": `${Topicstart}${DeviceDefinition.Devicename}/${ClimateMode}`,
        "mode_command_topic": `${Topicstart}${DeviceDefinition.Devicename}/${ClimateMode}`,
        "temperature_state_topic": `${Topicstart}${DeviceDefinition.Devicename}/${ClimateSollwert}`,
        "temperature_command_topic": `${Topicstart}${DeviceDefinition.Devicename}/${ClimateSollwert}`,
        "current_temperature_topic": `${Topicstart}${DeviceDefinition.Devicename}/${ClimateIstwert}`,
        "min_temp": DeviceDefinition.MinTemp,
        "max_temp": DeviceDefinition.MaxTemp,
        "modes": DeviceDefinition.Modes,
        "precision": DeviceDefinition.Precision,
        "temp_step": DeviceDefinition.Precision
        };

    //objekt holen
    const ObjectOfGeneration = await getObjectAsync(IdEntityGeneration);
    
    // Zuerst Topic leer schreiben
    ObjectOfGeneration.common.custom[Clientinstanz].topic = '';
    await setObjectAsync(IdEntityGeneration,ObjectOfGeneration);
        
    await setStateAsync(IdEntityGeneration,JSON.stringify(DiscoveryJSON),true);
    ObjectOfGeneration.common.custom[Clientinstanz].topic = Topic;
    await setObjectAsync(IdEntityGeneration,ObjectOfGeneration);

    if(!DeviceDefinition.AllowCreationOfEntityWithUsedTopics){
        NotAllowedTopics.push(DiscoveryJSON.mode_state_topic);
        NotAllowedTopics.push(DiscoveryJSON.temperature_state_topic);
        NotAllowedTopics.push(DiscoveryJSON.current_temperature_topic);
    }
    log('Erzeugung einer Climate Entität:' +
        '\nTopic: ' + ObjectOfGeneration.common.custom[Clientinstanz].topic +
        '\nPayload: ' + JSON.stringify(DiscoveryJSON) +
        '\nModeTopic: ' + DiscoveryJSON.mode_state_topic +
        '\nSolltemperaturTopic: ' + DiscoveryJSON.temperature_state_topic +
        '\nIsttemperaturTopic: ' + DiscoveryJSON.current_temperature_topic);
}

await runToObjects();

async function runToObjects(){
    for(const id of SelectorOfObjects){
        // Nicht erlaubte Zeichen abfragen
        if (DisallowedStart.some(char => id.startsWith(char))) {
            continue;
        }
        //objekt holen
        const obj = await getObjectAsync(id);

        if(obj && obj.common && obj.common.custom && obj.common.custom[Clientinstanz] && obj.common.custom[Clientinstanz].enabled){
            // Logging und Abbruch, wenn weder publish, noch subscribe angewählt ist
            if(!obj.common.custom[Clientinstanz].publish && !obj.common.custom[Clientinstanz].subscribe){
                log('Client wurde aktiviert, aber weder publisch, noch subscribe gewählt:' +
                    '\nId: ' + obj._id,
                    'warn');
                continue;
            }
            let topic = obj.common.custom[Clientinstanz].topic;
            if(topic.indexOf(Topicstart) === 0){
                topic = topic.substring(9,topic.length);
                const uniqe = sanitizeForId(topic.toLowerCase(),true);
                const Statetopic = sanitizeForId(topic);
                let DeviceName = 'Dummygerät'
                if(topic.indexOf('/') !== -1){
                    DeviceName = topic.substring(0,topic.indexOf('/'));
                }
                DeviceName = sanitizeForId(DeviceName);
                const EntityName = topic.substring(topic.lastIndexOf('/') + 1, topic.length);
                // Generierungsobjekt lesen
                const ObjectOfGeneration = await getObjectAsync(IdEntityGeneration);
                
                let Topic = 'homeassistant/';
                const EntityType = getEntityType(obj.common);
                Topic += EntityType + '/';
                Topic += uniqe + '/'
                Topic += 'config';
                ObjectOfGeneration.common.custom[Clientinstanz].topic = '';
                // Zuerst Topic leer schreiben undanschließend auch state leer schreiben
                await setObjectAsync(IdEntityGeneration,ObjectOfGeneration);
                //await sleep(100);
                ObjectOfGeneration.common.custom[Clientinstanz].topic = sanitizeForId(Topic);

                // Abfrage, ob es sich um ein nicht erlautes Topic handelt
                if(NotAllowedTopics.includes(obj.common.custom[Clientinstanz].topic)){
                    continue;
                }

                const State = {
                    "name": EntityName,
                    "unique_id": uniqe,
                /*   "step": 0.5,*/
                    "device": {
                        "identifiers": [DeviceName.toLowerCase()],
                        "name": DeviceName
                    }
                }

                // Weiter Attribute zuweisen
               const MoreAttributes = getHaAttributesForType(obj.common,EntityType);
                for(const Attribute in MoreAttributes){
                    State[Attribute] = MoreAttributes[Attribute];
                }

                // Topics zuweisen
                if(!!obj.common?.custom?.[Clientinstanz]?.publish){
                    State["state_topic"] = Topicstart + Statetopic;
                }
                if(!!obj.common?.custom?.[Clientinstanz]?.subscribe){
                    State["command_topic"] = Topicstart + Statetopic;
                }

                // Discovery JSON Schreiben und topic setzen
                await setStateAsync(IdEntityGeneration,JSON.stringify(State),true);
                await setObjectAsync(IdEntityGeneration,ObjectOfGeneration);
                log('Erzeugung:' +
                    '\nTopic: ' + ObjectOfGeneration.common.custom[Clientinstanz].topic +
                    '\nPayload: ' + JSON.stringify(State) +
                    '\nStateTopic: ' + obj.common.custom[Clientinstanz].topic +
                    '\nId: ' + obj._id);
                if(obj.common.custom[Clientinstanz].topic !== sanitizeForId(obj.common.custom[Clientinstanz].topic)){
                    log('Die originaltopic entspricht nicht den zuelassenen Zeichen und wurde so an HomeAssistant gesendet:\n' +
                        State.state_topic,
                        'warn');
                }
                await sleep(100);
                //await sleep(100);
            }
        }
    }
};


// Entität type holen
function getEntityType(common) {
    const isWritable = !!common?.custom?.[Clientinstanz]?.subscribe;
    const type = common?.type || '';
    const role = (common?.role || '').toLowerCase();

    switch (type) {
        case 'boolean':
            if (role.includes('button') || role.includes('action')) {
                return 'button'; // Trigger-only
            } else if (role.includes('switch')) {
                return isWritable ? 'switch' : 'binary_sensor';
            } else {
                return isWritable ? 'switch' : 'binary_sensor';
            }

        case 'number':
        //    if (role.includes('valve')) return 'valve';
            if (role.includes('value')) return 'sensor';
            return isWritable ? 'number' : 'sensor';

        case 'string':
            return isWritable ? 'text' : 'sensor';

        case 'mixed':
        case 'array':
        case 'object':
        case 'file':
            return 'sensor';

        default:
            return 'sensor';
    }
}

// Device_class und state_class holen
function getHaAttributesForType(common, entityType) {
    const role = (common?.role || '').toLowerCase();
    const unit = common?.unit || '';
    const type = common?.type || '';
    const attributes = {};

    if (entityType === 'sensor' || entityType === 'number') {
        if (role.includes('temperature')) {
            attributes.device_class = 'temperature';
            attributes.unit_of_measurement = unit || '°C';
        } else if (role.includes('humidity')) {
            attributes.device_class = 'humidity';
            attributes.unit_of_measurement = unit || '%';
        } else if (role.includes('illuminance') || role.includes('brightness')) {
            attributes.device_class = 'illuminance';
            attributes.unit_of_measurement = 'lx';//unit || 'lx';
        } else if (role.includes('battery')) {
            attributes.device_class = 'battery';
            attributes.unit_of_measurement = unit || '%';
        } else if (role.includes('power')) {
            attributes.device_class = 'power';
            attributes.unit_of_measurement = unit || 'W';
        } else if (role.includes('energy')) {
            attributes.device_class = 'energy';
            attributes.state_class = 'total_increasing';
            attributes.unit_of_measurement = unit || 'Wh';
        } else {
            attributes.unit_of_measurement = unit || '';
        }

        // Min und Max zuweisen
        if(common.min){
            attributes.min = common.min;
        }
        if(common.max){
            attributes.max = common.max;
        }

        // String ist kein Measurement
        if(!attributes.state_class && type !== 'string'){
            attributes.state_class = 'measurement';
        }
    }

    if (entityType === 'valve') {
        attributes.unit_of_measurement = unit || '%';
    }

    if(entityType === 'switch'){
        attributes.state_on = 'true';
        attributes.state_off = 'false';
        attributes.payload_on = "true";
        attributes.payload_off = "false";
    }
    if(entityType === 'button'){
        attributes.state_on = 'true';
        attributes.state_off = 'false';
        attributes.payload_on = "true";
        attributes.payload_off = "false";
    }
    if (entityType === 'binary_sensor') {
        if (role.includes('motion')) attributes.device_class = 'motion';
        else if (role.includes('window') || role.includes('door')) attributes.device_class = 'door';
        else if (role.includes('smoke')) attributes.device_class = 'smoke';
        else if (role.includes('presence')) attributes.device_class = 'presence';
        else if (role.includes('moisture') || role.includes('leak')) attributes.device_class = 'moisture';
        attributes.state_on = 'true';
        attributes.state_off = 'false';
        attributes.payload_on = "true";
        attributes.payload_off = "false";
    }

    return attributes;
}

// Nicht erlaube Zeichen bereinigen
function sanitizeForId(str, withoutSlash = false) {
    return str
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/Ä/g, 'Ae')
        .replace(/Ö/g, 'Oe')
        .replace(/Ü/g, 'Ue')
        .replace(/ß/g, 'ss')
        .replace(/ /g, '_')
        .replace(/\//g, withoutSlash ? '_' : '/');
}
