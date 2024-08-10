
import {BaseMapper} from "@/shared/config";
import {Account} from "@/entities/account/api/Account";
import {AccountApi} from "@/entities/account/api/AccountApi";

export class AccountMapper implements BaseMapper<Account, AccountApi> {
  static toUI(model: AccountApi): Account {
    return new Account({
      id: model.id,
      name: model.name,
      status: model.status,
      accessLevel: model.access_level,
      type: model.type,
      openedDate: model.opened_date,
      closedDate: model.closed_date,
      active: model.active,
      brokerAccountId: model.broker_account_id,
      cash: model.cash,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
      user: {
        id: model.user.id,
        fio: model.user.fio,
        name: model.user.name,
        isActive: model.user.is_active,
        cash: model.user.cash,
        createdAt: model.user.created_at,
        updatedAt: model.user.updated_at,
      },
    });
  }

  static toAPI(model: Account): AccountApi {
    return {
      id: model.id,
      name: model.name,
      status: model.status,
      access_level: model.accessLevel,
      type: model.type,
      opened_date: model.openedDate,
      closed_date: model.closedDate,
      active: model.active,
      broker_account_id: model.brokerAccountId,
      cash: model.cash,
      created_at: model.createdAt,
      updated_at: model.updatedAt,
      user: {
        id: model.user.id,
        fio: model.user.fio,
        name: model.user.name,
        is_active: model.user.isActive,
        cash: model.user.cash,
        created_at: model.user.createdAt,
        updated_at: model.user.updatedAt,
      },
    };
  }
}
