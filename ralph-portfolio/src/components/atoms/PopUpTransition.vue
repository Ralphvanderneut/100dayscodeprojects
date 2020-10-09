<template>
  <transition name="folder-popup" appear>
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
.folder-popup-enter-active {
  transition: all 0.3s ease;
}
.folder-popup-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.folder-popup-enter-from, .folder-popup-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translate(-75%, 75%) scaleY(0.5);
}
</style>
