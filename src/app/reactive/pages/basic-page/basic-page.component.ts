import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    //* name: ['', /** Validadores sincronos */, /** Validadores asincronos */ ],
    name: ['', [Validators.required, Validators.minLength(5)], ],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  isValidField(fieldName: string): boolean | null{
    return !!this.myForm.controls[fieldName].errors
  }

  getFieldError(fieldName: string): string | null{
    const errors = this.myForm.controls[fieldName].errors ?? {};

    for(const key of Object.keys(errors)){ //* Obtenemos todas las keys del objeto de errores
      switch(key){
        case 'required':
          return 'Este campo es requerido'

        case 'minlength':
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`;

        case 'min':
          return `Valor minimo de ${errors['min'].min}`
      }
    }

    return null;
  }

}
