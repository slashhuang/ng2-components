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
##### dialog  [弹出框组件 示例代码](./app/example/dialog/demo.ts)
##### validate [表单验证组件 示例代码](./app/example/validate/demo.ts)
##### progressBar [组件 示例代码](./app/example/progressBar/demo.ts)
##### uploader [上传组件 示例代码](./app/example/uploader/demo.ts)


## UI展示
> dialog 弹出框组件

<img src='./assets/dialog.gif' width='400px'>

> validate 表单验证组件

<img src='./assets/validator.gif' width='400px'>

> progressBar 进度条组件

<img src='./assets/progressBar.gif' width='400px'>

> uploader 文件上传组件

<img src='./assets/uploader.gif' width='400px'>


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

