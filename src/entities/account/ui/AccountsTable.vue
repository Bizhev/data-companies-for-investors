<template>
  <q-table
    flat bordered
    title="Аккаунты"
    :rows="accountRows"
    :columns="accountColumns"
    row-key="name"
  >
    <template v-slot:body="props">
      <q-tr :props="props" @click="onRowClick(props.row)">
        <q-td key="id" :props="props">
          {{ props.row.id }}
        </q-td>
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="status" :props="props">
          {{ props.row.status }}
        </q-td>
        <q-td key="type" :props="props">
          {{ props.row.type }}
        </q-td>
        <q-td key="openedDate" :props="props">
          <q-badge v-show="props.row.openedDate" color="primary">
            {{ props.row.openedDate && dateToView(props.row.openedDate) || '' }}
          </q-badge>
        </q-td>
        <q-td key="user.name" :props="props">
          {{ props.row.user.name }}
        </q-td>
        <q-td key="cash" :props="props">
          {{ props.row.cash }}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>
<script lang="ts" setup>
import { useAccount } from '@/entities/account/model/useAccount';
import { dateToView } from '@/shared/utils';

const {
  accountRows,
  accountColumns,
} = useAccount();

const onRowClick = (row) => console.log(`${row.name} clicked`);

</script>
