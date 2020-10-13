<template>
  <transition name="folder" appear >
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
.folder-enter-active, .folder-leave-active {
  transition: all 0.3s ease;
}
.folder-enter-from, .folder-leave-to {
  transform: translate(-25%, 0%)  scaleX(0.5);
}
</style>
