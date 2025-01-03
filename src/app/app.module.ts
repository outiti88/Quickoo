import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Rafex DeliveryComponent } from './components/Rafex Delivery/Rafex Delivery.component';
import { HomeComponent } from './components/home/home.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { AuthComponent } from './components/auth/auth.component';
import { Routes, RouterModule } from '@angular/router' ;

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SoonComponent } from './components/soon/soon.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SingleContactComponent } from './components/contacts/single-contact/single-contact.component';
import { DevisComponent } from './components/devis/devis.component';
import { DevisService } from './services/devis.service';
import { SingleDevisComponent } from './components/devis/single-devis/single-devis.component';





const appRoutes : Routes =[
  { path: 'NotFound', component: SoonComponent },
  { path: 'devis/view/:id', canActivate: [AuthGuardService],  component: SingleDevisComponent },

  { path: 'contacts/view/:id', canActivate: [AuthGuardService],  component: SingleContactComponent },
  { path: 'Acceuil' , component : HomeComponent  }, 
  { path: 'Tarifs' , component : TarifComponent  },
  { path: 'Rafex Delivery' , component : Rafex DeliveryComponent  },
  { path: 'Service' , component : ServiceComponent  },
  { path: 'Auth' , component : AuthComponent  }, 
  { path: 'contacts' , canActivate: [AuthGuardService],  component : ContactsComponent  }, 
  { path: 'devis' , canActivate: [AuthGuardService],  component : DevisComponent  }, 


  { path: '' , component : HomeComponent  },
  { path: '**', redirectTo: 'NotFound' }
] ;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Rafex DeliveryComponent,
    HomeComponent,
    TarifComponent,
    AuthComponent,
    SoonComponent,
    ServiceComponent,
    ContactsComponent,
    SingleContactComponent,
    DevisComponent,
    SingleDevisComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [ContactService,AuthService,AuthGuardService,DevisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
