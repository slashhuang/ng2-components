
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component'
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]);
