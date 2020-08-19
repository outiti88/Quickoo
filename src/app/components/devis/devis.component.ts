import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit , OnDestroy {

  
  devis: Devis[];
  devisSubscription : Subscription;

  constructor(private devisService : DevisService, private router : Router, private authService: AuthService) { }
  isAuth: boolean;

  ngOnInit(): void {
    this.devisSubscription = this.devisService.devisSubject.subscribe(
      (devis: Devis[]) => {
        this.devis = devis;
      }
    );
    this.devisService.emitDevis();

    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );

  }

  onDeleteDevis(devis: Devis) {
    this.devisService.removeDevis(devis);
  }

  onViewDevis(id: number) {
    this.router.navigate(['/devis', 'view', id]);
  }

  ngOnDestroy(){
    this.devisSubscription.unsubscribe();
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
