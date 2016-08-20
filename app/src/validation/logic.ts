/**
 * Created by slashhuang on 16/8/21.
 * logic level for validator
 */

import { AbstractControl } from '@angular/common';
import { isBlank, isString } from '@angular/core/src/facade/lang';

export class TrueValue {
    public static check(control: AbstractControl): boolean {
        if(!control.value){
            return false;
        }
        return true;
    }
}
export class HasValue {
    public static check(control: AbstractControl): boolean {
        if (isBlank(control.value) || (isString(control.value) && control.value.trim() === '')) {
            return false;
        }
        return true;
    }
}
export class IsLength {
    public static check(control: AbstractControl, length: number): boolean {
        if (control.value.length !== length) {
            return false;
        }
        return true;
    }
}
export class Length {
    public static check(control: AbstractControl, minLength: number, maxLength: number): boolean {
        if (control.value.length < minLength || control.value.length > maxLength) {
            return false;
        }

        return true;
    }
}
export class MaxLength {
    public static check(control: AbstractControl, maxLength: number): boolean {
        if (control.value.length > maxLength) {
            return false;
        }

        return true;
    }
}
export class MinLength {
    public static check(control: AbstractControl, minLength: number): boolean {
        if (control.value.length < minLength) {
            return false;
        }

        return true;
    }
}
export class IsNumeric {
    public static check(control: AbstractControl): boolean {
        if (control.value === undefined || control.value === null || control.value instanceof Object || isNaN(+control.value) === true) {
            return false;
        }

        return true;
    }
}
export class Max {
    public static check(control: AbstractControl, max: number): boolean {
        if (isNaN(+control.value) === true) {
            throw new Error(`"${control.value}" is not a number"`);
        }

        if (+control.value > max) {
            return false;
        }

        return true;
    }
}

export class Min {
    public static check(control: AbstractControl, min: number): boolean {
        if (isNaN(+control.value) === true) {
            throw new Error(`"${control.value}" is not a number"`);
        }
        if (+control.value < min) {
            return false;
        }

        return true;
    }
}

export class Range {
    public static check(control: AbstractControl, minValue: number, maxValue: number): boolean {
        if (isNaN(+control.value) === true) {
            throw new Error(`"${control.value}" is not a number"`);
        }
        if (+control.value < minValue || +control.value > maxValue) {
            return false;
        }

        return true;
    }
}

export class IsPattern {
    public static check(control: AbstractControl, pattern: RegExp): boolean {
        return pattern.test(control.value);
    }
}
export class IsEmail {
    public static check(control: AbstractControl) {
        let pattern: RegExp = /\S+@\S+\.\S+/;
        return IsPattern.check(control, pattern);
    }
}

export class IsTelephone{
    public static check(control:AbstractControl){
        let reg:RegExp = /^1[0-9]{10}$/;
        return IsPattern.check(control.value,reg)
    }
}