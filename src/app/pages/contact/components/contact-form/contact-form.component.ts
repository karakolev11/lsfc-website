import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  
  public contactForm: FormGroup = this.fb.group({
    name:  this.fb.control(undefined, [Validators.required]),
    email: this.fb.control(undefined, [Validators.required, Validators.email]),
    title: this.fb.control(undefined, [ Validators.required]),
    text:  this.fb.control(undefined, [Validators.required])
  });

  constructor(private readonly fb: FormBuilder) {}

  public submit(): void {
    const data = this.contactForm.value;
    console.log(data);
  }

}
