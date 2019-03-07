import { Injectable, Injector } from '@angular/core';
import{ HttpInterceptor} from '@angular/common/http';
import{ AuthenticateService} from'./authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorsService implements HttpInterceptor {

  constructor(private injector: Injector) { }
 intercept(req, next){
   let auth =this.injector.get(AuthenticateService)
   let tokenReq = req.clone({
     setHeaders:{
       Authorization: 'Bearer xx.yy.zz'
     }
   })
   return next.handle(tokenReq)
 }
}
