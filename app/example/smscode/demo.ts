import { Component, ViewChild } from '@angular/core';
import { SMSCode } from '../../src/index'
import {NgForm} from '@angular/common';

@Component({
    selector: 'sms-demo',
    template: `
        <form (ngSubmit)="check(myForm)" #myForm="ngForm">
            <sms-code (sendSMSCode)="send(timer.value)" 
                sendCodeText="发送验证码" 
                [count]="30"
                #timer>
            </sms-code>
            <br>
            <br>
            <button type="submit" class="ui button">提交</button>
        </form>
    `,
    directives: [SMSCode]
})

// Template Driven Example
export class SMSCodeDemo {
    @ViewChild(SMSCode)
    private SMS :SMSCode;
    send(value:string) {
       alert(`执行Ajax===${value}`);
        // 向服务端请求发送验证码
    }
    check(args:any) {
        alert(`用户输入了:====${this.SMS.value}`)
    }
}