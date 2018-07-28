import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { SensorService } from "./sensor/sensor.service";
import { SensorListComponent } from "./sensor/sensor-list.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        SensorListComponent
    ],
    providers: [
        SensorService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
