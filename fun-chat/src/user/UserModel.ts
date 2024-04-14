export class UserModel {
    private username: string | undefined = undefined;
    private password: string | undefined = undefined;

    private isLogined: boolean = false;

    public setUsername(userName: string) {
        this.username = userName;
    }

    public setLoginStatus(loginStatus: boolean) {
        this.isLogined = loginStatus;
    }

    public getUsername(): string | undefined {
        return this.username;
    }

    public getLoginStatus(): boolean {
        return this.isLogined;
    }

    public setPassword(password: string | undefined) {
        this.password = password;
    }

    public getPassword(): string | undefined {
        return this.password;
    }
}

const userModel = new UserModel();
export default userModel;
