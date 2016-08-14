/**
 * Created by slashhuang on 16/8/14.
 */
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/common';
import {  ValidationMessages, IFieldValidatorResult , HasValue, IsEmail, MaxLength } from '../../src/validation/index';

export interface IEmailValidationConfig {
    required: boolean,
    maxLength: number
}
export class BaseValidation {
    public config:IEmailValidationConfig={
        required: true,
        maxLength: 256
    };
    public get validator(): (control: AbstractControl) => IFieldValidatorResult {
        return (control: AbstractControl): IFieldValidatorResult => {
            let result: ValidationMessages = new ValidationMessages();
            if (HasValue.check(control) === false) {
                result.addMessage('required', `Email is required`, this.config);
            }
            else {
                if (MaxLength.check(control, this.config.maxLength) === false) {
                    result.addMessage('maxLength', `Email cannot exceed ${this.config.maxLength} characters`, this.config);
                }

                if (IsEmail.check(control) === false) {
                    result.addMessage('isEmail', `Email must be valid`, this.config);
                }
            }
            return result._messages;
        }
    }
}