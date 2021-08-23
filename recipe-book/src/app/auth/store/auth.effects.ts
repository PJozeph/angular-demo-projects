import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";
import { AuthResponseData } from "../auth.service";

import * as authActions from "../store/auth.actions";
import { UserModel } from "../user-model";
import { User } from "../user.model";

@Injectable()
export class AuthEffects {

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(authActions.LOGIN_START),
        switchMap((authData : authActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxzacC-6anC3irHs6Hx0zqL1Coax3Wh18',
                {
                  email: authData.payload.email,
                  password: authData.payload.password,
                  returnSecureToken: true
                }
              ).pipe(
                map( resData => {
                    const expirationDate = new Date(new Date().getTime() + resData.expiresIn);
                    const user = new UserModel(resData.email, 
                                        resData.expiresIn, 
                                        resData.localId,
                                        expirationDate );
                    return of(new authActions.Login(user));
                }));   
            }), 
            catchError(error => {
            return of();
              
        })
        );

    constructor(private actions$: Actions, private http: HttpClient) {}

}