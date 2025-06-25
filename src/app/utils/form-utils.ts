import { FormGroup } from '@angular/forms';
export class FormUtils{

  static isValidField(form: FormGroup, fieldName: string): boolean | null{
    return (
      !!form.controls[fieldName].errors &&
      form.controls[fieldName].touched
    )
  }

  static getFieldError(form: FormGroup , fieldName: string): string | null{
    const errors = form.controls[fieldName].errors ?? {};

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
