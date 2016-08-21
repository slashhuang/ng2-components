/**
 * Created by slashhuang on 16/8/21.
 */

export * from  './logic/file-select.directive';
export * from  './logic/file-drop.directive';
export * from  './logic/file-uploader.class';

import {FileSelectDirective} from './logic/file-select.directive';
import {FileDropDirective} from './logic/file-drop.directive';

export const FILE_UPLOAD_DIRECTIVES:[any] = [FileSelectDirective, FileDropDirective];

export default {
    directives: [
        FILE_UPLOAD_DIRECTIVES
    ]
};
export const FILE_UPLOAD_DIRECTIVES:[any] = [FileSelectDirective, FileDropDirective];