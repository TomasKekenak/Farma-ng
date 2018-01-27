import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PoliaComponent } from './polia/polia.component';
import { PoliaService } from './polia/polia.service';
import { PoleEditComponent } from './pole-edit/pole-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PoliaComponent,
    PoleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PoliaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
