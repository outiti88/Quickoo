import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() nav : number = 0 ;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.signOutUser();

  }

}
