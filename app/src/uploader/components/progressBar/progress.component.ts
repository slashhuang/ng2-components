/**
 * Created by slashhuang on 16/8/21.
 */

import { Component,Input } from '@angular/core';
import { ProgressModel} from './progress.model';

@Component({
    template:require('./progress.html'),
    selector: 'progress-bar'
})
export class ProgressBar {
    @Input() progressState:ProgressModel;
}