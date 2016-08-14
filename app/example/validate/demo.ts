/**
 * Created by slashhuang on 16/8/14.
 */
import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup } from '@angular/common';
import { BaseValidation } from './factory';
import * as Validation from '../../src/validation/index';


@Component({
    template:require('./demo.html'),
    selector: 'validate-demo'
})
export class ValidateDemo implements OnInit {
    private myForm: ControlGroup;
    private nameControl: Control;
    private numControl: Control;
    private emailControl: Control;
    submitted:boolean;
    constructor(){
        this.submitted = true;
    }
    public ngOnInit(): void {
        this.emailControl = new Control('',new BaseValidation().validator);
        this.numControl = new Control('',new BaseValidation().validator);
        this.nameControl = new Control('',new BaseValidation().validator)
        this.myForm = new ControlGroup({
            emailControl: this.emailControl,
            numControl: this.numControl,
            nameControl:this.nameControl
        });
    }
    onSubmit() {
        this.submitted = true;
        alert(1);
    }
}