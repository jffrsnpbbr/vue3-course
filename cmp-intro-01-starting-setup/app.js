const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: '4a5ab7c2-1b65-4b73-b362-89d0c001e04c',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel.lorenz@example.com',
        },
        {
          id: 'fdea2d90-7292-424d-905d-e1d044c2d683',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie.jones@example.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component('friend-contact', {
  template: `
    <li :key="friend.id">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: '4a5ab7c2-1b65-4b73-b362-89d0c001e04c',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel.lorenz@example.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
