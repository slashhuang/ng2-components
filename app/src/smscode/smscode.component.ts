import { Component, Input, Output, EventEmitter,OnDestroy } from '@angular/core';

@Component({
    selector: 'sms-code',
    template: `
        <div class="ui action input">
            <input type="text" [(ngModel)]="value" >
            <button class="ui button"  (click)="sendCode()" [disabled]="!!timer">
            {{ btnText }}
            </button>
        </div>
    `
})
export class SMSCode implements OnDestroy {
    @Output() sendSMSCode = new EventEmitter();
    @Input() sendCodeText: string = '发送验证码';
    @Input() count: number = 60; // 倒计时（秒）
    btnText = this.sendCodeText;
    counter: number = null;
    value: string;
    timer: any= null;

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
        this.sendSMSCode.emit(this.value);
    }
    ngOnDestroy() {
        if(this.timer) {
            clearInterval(this.timer);
        }
    }
}