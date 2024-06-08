export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log('promesa ', this.loggedIn)
                    resolve(this.loggedIn);
                }, 900)
            }
        );
        return promise;
    }

    loging() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}