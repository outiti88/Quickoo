import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-single-devis',
  templateUrl: './single-devis.component.html',
  styleUrls: ['./single-devis.component.scss']
})
export class SingleDevisComponent implements OnInit {

  devis : Devis ;

  constructor(private route: ActivatedRoute, private devisService: DevisService,
    private router: Router) {}

ngOnInit() {
this.devis = new Devis('', '','','','');
const id = this.route.snapshot.params['id'];
this.devisService.getSingleDevis(+id).then(
(devis: Devis) => {
this.devis = devis;
if(this.devis.service==="option1"){this.devis.service =" Stockage, préparation, expédition"}
else if(this.devis.service==="option2"){this.devis.service =" Collecte, emballage, expédition"}
else if(this.devis.service==="option3"){this.devis.service =" Opération ponctuelle"}
}
);
}

onBack() {
this.router.navigate(['/devis']);
}
}
