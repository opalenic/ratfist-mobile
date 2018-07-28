import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SensorListComponent } from "./sensor/sensor-list.component";

const routes: Routes = [
    { path: "", redirectTo: "/sensors", pathMatch: "full" },
    { path: "sensors", component: SensorListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }