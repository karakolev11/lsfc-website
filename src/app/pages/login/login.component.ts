import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public submitted = false;
  public loading = false;
  public error: string | null = null;

  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService, private readonly router: Router) {
    this.loginForm = this.fb.group({
      email: this.fb.control(undefined, [Validators.required, Validators.email]),
      password: this.fb.control(undefined, [Validators.required])
    });
  }

  public submit(): void {
    if (!this.loginForm.valid || this.loading) return;
    this.loading = true;
    this.error = null;

    const payload = this.loginForm.value; // { email, password }

    this.auth.login(payload).subscribe({
      next: (res) => {
        console.log('Login success', res);
        const token = this.extractToken(res);
        if (token) {
          this.auth.setToken(token);
          console.log('Auth token stored');
        } else {
          console.warn('No token found in login response');
        }
        this.submitted = true;
        this.loginForm.reset();
        // optional navigate after login
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login error', err);
        this.error = err?.error?.message || err?.message || 'Login failed';
        this.submitted = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private extractToken(res: any): string | null {
    if (!res) return null;
    if (typeof res === 'string') return res;
    const candidates = [
      res.token,
      res.accessToken,
      res.access_token,
      res.jwt,
      res?.data?.token,
      res?.data?.accessToken,
      res?.authentication?.token,
      res?.result?.token
    ];
    for (const c of candidates) {
      if (typeof c === 'string' && c.length > 0) return c;
    }
    return null;
  }
}
