export default class UserHandler {
    private user;

    constructor(firstName: string, lastName: string) {
        this.user = {
            firstName,
            lastName,
        };
    }

    saveUser() {
        localStorage.setItem('user_ULIKE', JSON.stringify(this.user));
    }
}
