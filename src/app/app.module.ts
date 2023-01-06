import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TenkeyComponent } from './tenkey/tenkey.component';
import { ButtonComponent } from './button/button.component';
import { ResultBoxComponent } from './result-box/result-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TenkeyComponent,
    ButtonComponent,
    ResultBoxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
