<template>
  <q-list>
    <q-item-label
      header
    >
      Инструменты
    </q-item-label>

    <EssentialLink
      v-for="link in linksList"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>
<script lang="ts" setup>
import { EssentialLink } from '@/shared/ui';

const linksList = [
  {
    title: 'Акции',
    caption: '',
    icon: 'school',
    link: '/stock',
  },
  {
    title: 'Облигации',
    caption: '',
    icon: 'code',
    link: '/bond',
  },
  {
    title: 'ETF',
    caption: '',
    icon: 'chat',
    link: '/etf',
  },
  {
    title: 'Портфели',
    caption: '',
    icon: 'record_voice_over',
    link: '/briefcase',
  },
  {
    title: 'План торговли',
    caption: '',
    icon: 'rss_feed',
    link: '/trading-plan',
  },
  {
    title: 'Статистика',
    caption: '',
    icon: 'public',
    link: '/statistics',
  },
  {
    title: 'Аккаунты',
    caption: '',
    icon: 'public',
    link: '/accounts',
  },
  {
    title: 'Пользователи',
    caption: '',
    icon: 'public',
    link: '/user',
  },
  {
    title: 'Компании',
    caption: '',
    icon: 'favorite',
    link: '/company',
  },
  {
    title: 'Настройки',
    caption: '',
    icon: 'favorite',
    link: '/setting',
  },
];

</script>
