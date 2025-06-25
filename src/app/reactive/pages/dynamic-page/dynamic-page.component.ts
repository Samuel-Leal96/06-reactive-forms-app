import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss',
})
export class DynamicPageComponent {

  private fb = inject(FormBuilder)
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', [Validators.required, Validators.minLength(3)]],
        ['Call of Duty', [Validators.required, Validators.minLength(3)]]
      ],
      Validators.minLength(3) //* Minimo debe haber 3 juegos en el arreglo que se manda
    )
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray
  }

}
