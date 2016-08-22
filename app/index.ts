/**
 * Created by slashhuang on 16/8/1.
 */
//import deps
import 'reflect-metadata';
require('zone.js/dist/zone');
//you may need es6-shim if you get an error relating to list.fill
//import es6-shim;
// require('./main')


import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component'
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]);
