import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpRestResponseInterceptor} from './rest-response-interceptor';
import {LoggingInterceptor} from './logging-interceptor';

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRestResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
];
