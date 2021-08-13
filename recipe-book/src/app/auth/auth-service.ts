import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData{
    idToken : string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    returnSecureToken? : boolean;
}

@Injectable({providedIn : 'root'})
export class AuthService {

    constructor(private httpClient : HttpClient) {}

    singIn(email : string, password: string){
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxzacC-6anC3irHs6Hx0zqL1Coax3Wh18',
        {email : email, password: password, returnSecureToken: true})
    }

    signUp(email: string, password : string){
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxzacC-6anC3irHs6Hx0zqL1Coax3Wh18',
        {email : email, password: password, returnSecureToken: true })
        .pipe(catchError(errorResponse => {
            let errorMessage = 'Error is unknown!';
            if(!errorResponse.error || !errorResponse.error.error) {
                    return throwError(errorResponse);
            }
            switch(errorResponse.error.error.message) {
                case 'EMAIL_EXISTS' :
                    errorMessage = "This email is already used!";
                }
                return throwError(errorMessage);
        }));
    }
}