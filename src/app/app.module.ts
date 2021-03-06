import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

// Google map related module
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom components
import { MapComponent } from './components/map/map.component';
import { SearchedPlacesComponent } from './components/searched-places/searched-places.component';
import { SearchedPlacesDetailsComponent } from './components/searched-places-details/searched-places-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchedPlacesComponent,
    SearchedPlacesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: process.env.googleMapAPIKey}),
    AppRoutingModule,
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
