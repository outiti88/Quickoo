import { Injectable } from '@angular/core';
import { Devis } from '../models/devis.model'
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DevisService {

  devis: Devis[] =[];
  devisSubject = new Subject<Devis[]>();

  emitDevis() {
    this.devisSubject.next(this.devis);
  }


  saveDevis(){
    firebase.database().ref('/devis').set(this.devis);
  }


  getDevis() {
    firebase.database().ref('/devis')
      .on('value', (data) => {
          this.devis = data.val() ? data.val() : [];
          this.emitDevis();
        }
      );
  }

  getSingleDevis(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/devis/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewDevis(newDevis: Devis) {
    this.devis.push(newDevis);
    this.saveDevis();
    this.emitDevis();
  }

  removeDevis(devis: Devis) {
    const bookIndexToRemove = this.devis.findIndex(
      (devisEl) => {
        if(devisEl === devis) {
          return true;
        }
      }
    );
    this.devis.splice(bookIndexToRemove, 1);
    this.saveDevis();
    this.emitDevis();
  }

  constructor() { 
    this.getDevis();
   }
}
