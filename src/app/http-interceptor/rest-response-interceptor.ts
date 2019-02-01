import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ToastService} from '../tabs/service/toast.service';
import {RestResponse} from './data/rest-response';
import {error} from '@angular/compiler/src/util';

@Injectable()
export class HttpRestResponseInterceptor implements HttpInterceptor {

    private SUCCESS = 'success';

    constructor(private toastService: ToastService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO error handle
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const restResponse: RestResponse = Object.assign(new RestResponse(), event.body);
                    if (restResponse.code === this.SUCCESS) {
                        return event.clone({body: restResponse.data});
                    } else {
                        this.toastService.presentMidToast(
                            restResponse.errorCode + '：' + restResponse.message, {
                                color: 'secondary',
                                cssClass: 'ion-text-center'
                            });
                        return event.clone({body: null});
                    }
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                this.toastService.presentMidToast('出错了', {color: 'secondary', cssClass: 'ion-text-center'});
                return throwError(err);
            })
        );
    }
}
