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
 * 用于实验ng2的组件
 */
import {TestDemo} from './example/test/test'

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
        <a [routerLink]="['Test']">实验页面</a>
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
    },
    {
        path: '/test',
        name: 'Test',
        component: TestDemo
    }
])
/**
 * 组件 model+ controller
 */
export class AppComponent {
    title:string = 'ng2组件列表';
}
