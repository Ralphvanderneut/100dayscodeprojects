<template>
  <div>
    <input type="text" v-model="location" />
    <input type="checkbox" v-model="disabled" />
    <button @click="Move">move</button>
    <teleport :to="teleport.to" :disabled="teleport.disabled">
      <div class="teleport-me">teleportme to body</div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      disabled: false,
      teleport: {
        to: "body",
        disabled: false,
      },
    };
  },
  methods: {
    Move() {
      this.teleport.to = this.location;
      this.teleport.disabled = this.disabled;
    },
  },
};
</script>

<style lang="css" scoped>
.teleport-me {
  background-color: #0000ff;
  color: white;
}
</style>
