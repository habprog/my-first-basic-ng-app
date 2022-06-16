import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Practice2Component } from './practice2/practice2.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Practice2Component,
    GamecontrolComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
