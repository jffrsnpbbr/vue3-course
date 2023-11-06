const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = ''
    }
  },
});

app.mount('#events');
