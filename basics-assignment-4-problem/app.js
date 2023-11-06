const app = Vue.createApp({
  data() {
    return {
      inputUserClass: '',
      inputStyles: '',
      isVisible: false,
      userClass: '',
    };
  },
  watch: {
    inputUserClass(value) {
      if (value === 'user1') {
        this.userClass = 'user1'; 
      } else if (value === 'user2') {
        this.userClass = 'user2';
      } else {
        this.userClass = ''
      }
    },
  },
  computed: {
    status() {
      return this.isVisible ? 'display' : 'hidden';
    },
    pClasses() {
      return [this.userClass, this.status];
    },
  },
  methods: {
    toggleDisplay() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount('#assignment');
