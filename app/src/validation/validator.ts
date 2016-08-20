/**
 * Created by slashhuang on 16/8/20.
 * 验证组件父类
 */

import { Control, ControlGroup,AbstractControl } from '@angular/common';

import { HasValue ,IsNumeric, Min, Max ,
    Range , MinLength ,MaxLength , Length ,
    IsLength,IsPattern ,IsEmail,IsTelephone } from "../../src/index";

export class SuperValidator {
    public emailControl: Control;
    public telephoneControl: Control;
    public hasValueControl:Control;
    public minLengthControl: Function;
    public maxLengthControl:Function;
    public lengthControl : Function;
    public rangeControl : Function;
    public isLengthControl : Function;
    ErrorMessage:string;
    constructor(){
        this.emailControl = new Control('',this.EmailValidator);
        this.telephoneControl = new Control('',this.TelephoneValidator);
        this.minLengthControl = (min)=>new Control('',this.MinLengthValidator(min));
        this.maxLengthControl = (max)=>new Control('',this.MaxLengthValidator(max));
        this.lengthControl = (minMax:{min:number,max:Number})=>new Control('',this.LengthValidator(minMax));
        this.rangeControl = (minMax:{min:number,max:Number})=>new Control('',this.rangeValidator(minMax));
        this.isLengthControl = (length)=>new Control('',this.IsLengthValidator(length));
        this.hasValueControl = new Control('',this.HasValueValidator)
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
    TelephoneValidator(control:AbstractControl){
        if(!IsTelephone.check(control)){
            return {
                'error': '请输入正确的电话号码'
            };
        }
    }
    MinLengthValidator(min:Number) {
        return (control:AbstractControl)=>{
            if (!MinLength.check(control,min)) {
                return {
                    'error': `请输入至少${min}个文字`
                };
            }
        }
    }
    HasValueValidator(control:AbstractControl){
        if(!HasValue.check(control)){
            return {
                'error': '输入值不能为空'
            };
        }
    }
    MaxLengthValidator(max:Number) {
        return (control:AbstractControl)=>{
            if (!MaxLength.check(control,max)) {
                return {
                    'error': `请输入少于${max}个文字`
                };
            }
        }
    }
    LengthValidator(minMax:{min:number,max:Number}) {
        return (control:AbstractControl)=>{
            if (!Length.check(control,minMax.min,minMax.max)) {
                return {
                    'error': `请输入至少${minMax.min}个文字,请输入至多${minMax.max}个文字`
                };
            }
        }
    }
    rangeValidator(minMax:{min:number,max:number}){
        return (control:AbstractControl)=>{
            if (!Range.check(control,minMax.min,minMax.max)) {
                return {
                    'error': `请输入介于${minMax.min}和${minMax.max}的数字`
                };
            }
        }
    };
    IsLengthValidator(length:number){
        return (control:AbstractControl)=>{
            if (!IsLength.check(control,length)) {
                return {
                    'error': `请输入正确的文字数目`
                };
            }
        }
    }
}