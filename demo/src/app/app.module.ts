import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ParallaxModule} from "./ng-parallax";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ParallaxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
