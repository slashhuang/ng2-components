/**
 * Created by slashhuang on 16/8/20.
 * 验证组件父类
 */

import { Control, ControlGroup,AbstractControl } from '@angular/common';

import { HasValue ,TrueValue,IsNumeric, Min, Max ,
    Range , MinLength ,MaxLength , Length ,
    IsLength,IsPattern ,IsEmail,IsTelephone } from "./logic";

interface  ErrorShape{
    error:string
};
interface ErrorObjShape{
    [key:string]:ErrorShape
}

export class SuperValidator {
    public _emailControl: Function;
    public _telephoneControl: Function;
    public _hasValueControl:Function;
    public _min_lengthControl: Function;
    public _max_lengthControl:Function;
    public _lengthControl : Function;
    public _rangeControl : Function;
    public _trueValueControl : Function;
    public _isLengthControl : Function;
    public _min_valueControl:Function;
    public _max_valueControl:Function;
    constructor(){
        this._emailControl = (hint:string)=>new Control('',this.EmailValidator(hint));
        this._telephoneControl = (hint:string)=>new Control('',this.TelephoneValidator(hint));
        this._min_lengthControl = (min:number,hint:string)=>new Control('',this.MinLengthValidator(min,hint));
        this._max_lengthControl = (max:number,hint:string)=>new Control('',this.MaxLengthValidator(max,hint));
        this._lengthControl = (minMax:{min:number,max:number},hint:string)=>new Control('',this.LengthValidator(minMax,hint));
        this._rangeControl = (minMax:{min:number,max:number},hint:string)=>new Control('',this.rangeValidator(minMax,hint));
        this._isLengthControl = (length:number,hint:string)=>new Control('',this.IsLengthValidator(length,hint));
        this._hasValueControl = (hint:string)=>new Control('',this.HasValueValidator(hint));
        this._min_valueControl = (min:number,hint:string)=>new Control('',this.minValueValidator(min,hint));
        this._max_valueControl = (min:number,hint:string)=>new Control('',this.maxValueValidator(min,hint));
        this._trueValueControl =(hint:string)=>new Control('',this.trueValueValidator(hint));
    }
    showAllError(_controlArr:ControlGroup):ErrorObjShape{
        
        let ErrorArr:ErrorObjShape={};
        let sub_control =_controlArr.controls;
        for(let _control in sub_control){
            if(sub_control[_control].errors){
                ErrorArr[_control] =<ErrorShape>sub_control[_control].errors;
            }
        }
        return ErrorArr;
    }
    showError(sub_control:AbstractControl):ErrorShape{
      
        let _Error:any= sub_control.errors;
        if(_Error &&  _Error.error){
            return _Error.error;
        };
    }
    private minValueValidator(min:number,hint:string){
        return (control:AbstractControl)=>{
            if(!Min.check(control,min)){
                return {
                    'error': hint
                };
            }
        }
    }
    private maxValueValidator(max:number,hint:string){
        return (control:AbstractControl)=>{
            if(!Max.check(control,max)){
                return {
                    'error': hint
                };
            }
        }
    }
    private EmailValidator(hint:string){
        return (control:AbstractControl)=>{
            if(!IsEmail.check(control)){
                return {
                        'error': hint
                };
            }
        }
    }

    private TelephoneValidator(hint:string){
        return (control:AbstractControl)=>{
            if(!IsTelephone.check(control)){
                return {
                    'error': hint
                };
            }
        }
    }

    private MinLengthValidator(min:number,hint:string){
        return (control:AbstractControl)=>{
            if (!MinLength.check(control,min)) {
                return {
                    'error': hint
                };
            }
        }
    }
    private HasValueValidator(hint:string){
        return (control:AbstractControl)=> {
            if (!HasValue.check(control)) {
                return {
                    'error': hint
                };
            }
        }
    }
    private trueValueValidator(hint:string){
        return (control:AbstractControl)=> {
            if (!TrueValue.check(control)) {
                return {
                    'error': hint
                };
            }
        }
    }
    private MaxLengthValidator(max:number,hint:string){
        return (control:AbstractControl)=>{
            if (!MaxLength.check(control,max)) {
                return {
                    'error': hint
                };
            }
        }
    }
    private LengthValidator(minMax:{min:number,max:number},hint:string){
        return (control:AbstractControl)=>{
            if (!Length.check(control,minMax.min,minMax.max)) {
                return {
                    'error': hint
                };
            }
        }
    }
    private  rangeValidator(minMax:{min:number,max:number},hint:string){
        return (control:AbstractControl)=>{
            if (!Range.check(control,minMax.min,minMax.max)) {
                return {
                    'error': hint
                };
            }
        }
    };
    private IsLengthValidator(length:number,hint:string){
        return (control:AbstractControl)=>{
            if (!IsLength.check(control,length)) {
                return {
                    'error': hint
                };
            }
        }
    }
}