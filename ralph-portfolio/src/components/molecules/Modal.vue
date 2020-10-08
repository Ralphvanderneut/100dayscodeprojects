<template>
  <div class="h-auto bg-red-800 absolute w-auto trans">
    <span>hallo ik ben een modal</span>
  </div>
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
.trans {
  transform: translate(120px, 50%);
}
</style>
