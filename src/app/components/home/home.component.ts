import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  contactForm : FormGroup;
  
  indis = false ;

  paragraph = '';
  titre = '' ;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactService,
    private router: Router) { }

    ngOnInit() {
      this.initForm();
    }

    slide : number = 0;
    toggle : boolean = false;


    slider(n : number){
      this.slide = n;
    }
    
    initForm() {
      this.contactForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{4,}/)]],
        email: ['', [Validators.required, Validators.email]],
        emballage: '',
        livraison: '',
        service: '',
        recrutement: '',
        stockage: ''
      });
    }

    onSaveContact() {
      const name = this.contactForm.get('name').value;
      const email = this.contactForm.get('email').value;
      const emballage = this.contactForm.get('emballage').value;
      const livraison = this.contactForm.get('livraison').value;
      const service = this.contactForm.get('service').value;
      const recrutement = this.contactForm.get('recrutement').value;
      const stockage = this.contactForm.get('stockage').value;
      const newContact = new Contact(name, email);
      newContact.emballage = emballage;
      newContact.livraison = livraison;
      newContact.service = service;
      newContact.recrutement = recrutement;
      newContact.stockage = stockage;
      newContact.date = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss', 'en');

      this.contactsService.createNewContact(newContact);
      console.log('bien envoyé');

      alert('bien envoyé');
      this.router.navigate(['/Tarifs']);
      
    }

  ngOnDestroy() : void{

  }

  

  write(n : number){
    this.indis = true;
    switch (n) {
      case 1 : this.paragraph = "Nous emballons vos produits pour vos clients et nous occupons du transport.";
                this.titre = "Gagnez du temps :" ;
                break;
      case 2 : this.paragraph = "Avec Quickoo, bénéficiez de tous les services de transports : Express 2H, Standard 24H à 48H, Relais 24H à 72 H.";
                this.titre = "Livrer différemment :" ;
                break;
      case 3 : this.paragraph = "Un frais de service pour le stockage, l’emballage et livraison.  Des tarifs négociés.  Vous ne payez que ce que vous expédiez.";
                this.titre = "Faites des économies :" ;
                break;
      case 4 : this.paragraph = "Profitez d’un service premium qui propulsera votre logistique au niveau des standards e-leaders.   Vos colis sont expédiés à J-0.";
                this.titre = "Service premium :" ;
                break;
      case 5 : this.paragraph = "Suivez vos colis jusqu’à la livraison chez votre client.   Vos colis sont assurés de l’enlèvement à la livraison finale.";
                this.titre = "Suivi & Assurance : " ;
                break;
                      
      default: 
                this.indis = false;
                this.paragraph = "";
                this.titre = "" ;
                break;


    }
  }

}



