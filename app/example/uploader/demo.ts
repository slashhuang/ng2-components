/**
 * uploader组件源于,仅仅增加了progressBar展现功能点
 * https://github.com/danialfarid/ng-file-upload/
 * 仅仅能够在支持HTML5的浏览器中使用
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {AfterViewInit} from '@angular/core';
import {FILE_UPLOAD_DIRECTIVES, FileUploader,ProgressBar} from "../../src/index";

//测试地址
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'simple-demo',
    template: require('./demo.html'),
    directives: [FILE_UPLOAD_DIRECTIVES,CORE_DIRECTIVES,ProgressBar]
})
export class UploaderDemo implements AfterViewInit{
    public uploader:FileUploader =
        new FileUploader({
            url: URL,
            isHTML5:true
        });
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
    ngAfterViewInit(){
        debugger;
    }
}