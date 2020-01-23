export default {
  name: 'home',
  data() {
    return {
      email: '', //x
    }
  },
  created() {
    this.email = this.$route.params.email;
  }
};
