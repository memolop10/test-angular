import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetalleComponent } from './heroes-detalle/heroes-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
