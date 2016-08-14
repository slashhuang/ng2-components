/**
 * Created by slashhuang on 16/7/31.
 */

export interface Dialog{
    title:string;
    text:string;
    type:string;
    callback?:Function
}
export interface DialogMethod{
    confirmDialog:Function,
    hintDialog:Function
}