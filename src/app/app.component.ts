import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rafex Delivery';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCc18_fqb_zdSgA51L95S-fo48xZaGphKE",
      authDomain: "Rafex Delivery.firebaseapp.com",
      databaseURL: "https://Rafex Delivery.firebaseio.com",
      projectId: "Rafex Delivery",
      storageBucket: "Rafex Delivery.appspot.com",
      messagingSenderId: "265833320109",
      appId: "1:265833320109:web:3f3c614c58ca8043b34024",
      measurementId: "G-NRW4STQJFX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
