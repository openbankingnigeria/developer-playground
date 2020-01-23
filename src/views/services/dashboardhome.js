import moment from 'moment';

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      requests: [],
    }
  },
  methods: {
    fdt(ct) {
      return moment(ct).format('DD/MM/YY');
    },
    ftt(ct) {
      return moment(ct).format('hh:mm A');
    },
    getStatusText(status) {
      var txt = 'SUCCESS';
      if(status == 'new') {
        txt = 'PENDING';
      }
      if(status != 'new' && status != '00' && status != 'success') {
        txt = 'ERROR';
      }
      return txt;
    },
    loadRequests() {
      const self = this;
      self.$http.getLite(`v1/dashboard/requestlogs`)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              self.requests = rd.data.requestlogs;
          }
      })
      .catch(error => {
      const error_response = error.response;
      self.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error');
      })
    },
  },
  created() {
    this.apiuser = this.$route.meta.$authData;
    this.loadRequests();
    //this.$swal("Home home");
  },
};
