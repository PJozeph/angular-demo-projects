import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth-service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth-component.html'
})
export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error = null;

    authObservable: Observable<AuthResponseData>

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(ngForm: NgForm) {
        if (this.isLoginMode) {
            this.authObservable = this.authService.singIn(ngForm.value.email, ngForm.value.password);
        } else {
            this.isLoading = true;
            this.authService.signUp(ngForm.value.email, ngForm.value.password);
        }

        this.authObservable.subscribe(response => {
            console.log(response);
            this.isLoading = false;
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        ngForm.form.reset();
    }


}