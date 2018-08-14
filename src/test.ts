// Código para cargar archivos SPEC y el framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';


declare var __karma__: any;
declare var require: any;

// Evita que el archivo karma se ejecute de manera prematura
__karma__.loaded = function () {};

// Para inicializar el entorno de prueba
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Código para encontrar todas la pruebas
const context = require.context('./', true, /\.spec\.ts$/);
// Código para la carga de módulos
context.keys().map(context);
// Código para ejecutar las pruebas
__karma__.start();
