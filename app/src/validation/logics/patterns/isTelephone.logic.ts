/**
 * Created by slashhuang on 16/8/20.
 */
import { AbstractControl} from '@angular/common'
import {IsPattern } from './isPattern.logic';
export class IsTelephone{
    public static check(control:AbstractControl){
        let reg:RegExp = /^1[0-9]{10}$/;
        return IsPattern.check(control.value,reg)
    }
}