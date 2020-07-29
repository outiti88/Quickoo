import { Component, OnInit } from '@angular/core';

interface Emballage {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent implements OnInit  {

  selectedValue: number = 0;
  selectedCar: string;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = this.min +1;
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
    return isNaN(x) ? 0 : x ;
  }

 

  emballages: Emballage[] = [
    {value: 0, viewValue: 'Sans'},
    {value: 5, viewValue: 'Carton'},
    {value: 10, viewValue: 'Sachet'},
    {value: 15, viewValue: 'Enveloppe'}
  ];
  states: string[] = ['Tanger',
    'Ksar Sghir',
    'Ksar El Kébir',
    'Melloussa ',
    'Gueznaia',
    'Martil',
    'Assilah',
    'Tétouan',
     'Larache' ,
     'Mdiq-Fnideq',
     'Chefchaouen',
    'Kénitra',
    'Lalla Mimouna',
    'Souk Tleta El Gharb',
    'Sidi Slimane',
    'Sidi Yahya',
    'Souk El Arbaa Du Rharb',
    'Moulay Bouselham',
    'Sidi Taibi',
    'Allal Tazi'
  ];



  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
 

}
