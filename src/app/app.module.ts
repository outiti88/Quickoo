import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuickooComponent } from './components/quickoo/quickoo.component';
import { HomeComponent } from './components/home/home.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { AuthComponent } from './components/auth/auth.component';
import { Routes, RouterModule } from '@angular/router' ;

const appRoutes : Routes =[
  { path: 'Acceuil' , component : HomeComponent  }, 
  { path: 'Tarifs' , component : TarifComponent  },
  { path: 'Quickoo' , component : QuickooComponent  },
  { path: '' , component : HomeComponent  }
] ;

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
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
