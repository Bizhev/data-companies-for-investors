<template>
  <q-layout view="lHh Lpr lFf">
    <slot name="header" />
    <slot name="navigation" />
    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
