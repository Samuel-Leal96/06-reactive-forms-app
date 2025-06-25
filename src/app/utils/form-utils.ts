import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';
export class FormUtils {

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors &&
      form.controls[fieldName].touched
    )
  }

  static getTextError(errors: ValidationErrors){
    for (const key of Object.keys(errors)) { //* Obtenemos todas las keys del objeto de errores
      switch (key) {
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

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const errors = form.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {

    if(formArray.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtils.getTextError(errors);
  }


}
