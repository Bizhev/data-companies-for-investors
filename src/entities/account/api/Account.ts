import {User} from "@/entities/account/api/User";

export class Account {
    id: number = 0;
    name: string = '';
    status: number = 0;
    accessLevel: number = 0;
    type: number = 0;
    openedDate: string = ''
    closedDate: string = ''
    active: boolean = false
    brokerAccountId: string = ''
    cash: number | string = ''
    user: User
    createdAt: string = ''
    updatedAt: string = ''
    constructor(account: Account) {
        Object.assign(this, account)
    }
}
