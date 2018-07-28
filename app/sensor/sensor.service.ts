import { Injectable, ApplicationRef } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Http } from "@angular/http"
import { setInterval } from "tns-core-modules/timer"
import { map } from "rxjs/operators"

import { ISensor, Sensor, SensorType } from "./sensor";

import { JsonConvert } from "json2typescript"

import * as Toast from "nativescript-toast"

@Injectable()
export class SensorService {

    // TODO make this configurable
    // 10.0.2.2 is localhost on the machine running the Android emulator
    private readonly METEO_URL = "http://10.0.2.2:8000/meteo/current";

    sensors: ISensor[];

    private readonly converter: JsonConvert;

    constructor(private ref: ApplicationRef, private http: HttpClient) {

        this.converter = new JsonConvert();

        // Setup periodic data fetching from the server
        setInterval(() => {
            this.fetchSensorData();
        }, 10000);

        // Do initial fetch
        this.fetchSensorData();
    }

    fetchSensorData() {
        this.http.get(this.METEO_URL).subscribe(
            (response: any) => {
                this.updateSensorData(response);
            },
            (error: any) => {
                Toast.makeText("Failed to get current sensor data", "long").show();
                console.log("Failed to get sensor data from", this.METEO_URL);
                console.log(error);
            }
        );
    }

    updateSensorData(responseData: any) {
        console.log("Updating SensorService with new data.");

        // Deserialize, sanitize, and trigger redraw
        try {
            this.sensors = this.converter.deserialize(responseData, Sensor);

            this.ref.tick();

        } catch (ex) {
            Toast.makeText("Failed to parse data from server", "long").show();
            console.log("Error while deserializing server response!");
            console.log(ex);
        }
    }
}
