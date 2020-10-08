<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 1s;
}
.fade-enter,
.fade-leave-to {
}
</style>