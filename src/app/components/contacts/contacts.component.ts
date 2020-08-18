import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {


  contacts: Contact[];
  contactsSubscription : Subscription;

  constructor(private contactsService : ContactService, private router : Router) { }

  ngOnInit(): void {
    this.contactsSubscription = this.contactsService.contactsSubject.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactsService.emitContacts();
  }

  onDeleteContact(contact: Contact) {
    this.contactsService.removeContact(contact);
  }

  onViewContact(id: number) {
    this.router.navigate(['/contacts', 'view', id]);
  }

  ngOnDestroy(){
    this.contactsSubscription.unsubscribe();
  }

}
