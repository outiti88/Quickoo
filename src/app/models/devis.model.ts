export class Devis {
    colis: string;
    produit: string;
    service: string;
    telephone: string;
    commentaire: string;
    date: string;

    constructor(public entreprise: string,public ville: string,public nom: string,public prenom: string, public email: string) {
    }
  }