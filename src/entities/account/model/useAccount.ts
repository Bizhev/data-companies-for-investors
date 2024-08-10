import { ACCOUNT_COLUMNS } from '@/entities/account/model/constants.';
import { ref } from 'vue';

import { fetchAccounts } from '@/entities/account/api'

export function useAccount() {
  const accountRows = ref([]);

  (async () => {
    accountRows.value = await fetchAccounts()
  })()

  return {
    accountColumns: ACCOUNT_COLUMNS,
    accountRows
  };
}
