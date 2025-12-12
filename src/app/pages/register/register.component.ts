import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private readonly fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: this.fb.control(undefined, [Validators.required, Validators.email]),
      password: this.fb.control(undefined, [Validators.required]),
      confirm: this.fb.control(undefined, [Validators.required])
    });
  }

  public submit(): void {
    if (!this.registerForm.valid) return;
    this.submitted = true;
    console.log('Register submitted', this.registerForm.value);
    this.registerForm.reset();
  }

  public reset(): void {
    this.registerForm.reset();
    this.submitted = false;
  }
}
