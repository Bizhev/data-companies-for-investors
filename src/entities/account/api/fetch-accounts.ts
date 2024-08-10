import { api } from '@/shared/api';
import {AccountMapper} from "@/entities/account/api/mappers/account";

export const fetchAccounts = async () => {
  try {
    const { data } = await api.get('/api/user/accounts')
    console.log({ data });
    return data.map(account=>AccountMapper.toUI(account))
  } catch (err) {
    console.warn(err)
  }
  return  [];
};
