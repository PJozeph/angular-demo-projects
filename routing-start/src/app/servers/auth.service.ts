export class AuthService {


    isLogedinIn = false;

    public isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {resolve(this.isLogedinIn)}, 800
                );
            }
        )
        return promise;
    }

    login() {
        this.isLogedinIn = true;
    }

    logout() {
        this.isLogedinIn = false;
    }

}