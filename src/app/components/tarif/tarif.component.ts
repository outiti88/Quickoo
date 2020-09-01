import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { DevisService } from 'src/app/services/devis.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Devis } from 'src/app/models/devis.model'




interface Emballage {
  value: number;
  viewValue: string;
}

interface Ville {
  value: number;
  name: string;
}
interface Region {
  value: number;
  name: string;
}



@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss',
                './material.css',  './material2.css']
})
export class TarifComponent implements OnInit  {

  slide : number = 0;

  slider(n : number){
    this.slide = n;
  }

  toggle : boolean = false;

  service : string;
  colis: string;
  produit: string;

  devis : boolean = false;

  selectedVille : number =0 ;
  selectedValue: number = 0;
  selectedRegion : number = 0 ;

  selectedCar: string;
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 50;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 1;
  tickInterval = 1;


  ajourd : Date = new Date();

  valeur : number = this.selectedValue + this.value;
  typeEmb : number = 0 ;
  changeText : boolean = false ;

  devisForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private devisService: DevisService,
    private router: Router) { 
    this.valeur = 0;
  }

  ngOnInit() {
    this.initForm();
  }
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  initForm() {
    this.devisForm = this.formBuilder.group({
      entreprise: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      telephone:['', [Validators.required,Validators.pattern(/[0-9]{9}/)]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email:['',  [
        Validators.email
      ]],
      colis: '',
      service: '',
      produit: '',
      commentaire: ''
    });
  }

  onSaveDevis() {
    const entreprise = this.devisForm.get('entreprise').value;
    const ville = this.devisForm.get('ville').value;
    const telephone = this.devisForm.get('telephone').value;
    const nom = this.devisForm.get('nom').value;
    const prenom = this.devisForm.get('prenom').value;
    const email = this.devisForm.get('email').value;
    const colis = this.devisForm.get('colis').value;
    const service = this.devisForm.get('service').value;
    const produit = this.devisForm.get('produit').value;
    const commentaire = this.devisForm.get('commentaire').value;

    const newDevis = new Devis(entreprise,ville,nom,prenom, email);
    newDevis.telephone = telephone;
    newDevis.colis = colis;
    newDevis.service = service;
    newDevis.produit = produit;
    newDevis.commentaire = commentaire;

    this.devisService.createNewDevis(newDevis);
    console.log('bien envoyé');
    alert('bien envoyé');
    this.router.navigate(['/Service']);
    
  }


















  telecharger() {

   /*  const options = {
      name : 'output.pdf',
      image : { type : 'jpeg' },
      html2canvas : {},
      jsPDF : {orientation : 'landscape'}
    }

    const element:Element = document.getElementById('devis');

    html2pdf()
      .from(element)
      .set(options)
      .save(); */
    this.devis = true;
    console.log("telecharger")
  }

  toNumber(x : number): number {
    console.log(this.value);
    return isNaN(x) ? 0 : x ;
  }

  tarif(n : number) {
      
    if(this.value < 26)
    { 
      let tmp  = this.toNumber(this.typeEmb*this.selectedValue/this.selectedValue) +this.selectedValue ; //prix de l'embalage + personalisation
     let mad = this.value + this.selectedVille + (tmp + (tmp*0.3))  + n;
    
      return ((Math.round(mad * 100) / 100).toFixed(2)) + " MAD" ;
   }
     else 
     return "Contactez Nous";
 
  }
  
  regions : Region[] = [
    {value: 1, name : 'Region de Tanger-Tétouan'},
    {value: 2, name : 'Region de GHARB-CHRARDA-BENI HSSEN'}
  ];



  emballages: Emballage[] = [
    {value: 0, viewValue: 'Sans'},
    {value: 2.4, viewValue: 'Sachets scellables'},
    {value: 1.9, viewValue: 'Caisse carton 18x12x10 cm'},
    {value: 2, viewValue: 'Caisse carton 20x15x10 cm'},
    {value: 1.8, viewValue: 'Caisse carton 21x14x13 cm'},
    {value: 3.1, viewValue: 'Caisse carton 25x25x10 cm'},
    {value: 2.6, viewValue: 'Caisse carton 29x19,5x10 cm'},
    {value: 5, viewValue: 'Caisse carton 45x24x28 cm'}
  ];


  tanger : Ville[] = 
  [
    {value: 19, name : 'Tanger'},
    {value: 29, name : 'Ksar Sghir'},
    {value: 29, name : 'Melloussa'},
    {value: 29, name : 'Ksar El Kébir'},
    {value: 29, name : 'Gueznaia'},
    {value: 29, name : 'Martil'},
    {value: 29, name : 'Assilah'},
    {value: 29, name : 'Tétouan'},
    {value: 29, name : 'Larache'},
    {value: 29, name : 'M\'diq-Fnideq'},
    {value: 29, name : 'Chefchaouen'}
  ];
  kenitra : Ville[] = 
  [
    {value: 19, name : 'Kénitra'},
    {value: 29, name : 'Lalla Mimouna'},
    {value: 29, name : 'Souk Tleta El Gharb'},
    {value: 29, name : 'Sidi Slimane'},
    {value: 29, name : 'Sidi Yahya'},
    {value: 29, name : 'Souk El Arbaa Du Rharb'},
    {value: 29, name : 'Moulay Bouselham'},
    {value: 29, name : 'Sidi Taibi'},
    {value: 29, name : 'Allal Tazi'}
  ];


regionChange(){
  this.selectedRegion = 0;
  this.selectedVille = 0;
}

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

 

}
