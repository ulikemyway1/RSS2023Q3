import Contact from './contact';

class UserListModel {
    private activeUsers: Map<string, Contact> = new Map();
    private inactiveUsers: Map<string, Contact> = new Map();

    public getActiveUsers(): Map<string, Contact> {
        return this.activeUsers;
    }

    public getInactiveUsers(): Map<string, Contact> {
        return this.inactiveUsers;
    }

    public setUsers(
        type: 'USER_ACTIVE' | 'USER_INACTIVE',
        data: string[]
    ): void {
        if (type === 'USER_ACTIVE') {
            this.activeUsers.clear();
            data.forEach((user) =>
                this.activeUsers.set(user, new Contact(user, true))
            );
        } else {
            this.inactiveUsers.clear();
            data.forEach((user) =>
                this.inactiveUsers.set(user, new Contact(user, false))
            );
        }
    }

    public updateUserStatus(userData: {
        username: string;
        status: boolean;
    }): void {
        const { username, status } = userData;
        const contact =
            this.activeUsers.get(username) || this.inactiveUsers.get(username);
        if (contact) {
            contact.updateContactStatus(status);
            if (status) {
                this.activeUsers.set(username, contact);
                this.inactiveUsers.delete(username);
            } else {
                this.inactiveUsers.set(username, contact);
                this.activeUsers.delete(username);
            }
        } else {
            //create new Contact
        }
    }
}

const userListModel = new UserListModel();
export default userListModel;
