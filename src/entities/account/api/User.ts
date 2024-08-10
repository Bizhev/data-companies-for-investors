export class User {
    id: number
    fio: string
    name: string
    isActive: 1 | 0
    cash: number | string
    createdAt: string
    updatedAt: string
    constructor(user: User) {
        Object.assign(this, user)
    }
}
