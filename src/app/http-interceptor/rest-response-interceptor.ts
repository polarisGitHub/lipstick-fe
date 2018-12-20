import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
import {ToastService} from '../tabs/service/toast.service';
import {RestResponse} from './data/rest-response';

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
                        this.toastService.presentTopToast(restResponse.errorCode + '：' + restResponse.message, {});
                        return event.clone({body: null});
                    }
                }
                return event;
            })
        );
    }
}
