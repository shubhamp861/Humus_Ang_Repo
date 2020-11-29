import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HeaderComponent } from './header/header.component';
import { SecondPhaseComponent } from './second-phase/second-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent,
    SecondPhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
