import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';


export function validateLaterThenToday(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return null;
  };
}

@Directive({
  selector: '[appLaterThenToday]',
  providers: [{provide: NG_VALIDATORS, useClass: LaterThenTodayDirective, multi: true}],
})
export class LaterThenTodayDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const controlDate = control.value;
    return controlDate < new Date() ? { 'laterThenToday': { value: true } } : null;
  }
}