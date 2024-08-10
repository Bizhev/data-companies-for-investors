export interface IUser {
    id: number
    fio: string
    name: string
    is_active: 1 | 0
    cash: number | string
    created_at: string
    updated_at: string
}
export interface AccountApi {
    id: number
    name: string
    status: number
    access_level: number
    type: number
    opened_date: string
    closed_date: string
    active: boolean
    broker_account_id: string
    cash: number | string
    user: IUser
    created_at: string
    updated_at: string
}
