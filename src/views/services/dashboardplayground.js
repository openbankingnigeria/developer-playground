import SwaggerUI from "swagger-ui";

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      requests: [],
      loading: false,
    }
  },
  created() {
    this.apiuser = this.$route.meta.$authData;
  },
  mounted() {
    const self = this;
    const ui = SwaggerUI({
      dom_id: "#myDomId",
      //spec: SwaggerSpec,https://obsandbox.herokuapp.com/swagger.json
      url: "https://sandbox.openbanking.ng/api/v1/swagger.json",
      presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
      deepLinking: false,
      lasyout: "StandaloneLayout",
      onComplete: function() {
        ui.preauthorizeApiKey(
          "Bearer",
          `Bearer ${self.apiuser.apiSecret}`
        );
      },
      requestInterceptor: function(request) {
        console.log(request);
      }
    });
  }
};
