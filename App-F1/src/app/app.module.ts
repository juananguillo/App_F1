import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriversComponent } from './driver/drivers.component';
import { RacesComponent } from './races/races.component';
import {HttpClientModule} from '@angular/common/http';
import { ButtonracesComponent } from './buttonraces/buttonraces.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DriversComponent,
    RacesComponent,
    ButtonracesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
