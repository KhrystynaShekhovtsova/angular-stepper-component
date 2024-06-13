import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
