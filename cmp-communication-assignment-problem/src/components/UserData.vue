<template>
  <form @submit.prevent="submitData" class="container">
    <input type="text" v-model="username" />
    <input type="number" v-model="age" />
    <button>submit</button>
  </form>
</template>
<script>
export default {
  emits: ['submit-data'],
  data() {
    return {
      username: '',
      age: 0,
    };
  },
  methods: {
    submitData() {
      console.log('[submitData()]');
      this.$emit('submit-data', { username: this.username, age: +this.age });
    },
  },
};
</script>
