const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
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
}).mount('#app');
