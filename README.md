# ng2-components[ng2组件开发]
## 命令
```bash
    npm install
    npm start
```

## 目录架构
|-app[逻辑代码]  

|-|- src [源代码]  

|-|- src/index [组件API列表]  

|-|- example [示例目录文件]  

|-|- example/dialog [dialog组件示例]  

|-|- example/validator [validator组件示例]  

## 目前已经集成的组件
- [dialog组件](./app/example/dialog/demo.ts)
- [validate表单验证组件](./app/example/validate/demo.ts)

##### dialog 弹出框.  示例代码```example/dialog/demo.ts```
```javascript
    ## 调用方
    import {DialogService} from "../../src/index";
    constructor( private _DialogService:DialogService){}
    ## 调用服务,触发dialog事件
     this._DialogService.showDialog({
              title:"修改成功",
              text:'',
              type:"success"
            });
     this._DialogService.showDialog({
                 title:'提示',
                 text:'您点击了error',
                 type:'error'
             })       
    this._DialogService.showDialog({
                title:'提示',
                text:'您点击了confirm',
                type:'confirm',
                callback:()=>{
                    alert('您点击了确定')
                }
            })
    # 组件指令,接收事件,弹出dialog      
    @Component({
        directives:[DialogComponent],
        providers:[DialogService],
        template:'<pop-dialog [options]="dialogOption" ></pop-dialog>' 
    })
    export  class DialogDemo {
        dialogOption:any;
        options:any;
        constructor(private _DialogService:DialogService) {
                _DialogService.dialog$.subscribe((options:any)=> {
                    this.dialogOption = options;
                });
        }        
        
```
<img src='./assets/dialog.gif' width='400px'>

#### validator 表单验证 示例代码```example/validate/demo.ts```
```javascript
    /**
     * 验证组件父类
     * 可以采用new SuperValidator()的形式,也可以采用extends SuperValidator继承方法
     */
    import { Control, ControlGroup } from '@angular/common';
    import { SuperValidator } from "../../src/index";
    @Component({
        template:require('./demo.html'),
        selector: 'validate-demo',
        styles:[require('./demo.css')]
    })
    export class ValidateDemo {
        private myForm: ControlGroup;
        private emailControl: Control;
        private textControl:Control;
        private codeControl:Control;
        private selectControl : Control;
        private passwordControl : Control;
        private mustCheckControl: Control;
        private maxControl :Control;
        public minControl:Control;
        private numControl : Control;
        private submitted :boolean =false;
        validator:any;
        constructor(){
            this.validator = new SuperValidator();
            this.emailControl = this.validator._emailControl('请输入正确的邮箱地址');
            this.textControl = this.validator._min_lengthControl(2,'请至少输入2位文字');
            this.codeControl = this.validator._isLengthControl(4,'请输入正确的4位验证码');
            this.selectControl = this.validator._hasValueControl('请选择性别');
            this.passwordControl = this.validator._lengthControl({min:6,max:14},'请输入6至14位密码');
            this.mustCheckControl = this.validator._trueValueControl('请同意该协议');
            this.myForm = new ControlGroup({
                 email: this.emailControl,
                 text: this.textControl,
                 num:this.numControl,
                 min:this.minControl,
                 code:this.codeControl,
                 select:this.selectControl,
                 pass:this.passwordControl,
                 max: this.maxControl,
                 agree: this.mustCheckControl           
            });
        }
       }
```    
<img src='./assets/validator.gif' width='400px'>

## ng2整体架构分析
- component为@directive中带有模板特点的指令
- directive指令
- service服务
- Dependency injection依赖注入
- provider [协同injector一起]
- eventEmitter 注册发布设计模式

## 写组件时,请参看如下angular2的API列表,保证组件的高质量
### [ng2的英文API列表](https://angular.io/docs/ts/latest/api/)
### [ng2中国镜像文档](http://a2.hubwiz.com/docs/ts/latest/api/)


## [本项目部分架构借鉴angular hero-list,感谢johnpapa](https://github.com/johnpapa/angular2-tour-of-heroes.git)

