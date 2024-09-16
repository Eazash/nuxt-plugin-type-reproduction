<script setup lang="ts">
  const {$one, $two } = useNuxtApp()
  $one()
  $two()
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
