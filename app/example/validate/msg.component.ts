// /**
//  * Created by slashhuang on 16/8/18.
//  */
// import { Component, Input, OnInit } from '@angular/core';
// import { AbstractControl } from '@angular/common';
// import { ValidationMessageComponent } from './../validation-message/validation-message.component';
// import { ValidationMessage } from '../../models/validation-message.model';
//
// @Component({
//     selector: 'validation-messages',
//     template: `
//     <div>
//         {{messages}}
//
//     </div>`
//     ,
//     directives: [ValidationMessageComponent]
// })
// export class ValidationMessagesComponent implements OnInit {
//     @Input() public control: AbstractControl;
//     messages:string = '';
//     public ngOnInit(): void {
//         this.messages = '';
//     }
//
//     public get messages(): Array<ValidationMessage> {
//         return this.filterMessages();
//     }
//
//     private filterMessages(): Array<ValidationMessage> {
//         let result: Array<ValidationMessage> = null;
//
//         if (this.control && this.control.errors && Object.keys(this.control.errors).length > 0) {
//
//             result = [];
//             let exemptions = this.exemptKeys ? this.exemptKeys : [];
//
//             for (let key in this.control.errors) {
//                 if (!exemptions.find(e => e.toLowerCase() === key.toLowerCase())) {
//                     result.push(this.control.errors[key]);
//                 }
//             }
//
//             if (result.length === 0) {
//                 result = null;
//             }
//         }
//
//         return result;
//     }
// }