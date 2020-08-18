import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model'
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] =[];
  contactsSubject = new Subject<Contact[]>();

  emitContacts() {

    this.contactsSubject.next(this.contacts);
  }


  saveContacts(){
    firebase.database().ref('/contacts').set(this.contacts);
  }


  getContacts() {
    firebase.database().ref('/contacts')
      .on('value', (data) => {
          this.contacts = data.val() ? data.val() : [];
          this.emitContacts();
        }
      );
  }

  getSingleContact(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/contacts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.saveContacts();
    this.emitContacts();
  }

  removeContact(contact: Contact) {
    const bookIndexToRemove = this.contacts.findIndex(
      (contactEl) => {
        if(contactEl === contact) {
          return true;
        }
      }
    );
    this.contacts.splice(bookIndexToRemove, 1);
    this.saveContacts();
    this.emitContacts();
  }

  constructor() { 
    this.getContacts();
   }
}
