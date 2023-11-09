<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: '7b42c21a-b5ea-4519-9f9b-98a957f67ed7',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel.lorenz@example.com',
        },
        {
          id: 'c6048872-4244-43e0-840b-d6426f5a1024',
          name: 'Julie Jones',
          phone: '0987 6543 21',
          email: 'julie.jones@example.com',
        },
      ],
    };
  },
};
</script>
