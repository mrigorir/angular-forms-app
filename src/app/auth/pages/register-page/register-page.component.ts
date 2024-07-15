import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidtatorService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  constructor(
    private fb: FormBuilder,
    private validtatorService: ValidtatorService
  ) {}

  registerForm: FormGroup = this.fb.group({
    name: [
      '',
      Validators.required,
      Validators.pattern(this.validtatorService.firstNameAndLastnamePattern),
    ],
    username: ['', Validators.required, this.validtatorService.cantBeStrider],
    email: [
      '',
      Validators.required,
      Validators.pattern(this.validtatorService.emailPattern),
      [new EmailValidator()]],
    password: ['', Validators.required, Validators.minLength(6)],
    password2: ['', Validators.required],
  },{
    validators: [
      this.validtatorService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  invalidField(field: string) {
    return this.validtatorService.invalidField(this.registerForm, field);
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
