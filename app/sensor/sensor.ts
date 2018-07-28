import { JsonObject, JsonProperty, JsonConverter, JsonCustomConvert } from "json2typescript"

export enum SensorType {
    Pressure = "Pressure",
    Temperature = "Temperature",
    Humidity = "Humidity",
    LightLevel = "Light Level",
}

@JsonConverter
class SensorTypeConverter implements JsonCustomConvert<SensorType> {
    serialize(sensorType: SensorType): any {
        return <string>sensorType;
    }

    deserialize(sensorTypeStr: any): SensorType {
        switch (sensorTypeStr) {
            case SensorType.Pressure:
                return SensorType.Pressure;
            case SensorType.Temperature:
                return SensorType.Temperature;
            case SensorType.Humidity:
                return SensorType.Humidity;
            case SensorType.LightLevel:
                return SensorType.LightLevel;
            default:
                throw Error("Bad sensor type string: " + sensorTypeStr);
        }
    }
}

export interface ISensor {
    id: number;
    type: SensorType;
    lastVal: number;
}

@JsonObject
export class Sensor implements ISensor {
    @JsonProperty("id", Number)
    id: number = undefined;

    @JsonProperty("type", SensorTypeConverter)
    type: SensorType = undefined;

    @JsonProperty("lastVal", Number)
    lastVal: number = undefined;
}