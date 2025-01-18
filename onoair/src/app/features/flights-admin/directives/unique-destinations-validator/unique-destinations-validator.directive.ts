import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUniqueDestinationsValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UniqueDestinationsValidatorDirective, multi: true }]
})
export class UniqueDestinationsValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const source = control.get('originCode')?.value ?? '';
    const destination = control.get('destinationCode')?.value ?? '';

    return (source !== '' && destination !== '') && (source === destination) ? { 'uniqueDestinations': { value: true } } : null; 
  }
}
