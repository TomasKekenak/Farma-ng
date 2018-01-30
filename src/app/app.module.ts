import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PoliaComponent } from './polia/polia.component';
import { PoliaService } from './polia/polia.service';
import { PoleEditComponent } from './pole-edit/pole-edit.component';
import { ZvierataComponent } from './zvierata/zvierata.component';
import { ZvieraEditComponent } from './zviera-edit/zviera-edit.component';
import { ZvierataService } from './zvierata/zvierata.service';


@NgModule({
  declarations: [
    AppComponent,
    PoliaComponent,
    PoleEditComponent,
    ZvierataComponent,
    ZvieraEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PoliaService, ZvierataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
