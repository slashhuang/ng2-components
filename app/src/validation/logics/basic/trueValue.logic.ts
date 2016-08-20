import { AbstractControl } from '@angular/common';

export class TrueValue {
     public static check(control: AbstractControl): boolean {
        if(!control.value){
            return false;
        }
        return true;
    }
}

