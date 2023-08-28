<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
})
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>