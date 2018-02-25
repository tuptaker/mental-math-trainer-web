export class MMTUser {
    username: string;
    email: string;
    authToken: string;

    constructor(username: string, email: string, authToken: string) {
        this.username = username;
        this.email = email;
        this.authToken = authToken;
    }
}


