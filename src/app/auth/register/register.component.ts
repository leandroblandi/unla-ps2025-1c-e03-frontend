import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {

    const user = {
      firstName: this.firstName,
      lastName: this.lastName,  
      email: this.email,    
      username: this.username,
      password: this.password 
    };

    const success = this.auth.register(user);
    if (success) {
      this.router.navigate(['/login']);
    } else {
      this.error = 'El usuario ya existe.';
    }
  }
}
