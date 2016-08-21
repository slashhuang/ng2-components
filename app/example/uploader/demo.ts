/**
 * uploader组件基于https://github.com/danialfarid/ng-file-upload/二次开发
 * 集成了progressBar
 * 目前仅仅在能够支持HTML5标准的浏览器中使用
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader,ProgressBar} from "../../src/index";

//测试地址
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'simple-demo',
    template: require('./demo.html'),
    directives: [FILE_UPLOAD_DIRECTIVES,CORE_DIRECTIVES,ProgressBar]
})
export class UploaderDemo {
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
}