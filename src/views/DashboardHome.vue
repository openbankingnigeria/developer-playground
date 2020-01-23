<template>
  <div class="dashboardcontent">
        <div class="profilemast clearfix">
          <div class="mastcard mc50 mcpr10 fleft">
            <div class="card clearfix">
              <div class="card-img fleft">
                <img src="profileimg.svg" alt="">
              </div>
              <div class="card-content fleft">
                <div class="card-content-title">
                  <span class="cctc">{{apiuser.fullName}}</span>
                </div>
                <div class="card-content-subtitle">
                  <span class="ccsc">{{apiuser.email}}</span>
                </div>
                <div class="card-content-action ccac">
                  <router-link class="btn btn-def btn-light-accent-shadowed" to="/dashboard/profile">
                    <i class="far fa-user"></i> <span class="ccact" id="dbedprofile">Edit Profile</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="mastcard mc50 mcpl10 fleft">
              <div class="card appblue clearfix">
                <div class="card-img fleft">
                  <img src="/fassets/apicon.svg" alt="">
                </div>
                <div class="card-content fleft">
                  <div class="card-content-title">
                    <span class="cctc dba">API KEY</span>
                  </div>
                  <div class="card-content-subtitle">
                    <span class="ccsc dba">{{apiuser.apiSecret}}</span>
                  </div>
                  <div class="card-content-action ccac">
                    <router-link to="/dashboard/settings" class="btn btn-def btn-light-accent-shadowed"> <span class="ccact">Revoke Key</span> </router-link>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <section class="contentcards clearfix" >
          <!-- <section class="atablecontainer">
            <header class="atableheader">
                <div class="atablecell">REQUEST TYPE</div>
                <div class="atablecell">DATE</div>
                <div class="atablecell">TIME</div>
                <div class="atablecell">IP ADDRESS</div>
                <div class="atablecell">STATUS</div>
                <div class="atablecell"> </div>
            </header>
            <div class="atablebody">
              <div class="atablerow">
                <div class="atablecell">POST</div>
                <div class="atablecell">08/09/19</div>
                <div class="atablecell">09:47 PM</div>
                <div class="atablecell">155.76.61.555</div>
                <div class="atablecell">Active</div>
                <div class="atablecell"><a href="#" class="btn btn-def btn-primary"><a href="#" class="btn btn-def">Click to view</a></a></div>
              </div>
            </div>
          </section> -->

          <table class="apptable" cellpadding="0">
            <thead class="apptablehead">
              <tr>
                <th class="rowpadder"></th>
                <th>REQUEST TYPE</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>IP ADDRESS</th>
                <th>STATUS</th>
                <th> </th>
                <th class="rowpadder"></th>
              </tr>
              <tr class="headerpadder">
                <th colspan="8"></th>
              </tr>
            </thead>
            <tbody class="apptablebody">
              <tr class="tablepadder">
                <td colspan="8"></td>
              </tr>
              <tr class="apptablerow" v-for="(req, i) in requests" :key="i" :class="i%2===0?'odd':'notodd'">
                <td class="rowpadder"></td>
                <td class="apptablecell fs">{{req.method}}</td>
                <td class="apptablecell">{{fdt(req.createdAt)}}</td>
                <td class="apptablecell">{{ftt(req.createdAt)}}</td>
                <td class="apptablecell">{{req.ip}}</td>
                <td class="apptablecell">
                  <a href="#" class="btn btn-sm"
                  :class="{'btn-pln-succ':req.status == '00' || 'success', 
                  'btn-pln-warning': req.status == 'new', 'btn-pln-danger': req.status == 'error' || (req.status != 'new' && req.status != '00' && req.status != 'success') }"
                  >{{getStatusText(req.status)}}</a>
                </td>
                <td class="apptablecell lt">
                  <router-link :to="{name:'requestdetails', params:{id: req.requestId}}" class="btn btn-sm btn-pln">Click to view</router-link>
                </td>
                <td class="rowpadder"></td>
              </tr>
              <tr class="tablepadder">
                <td colspan="8"></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardhome';

export default HomeServices;
</script>
