<template>
  <div class="container">
    <h1>{{ username }}</h1>
    <h3>{{ age }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
