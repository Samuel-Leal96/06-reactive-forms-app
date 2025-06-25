import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

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

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    //* name: ['', /** Validadores sincronos */, /** Validadores asincronos */ ],
    name: ['', [Validators.required, Validators.minLength(5)], ],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0
    })
  }

}
