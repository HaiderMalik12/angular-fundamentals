import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero/hero.service';
import { Logger } from './logger.service';
import { HeroListComponent } from './hero/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
