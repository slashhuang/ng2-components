import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


/**
 * dialog组件
 */
import {DialogDemo } from './example/dialog/demo';
import {ValidateDemo} from './example/validate/demo';
import {SMSCodeDemo} from './example/smscode/demo';

/**
 * 组件元数据metadata
 */
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dialog']">dialog组件</a>
      <a [routerLink]="['Validator']">validator组件</a>
      <a [routerLink]="['SMSCode']">smscode组建</a>
    </nav>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES,DialogDemo],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/dialog',
    name: 'Dialog',
    component: DialogDemo
  },
  {
      path: '/validate',
      name: 'Validator',
      component: ValidateDemo
  },
  {
    path: '/smscode',
    name: 'SMSCode',
    component: SMSCodeDemo
  }
])
/**
 * 组件 model+ controller
 */
export class AppComponent {
    title:string = 'ng2组件列表';
}
