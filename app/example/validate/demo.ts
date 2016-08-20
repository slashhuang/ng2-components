/**
 * Created by slashhuang on 16/8/14.
 */
import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup } from '@angular/common';

/**
 * 验证组件父类
 */
import { SuperValidator } from "../../src/index";

@Component({
    template:require('./demo.html'),
    selector: 'validate-demo'
})
export class ValidateDemo extends  SuperValidator implements OnInit {
    private myForm: ControlGroup;
    private emailControl: Control;
    private textControl:Control;
    constructor(){
        super();
    }
    public ngOnInit(): void {
        this.emailControl = this._emailControl('请输入正确的邮箱地址');
        this.textControl = this._hasValueControl('该值不能为空');
        this.myForm = new ControlGroup({
            email: this.emailControl,
            text: this.textControl
        });
    }
    get ErrorMessage():string{
        let errorObj = this.showAllError(this.myForm);
        return JSON.stringify(errorObj,null,2)
    }
    onSubmit() {}
}