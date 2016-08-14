/**
 * Created by slashhuang on 16/8/14.
 */
import { Component,Output,EventEmitter } from '@angular/core';
import {DialogService,DialogComponent} from '../../src/index';

@Component({
    selector: 'dialog-container',
    styles:[require('./demo.css')],
    directives:[DialogComponent],
    providers:[DialogService],
    template:require('./demo.html')
})
export  class DialogDemo {
    dialogOption:any;
    options:any;
    title:string = 'dialog组件示例';
    constructor(private _DialogService:DialogService) {
            _DialogService.dialog$.subscribe((options:any)=> {
                this.dialogOption = options;
            });
    }
    public popSuccess(){
        this._DialogService.showDialog({
            title:"咨询信息保存成功",
            text:'您点击了alert',
            type:"success"
        });
    }
    public popError(){
        this._DialogService.showDialog({
            title:'',
            text:'您点击了confirm',
            type:'error'
        })
    }
    public popConfirm(){
        this._DialogService.showDialog({
            title:'confirm',
            text:'您点击了confirm',
            type:'confirm',
            callback:()=>{
                alert('您点击了确定')
            }
        })
    }
}
