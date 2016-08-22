import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AbstractValueAccessor, MakeProvider } from './abstractValueAcessor';


@Component({
    selector: 'sms-code',
    template: `
        <div class="ui action input">
            <input type="text" [(ngModel)]="value" (focus)="onFocus()" [placeholder]="placeHolder">
            <button class="ui button" [class.teal]="!timer" (click)="sendCode()" [disabled]="!!timer">{{ btnText }}</button>
        </div>
    `,
    providers: [MakeProvider(SMSCode)]
})
export class SMSCode extends AbstractValueAccessor {
    @Output() sendSMSCode = new EventEmitter();
    @Input() placeHolder: string = '';
    @Input() sendCodeText: string = '发送验证码';
    @Input() count: number = 60; // 倒计时（秒）

    isCounting = false;
    btnText = this.sendCodeText;
    counter: number = null;
    timer: NodeJS.Timer = null;
    // Set touched on focus
    onFocus() {
        this.onTouched();
    }
    sendCode() {
        this.counter = this.count;
        this.btnText = '' + this.counter;
        this.timer = setInterval(() => {
            --this.counter;
            if(this.counter <= 0) {
                clearInterval(this.timer);
                this.btnText = this.sendCodeText;
                this.timer = null;
            } else {
                this.btnText = this.counter + 'S';
            }
        }, 1000);
        this.sendSMSCode.emit({});
    }
    onDestroy() {
        if(this.timer) {
            clearInterval(this.timer);
        }
    }
}