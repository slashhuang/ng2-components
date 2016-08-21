import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {AfterViewInit} from '@angular/core';
import {FILE_UPLOAD_DIRECTIVES, FileUploader,ProgressBar} from "../../src/index";

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