// grab from http://stackoverflow.com/questions/34948961/angular-2-custom-form-input/34998780#34998780

import {Provider, forwardRef} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export abstract class AbstractValueAccessor implements ControlValueAccessor {
    _value: string = '';
    get value(): any { return this._value; };
    set value(v: any) {
      if (v !== this._value) {
        this._value = v;
        this.onChange(v);
      }
    }

    writeValue(value: any) {
      this._value = value;
      this.onChange(value);
    }

    onChange = (_ : any) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}

export function MakeProvider(type : any){
  return new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => type),
        multi: true
    }
);}