import { Component } from "@angular/core";

import { SensorService } from "./sensor.service";

@Component({
    selector: "ns-sensors",
    moduleId: module.id,
    templateUrl: "./sensor-list.component.html",
})
export class SensorListComponent {
    constructor(private sensorService: SensorService) {}
}