import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/service/auth.service";
import { authentication, authenticationFailure, authenticationSuccess } from "../action/auth.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class AuthEffects {

    constructor(
        private actions$ : Actions,
        private authService : AuthService,
        private router : Router,
        private toastr : ToastrService
    ) {}

    
    loginName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authentication),
            mergeMap((action) => 
                this.authService.loginCheck(action.paylode).pipe(
                    map((backendData) => {
                        console.log(backendData);
                        if(backendData.name!=null){
                            //sessionStorage.setItem('isAuthenticated', 'true');
                            this.router.navigate(['/verifyotp'],{queryParams:{data : action.paylode.email}});
                            this.toastr.success("You are Login Successfully","Success");
                            return authenticationSuccess(backendData);
                        }
                        else{
                            //sessionStorage.setItem('isAuthenticated', 'false');
                            this.toastr.error("Check You Login Credentials","Invalid");
                            return authenticationFailure(
                                {
                                    errormessage : "Api is Not Working",
                                }
                            );
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}