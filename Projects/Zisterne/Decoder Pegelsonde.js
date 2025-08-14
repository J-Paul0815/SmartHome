// MIT License (MIT)
// Copyright (c) 2024 Joerg Froehner hafenmeister.com
// It is not allowed to remove this entry
// It is not allowed to give away without permission
//
// Abfrage Client_ID 01, ModbusFunction (Read) 03 Start_Register 0007, Number of Register 2 Read 2 (= 4 Byte)
// 01 03 00 16 00 02 
// Response Payload Level Float32
// 0D33013FC6D7AC bei 155cm
// 0D33013F800000 bei 100cm
// Time Interval Einstellung: Messaging, Downlink, Port 1, replace Downlink, Bytes
// 3 Std = 01 00 2A 30
// 1 Std = 01 00 0E 10
// 20 Min = 01 00 04 B0
// 10 Min = 01 00 02 58
// 5 Min = 01 00 01 2C
// 1 Min = 01 00 00 3C
// andere Zeiten Sekunden in HEX umwandeln und hinter 01 00 hängen

// =============================================
// 🔧 PARAMETER – HIER EINTRAGEN UND ANPASSEN:
// =============================================

// Geometrie des liegenden Zylinders
const ZYLINDER_DURCHMESSER = 4.1;    // in Meter
const GESAMTE_LAENGE = 16.5;        // in Meter
const RUNDUNGS_LAENGE = 0.2;        // in Meter
// Maximale (tatsächliche) Füllhöhe in Meter (z. B. unterhalb Sensor montiert)
const MAX_FUELLHOEHE_M = 3.95;        // in Meter

// ================================================
// 🔽 Hilfsfunktionen (Berechnung des Füllvolumens)
// ================================================

function berechneVolumenLiegenderZylinderMitRundung(
  durchmesserM,
  gesamtLaengeM,
  rundungsLaengeM,
  fuellhoeheM
) {
  const r = durchmesserM / 2;  // Radius des Zylinders
  const zylinderLaenge = gesamtLaengeM - 2 * rundungsLaengeM;  // Länge des Zylindermittelteils
  const h = Math.max(0, Math.min(fuellhoeheM, 2 * r));  // Maximaler Wert: Die Füllhöhe kann maximal der Durchmesser sein

  // Berechnung der Fläche des Kreisabschnitts (Segment) bei gegebener Füllhöhe
  const theta = 2 * Math.acos((r - h) / r);
  const segmentFlaeche = 0.5 * r * r * (theta - Math.sin(theta));

  // Volumen des Zylindermittelteils (mit der Zylinderlänge multipliziert)
  const volumenZylinder = segmentFlaeche * zylinderLaenge;

  // Berechnung des Volumens der Rundungen (abgerundete Enden)
  const volumenRundungen = berechneVolumenRundungen(fuellhoeheM, rundungsLaengeM, r);

  // Gesamtvolumen (Zylindermittelteil + Rundungen)
  const volumenGesamt = volumenZylinder + volumenRundungen;

  return {volumenGesamt: volumenGesamt, volumenZylinder: volumenZylinder, volumenRundungen: volumenRundungen};
}

// Berechnung des Volumens der Rundungen
function berechneVolumenRundungen(fuellhoeheM, rundungsLaengeM, r) {
  const h = Math.max(0, Math.min(fuellhoeheM, 2 * r)); // gleiche Füllhöhe wie beim Zylinder
  const theta = 2 * Math.acos((r - h) / r);
  const segmentFlaeche = 0.5 * r * r * (theta - Math.sin(theta));

  const volumenProRundung = segmentFlaeche * rundungsLaengeM;
  return 2 * volumenProRundung; // beide Rundungen
}


// =============================================
// 🔽 Hilfsfunktionen (Float32 & Modbus Parser)
// =============================================

function toNumber_BE(bytes, len, signed) {
    var res = 0;
    var isNeg = false;
    if (len === 0) len = bytes.length;
    if (signed) isNeg = (bytes[0] & 0x80) !== 0;

    for (var i = 0; i < len ; i++) {
        if (i ===0 && isNeg) {
            res += bytes[i] & 0x7F;
            res -= 0x80;
        } else {
            res *= 256;
            res += bytes[i];
        }
    }
    return res;
}

function int32_BE(bytes, idx) {
    bytes = bytes.slice(idx || 0);
    return toNumber_BE(bytes, 4, true);
}

function float32(bytes, idx) {
    bytes = bytes.slice(idx || 0);
    bytes = int32_BE(bytes, 0)
    var sign = (bytes >> 31) === 0 ? 1 : -1;
    var exponent = ((bytes >> 23) & 0xFF) - 127;
    var significand = (bytes & ~(-1 << 23));

    if (exponent == 128) return null;
    if (exponent == -127) {
        if (significand === 0) return sign * 0.0;
        exponent = -126;
        significand /= (1 << 22);
    } else {
        significand = (significand | (1 << 23)) / (1 << 23);
    }

    return sign * significand * Math.pow(2, exponent);
}
function float32_BE(bytes, idx) { return float32(bytes, idx); }

// =============================================
// 🔽 Hauptdecoderfunktion
// =============================================

function decodeUplink(input) {
    var bytes = input.bytes;
    var fPort = input.fPort;

    if (fPort === 2) {
        const batteryVoltageLoRa = (bytes[0]<<8 | bytes[1]) / 1000;
        const level_int16 = (bytes[7]<<8 | bytes[8]);
        const level = float32_BE(bytes, 3) * 100;  // cm → float-Wert

        // Füllhöhe in Meter
        const h_m = Math.max(0, Math.min(level / 100.0, ZYLINDER_DURCHMESSER));
        const r = ZYLINDER_DURCHMESSER / 2;

        // Berechnung des maximalen und des aktuellen Füllvolumens
        const maxVolumeM3 = berechneVolumenLiegenderZylinderMitRundung(ZYLINDER_DURCHMESSER,GESAMTE_LAENGE,RUNDUNGS_LAENGE,MAX_FUELLHOEHE_M);
        const currentVolumeM3 = berechneVolumenLiegenderZylinderMitRundung(ZYLINDER_DURCHMESSER,GESAMTE_LAENGE,RUNDUNGS_LAENGE,h_m);
        
        // Prozent auf Basis maxVolumeM3 (bezogen auf definierte MAX_FUELLHOEHE_M)
        const percent = maxVolumeM3.volumenGesamt > 0 ? Math.round((currentVolumeM3.volumenGesamt / maxVolumeM3.volumenGesamt) * 1000) / 10 : 0;

        const utc = new Date().toUTCString();
        const device = "Dragino";

        // Umrechnung der Fixen Nachkommastellen
        const volumeM3 = Number(currentVolumeM3.volumenGesamt.toFixed(4));
        const volumeLiter = Number(volumeM3 * 1000).toFixed(1);
        const volumeZylinderM3 = Number(currentVolumeM3.volumenZylinder.toFixed(4));
        const volumeZylinderLiter = Number(volumeZylinderM3 * 1000).toFixed(1);
        const volumeRundungenM3 = Number(currentVolumeM3.volumenRundungen.toFixed(4));
        const volumeRundungenLiter = Number(volumeRundungenM3 * 1000).toFixed(1);
        
        return {
            data: {
                Device: device,
                Timestamp_UTC: utc,
                LoRa_Voltage: batteryVoltageLoRa,
                Level_cm_float32: Number(level.toFixed(1)),
                Level_int16: level_int16,
                Volume_m3: volumeM3,
                Volume_liter: volumeLiter,
                Volume_Zylinder_m3: volumeZylinderM3,
                Volume_Zylinder_liter: volumeZylinderLiter,
                Volume_Korrektur_Liter: volumeRundungenLiter,
                PPercent: Number(percent.toFixed(1))
            }
        };
    } else {
        return { data: {} };
    }
}
