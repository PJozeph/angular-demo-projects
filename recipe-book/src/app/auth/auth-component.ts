import { Component, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth-service";

import * as fromApp from "../store/app.reducer"
import * as authActions from "../auth/store/auth.actions";

import { Store } from "@ngrx/store";

@Component({
    selector: 'app-auth',
    templateUrl: './auth-component.html'
})
export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error = null;

    authObservable: Observable<AuthResponseData>

    constructor(private authService: AuthService, 
                private router : Router,
                private store : Store<fromApp.AppState>) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(ngForm: NgForm) {
        if (this.isLoginMode) {
            this.authObservable = this.authService.singIn(ngForm.value.email, ngForm.value.password);
            this.store.dispatch(new authReducers.())
        } else {
            this.isLoading = true;
            this.authObservable = this.authService.signUp(ngForm.value.email, ngForm.value.password);
        }

        this.authObservable.subscribe(response => {
            this.isLoading = false;
            this.router.navigate(['/recipes'])
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        ngForm.form.reset();
    }


}