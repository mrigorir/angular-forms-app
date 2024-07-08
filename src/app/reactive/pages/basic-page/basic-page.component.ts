import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  rtx5090 = {
    name: 'RTX 5090',
    price: '2500',
    inStorage: 10,
  };

  ngOnInit(): void {
    this.basicForm.reset(this.rtx5090);
  }

  basicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  invalidField(field: string): boolean | null {
    return (
      this.basicForm.controls[field].errors &&
      this.basicForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.basicForm.controls[field]) return null;

    const errors = this.basicForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caractéres`;
      }
    }
    return null;
  }

  onSave(): void {
    if (this.basicForm.invalid) return;
    this.basicForm.reset(this.rtx5090);
  }
}
