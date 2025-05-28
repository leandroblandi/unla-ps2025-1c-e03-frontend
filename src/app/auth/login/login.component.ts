import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private auth: AuthService, private router: Router, private toast: ToastrService) {}
  public username: string = '';
  public password: string = '';
  public error: string = '';

  onSubmit() {
    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.toast.success(`Bienvenido nuevamente, ${this.username}`);
      this.router.navigate(['/acommodations'])
    } else {
      this.toast.error("Usuario o contraseña incorrectos");
    }
  }  
}
