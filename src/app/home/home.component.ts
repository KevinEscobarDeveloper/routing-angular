import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private readonly authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    console.log('en el metodo')
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.loging();
  }

  onLogout() {
    this.authService.logout();
  }
}
