import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './component//first-component/first-component.component';
import { HeaderComponent } from './component//header/header.component';
import { SecondPhaseComponent } from './component/second-phase/second-phase.component';
import { ThirdPhaseComponent } from './component/third-phase/third-phase.component';
import { ForthPhaseComponent } from './component/forth-phase/forth-phase.component';
import { FivePhaseComponent } from './component/five-phase/five-phase.component';
import { SeventhPhaseComponent } from './component/seventh-phase/seventh-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent,
    SecondPhaseComponent,
    ThirdPhaseComponent,
    ForthPhaseComponent,
    FivePhaseComponent,
    SeventhPhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
