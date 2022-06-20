import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidations {

  static unique(control: AbstractControl): ValidationErrors | null {
    return control.value === "cold" ? { unique: true } : null;
  }

  static asyncUnique(control: AbstractControl): Promise<ValidationErrors | null> | null {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        control.value === "cold" ? resolve({ asyncUnique: true }) : resolve(null);
      }, 5000);
    });
  }

}
