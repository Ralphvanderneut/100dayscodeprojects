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
  transition: all 0.5s ease;
}
.folder-enter-from, .folder-leave-to {
  opacity:0;
}
</style>
