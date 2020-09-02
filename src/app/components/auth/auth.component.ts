import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss' , 
              './style1.css',
              './style2.css',
              './fa.css']
})
export class AuthComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/contacts']);
      },
      (error) => {
        console.log("auth", error)
        if(error.code === "auth/wrong-password")
        this.errorMessage = "Erreur: le mot de passe n'est pas valide";
        else this.errorMessage = "Erreur: Adresse mail incorrecte ou utilisateur supprimé."
      }
    );
  }

}
