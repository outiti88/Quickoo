import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {


  
  indis = false ;

  paragraph = '';
  titre = '' ;

  constructor() { }

  ngOnInit(): void {
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
