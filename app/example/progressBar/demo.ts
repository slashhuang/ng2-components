/**
 * Created by slashhuang on 16/8/14.
 */
import { Component } from '@angular/core';

//上传进度条
import { ProgressBar,ProgressModel } from "../../src/index";

@Component({
    template:require('./demo.html'),
    directives:[ProgressBar],
    selector: 'upload-demo',
    styles:[require('./demo.css')]
})
export class ProgressDemo {
    private progressError:ProgressModel={
        state:'error',
        progress:'100%'
    };
    private progressSuccess:ProgressModel={
        state:'success',
        progress:'100%'
    };
    private progressStateProgress:ProgressModel={
        state:'progress',
        progress:'50%'
    }
}