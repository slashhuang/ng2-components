/**
 * Created by slashhuang on 16/7/31.
 * dialog服务
 */
import { Injectable,EventEmitter } from '@angular/core';

import { Dialog } from './dialog';

/**
 * 依赖注入
 * service
 */
@Injectable()
export class DialogService {
    dialog$ = new EventEmitter();
    constructor() {}
    public showDialog(options:Dialog){
        this.dialog$.emit(options);
    }
}
