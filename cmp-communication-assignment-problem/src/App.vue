<template>
  <main>
    <user-data @submit-data="handleSubmit"></user-data>
    <active-user :username="user.username" :age="user.age"></active-user>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        age: 0
      }
    }
  },
  methods: {
    handleSubmit(userData) {
      // this.user.username = userData.username;
      // this.user.age = userData.age;
      this.user = { ...userData }
    },
  },
};
</script>

<style>
.container {
  padding: 10px;
  margin: 5px;
  border: 2px solid #000;
  border-radius: 10px;
}
</style>
