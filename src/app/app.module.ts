import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuickooComponent } from './components/quickoo/quickoo.component';
import { HomeComponent } from './components/home/home.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuickooComponent,
    HomeComponent,
    TarifComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
