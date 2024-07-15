import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './swithces-page.component.html',
  styles: ``
})
export class SwithcesPageComponent {
  constructor(private fb: FormBuilder) {}

  switchesForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    wantNotifications: false
  }

  invalidField(field: string): boolean | null {
    return (
      this.switchesForm.controls[field].errors &&
      this.switchesForm.controls[field].touched
    );
  }


  onSave():void {
    if(this.switchesForm.invalid) {
      this.switchesForm.markAllAsTouched();
      return;
    }

    console.log(this.switchesForm.value);
    console.log(this.person);



    return;
  }
}
