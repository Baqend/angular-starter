// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

//bootstrap
import 'jquery';
require('bootstrap-sass/assets/javascripts/bootstrap/affix');
require('bootstrap-sass/assets/javascripts/bootstrap/alert');
require('bootstrap-sass/assets/javascripts/bootstrap/button');
require('bootstrap-sass/assets/javascripts/bootstrap/carousel');
require('bootstrap-sass/assets/javascripts/bootstrap/collapse');
require('bootstrap-sass/assets/javascripts/bootstrap/dropdown');
require('bootstrap-sass/assets/javascripts/bootstrap/modal');
require('bootstrap-sass/assets/javascripts/bootstrap/tooltip');
require('bootstrap-sass/assets/javascripts/bootstrap/popover');
require('bootstrap-sass/assets/javascripts/bootstrap/scrollspy');
require('bootstrap-sass/assets/javascripts/bootstrap/tab');
require('bootstrap-sass/assets/javascripts/bootstrap/transition');


if ('production' === ENV) {
  // Production


} else {
  // Development

}
