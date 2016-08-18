/**
 * Created by slashhuang on 16/8/14.
 */
import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup,AbstractControl } from '@angular/common';

import { HasValue ,IsNumeric, Min, Max ,
    Range , MinLength ,MaxLength , Length ,
    IsLength,IsPattern ,IsEmail } from "../../src/index";


@Component({
    template:require('./demo.html'),
    selector: 'validate-demo'
})
export class ValidateDemo implements OnInit {
    private myForm: ControlGroup;
    private emailControl: Control;
    submitted:boolean;
    ErrorMessage:string;
    constructor(){
        this.submitted = true;
    }
    public ngOnInit(): void {
        this.emailControl = new Control('',this.EmailValidator);

        this.myForm = new ControlGroup({
            emailControl: this.emailControl
        });
    }
    showError(_controlArr:ControlGroup){
        let _1stError:any={error:''};
        let sub_control =_controlArr.controls;
        for(let _control in sub_control){
            if(sub_control[_control].errors){
                _1stError = sub_control[_control].errors;
                break;
            }
        }
        if(_1stError){
            this.ErrorMessage =  _1stError.error
        }
    }
    EmailValidator(control:AbstractControl){
        if(!IsEmail.check(control)){
            return {
                'error': '邮箱格式不正确'
            };
        }
    }
    onSubmit() {
        this.submitted = true;
        this.showError(this.myForm);
    }
}