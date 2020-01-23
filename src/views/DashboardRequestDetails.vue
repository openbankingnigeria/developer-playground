<template>
<div class="dashboardcontent">
        <div class="profilemast clearfix">
          <div class="mastcard mc33 mcpr6 fleft">
            <div class="card cardp25 clearfix">
              <div class="card-img fleft">
                <img src="/fassets/apicardicon.svg" alt="">
              </div>
              <div class="card-content cardcontentp20 fleft">
                <div class="card-content-title">
                  <span class="cctc">API CLIENT</span>
                </div>
                <div class="card-content-subtitle">
                  <span class="ccsc">{{apiuser.apiKey}}</span>
                </div>
                <!-- <div class="card-content-subtitle">
                    <span class="ccsc">florence@deedee.com</span>
                  </div> -->
              </div>
            </div>
          </div>
          <div class="mastcard mc33 mcpr3 mcpl3 fleft">
              <div class="card cardp25 clearfix">
                <div class="card-img fleft">
                  <img src="/fassets/datetimeicon.svg" alt="">
                </div>
                <div class="card-content cardcontentp20 fleft">
                  <div class="card-content-title">
                    <span class="cctc">DATE AND TIME</span>
                  </div>
                  <div class="card-content-subtitle">
                    <span class="ccsc">{{fdt(request.createdAt)}}</span>
                  </div>
                </div>
              </div>
          </div>
          <div class="mastcard mc33 mcpl6 fleft">
            <div class="card cardp25 clearfix">
              <div class="card-img fleft">
                <img src="/fassets/ipaddicon.svg" alt="">
              </div>
              <div class="card-content cardcontentp20 fleft">
                <div class="card-content-title">
                  <span class="cctc">IP address</span>
                </div>
                <div class="card-content-subtitle">
                  <span class="ccsc">{{request.ip}}</span>
                </div>
                <!-- <div class="card-content-subtitle">
                    <span class="ccsc">florence@deedee.com</span>
                  </div> -->
              </div>
            </div>
          </div>
        </div>
        <section class="contentcards clearfix" >
            <div class="contentcard mc50 mcpr10 fleft">
                <div class="contentcard-title">
                  Request
                </div>
                <div class="contentcard-body reqres clearfix">
                    <pre id="reqpre"></pre>
                </div>
            </div>
            <div class="contentcard mc50 mcpl10 fleft">
                <div class="contentcard-title">
                  Response
                </div>
                <div class="contentcard-body reqres clearfix">
                    <pre id="respre"></pre>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardrequestdetails';

export default HomeServices;
</script>
