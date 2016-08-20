/**
 * Created by slashhuang on 16/8/14.
 */
import { Component } from '@angular/core';
import { Control, ControlGroup } from '@angular/common';

/**
 * 验证组件父类
 */
import { SuperValidator } from "../../src/index";

@Component({
    template:require('./demo.html'),
    selector: 'validate-demo',
    styles:[require('./demo.css')]
})
export class ValidateDemo extends  SuperValidator {
    private myForm: ControlGroup;
    private emailControl: Control;
    private textControl:Control;
    private codeControl:Control;
    private selectControl : Control;
    private passwordControl : Control;
    private mustCheckControl: Control;
    private maxControl :Control;
    public minControl:Control;
    private numControl : Control;
    private submitted :boolean =false;
    constructor(){
        super();
        this.emailControl = this._emailControl('请输入正确的邮箱地址');
        this.textControl = this._min_lengthControl(2,'请至少输入2位文字');
        this.codeControl = this._isLengthControl(4,'请输入正确的4位验证码');
        this.selectControl = this._hasValueControl('请选择性别');
        this.passwordControl = this._lengthControl({min:6,max:14},'请输入6至14位密码');
        this.mustCheckControl = this._trueValueControl('请同意该协议');
        this.numControl = this._rangeControl({min:10,max:100},'请输入10-100内的数字');
        this.minControl = this._min_valueControl(100,'请输入大于100的数字');
        this.maxControl =this._max_valueControl(100,'请输入小于100的数字');
        this.myForm = new ControlGroup({
            email: this.emailControl,
            text: this.textControl,
            num:this.numControl,
            min:this.minControl,
            code:this.codeControl,
            select:this.selectControl,
            pass:this.passwordControl,
            max: this.maxControl,
            agree: this.mustCheckControl
        });
    }
 
    get ErrorMessage():string{
        let errorObj = this.showAllError(this.myForm);
        return JSON.stringify(errorObj,null,2)
    }
    get getFormData(){
        if(this.submitted) {
            return JSON.stringify(this.myForm.value, null, 2)
        }
    }
    onSubmit() {
        this.submitted=true;
    }
}