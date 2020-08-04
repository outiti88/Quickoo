import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent implements OnInit  {
  selectedVille : number =0 ;
  selectedValue: number = 0;
  selectedRegion : number = 0 ;

  selectedCar: string;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  tickInterval = 1;


  valeur : number = this.selectedValue + this.value;
  typeEmb : number = 0 ;
  changeText : boolean = false ;

  constructor() { 
    this.valeur = 0;
  }

  ngOnInit(): void {
  }

  

  toNumber(x : number): number {
    console.log(this.value);
    return isNaN(x) ? 0 : x ;
  }

  tarif(n : number) {
    if(this.value < 100)
    return (this.value + this.selectedValue + this.selectedVille + this.toNumber(this.typeEmb*this.selectedValue/this.selectedValue)) * n + " MAD"
    else 
    return "Contactez Nous";
  }
  
  regions : Region[] = [
    {value: 1, name : 'Region de Tanger'},
    {value: 2, name : 'Region de Kenitra'}
  ];



  emballages: Emballage[] = [
    {value: 0, viewValue: 'Sans'},
    {value: 5, viewValue: 'Carton'},
    {value: 10, viewValue: 'Sachet'},
    {value: 15, viewValue: 'Enveloppe'}
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




  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
 

}
