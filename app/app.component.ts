import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


/**
 * 组件demo
 */
import {DialogDemo } from './example/dialog/demo';
import {ValidateDemo} from './example/validate/demo';
import {ProgressDemo} from './example/progressBar/demo';
import {UploaderDemo} from './example/uploader/demo';


/**
 * 组件元数据metadata
 */
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dialog']">dialog弹出框组件</a>
       <a [routerLink]="['Validator']">validator表单验证组件</a>
        <a [routerLink]="['ProgressBar']">progress进度条组件</a>
        <a [routerLink]="['Uploader']">uploader上传组件</a>
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
    component: DialogDemo,
    useAsDefault:true
  },
    {
        path: '/validate',
        name: 'Validator',
        component: ValidateDemo
    },
    {
        path: '/progressBar',
        name: 'ProgressBar',
        component: ProgressDemo
    },
    {
        path: '/uploader',
        name: 'Uploader',
        component: UploaderDemo
    }
])
/**
 * 组件 model+ controller
 */
export class AppComponent {
    title:string = 'ng2组件列表';
}
