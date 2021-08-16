import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { UserModel } from "./user-model";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    returnSecureToken?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    userSubject = new BehaviorSubject<UserModel>(null)

    constructor(private httpClient: HttpClient) { }

    singIn(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxzacC-6anC3irHs6Hx0zqL1Coax3Wh18',
            { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleErrorMessage), tap(
                responseData => this.handleAuthentication(responseData.email,
                                                          +responseData.expiresIn,
                                                          responseData.localId,
                                                          responseData.idToken)));
    }

    signUp(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxzacC-6anC3irHs6Hx0zqL1Coax3Wh18',
            { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleErrorMessage), tap(
                responseData => this.handleAuthentication(responseData.email, 
                                                          +responseData.expiresIn, 
                                                          responseData.localId, 
                                                          responseData.idToken)
            ));
    }

    private handleAuthentication(email : string, expiresIn: number, localId: string, idToken: string ) {
        const expirationDate = new Date(new Date().getTime() + expiresIn);
                    const user = new UserModel(
                        email, 
                        localId, 
                        idToken, 
                        expirationDate);
                    this.userSubject.next(user);  
    }

    private handleErrorMessage(errorResponse: HttpErrorResponse) {
        let errorMessage = 'Error is unknown!';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorResponse);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "This email is already used!";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "Invalid password";
                break;
            case 'USER_DISABLED':
                errorMessage = "User disabled";
                break;  
        }
        return throwError(errorMessage);
    }
}