import { Component } from '@angular/core';
import { SMSCode } from '../../src/smscode/smscode.component';
import {FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector: 'sms-demo',
    template: `
        <form #myForm="ngForm" (ngSubmit)="check(myForm.value, myForm.valid)">
            <sms-code (sendSMSCode)="send()" 
                sendCodeText="发送验证码" 
                [(ngModel)]="code"
                name="code"
                [count]="80"
                required>
            </sms-code>
            <br>
            <br>
            <button type="submit" class="ui button" [disabled]="!myForm.valid">提交</button>
        </form>
    `,
    directives: [SMSCode, FORM_DIRECTIVES]
})

// Template Driven Example
export class SMSCodeDemo {
    private userInput: string;
    private code: string; // bind user input code
    send() {
        // 向服务端请求发送验证码
    }
    check(val: any, valid: boolean) {
        alert('用户输入了: ' + val.code)
    }
}