<template>
<div class="center" style="font-size: large; width: fit-content;">欢迎{{ userStore.userName }}</div>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/store/user';

const userStore = useUserStore()

</script>

<style lang='scss' scoped>

</style>