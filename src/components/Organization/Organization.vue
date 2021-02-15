<template>
    <div class="m-0 row">
        <div class="col-md-3 p-0">
            col-md-2
        </div>
        <div class="col-md-6 p-0">
            <p>{{organization.name}}</p>
        </div>
        <div class="col-md-3 p-15" style="background-color:white">
            <div class="div-header">
                <span>Doctors</span> <span><button class="button">Add</button></span>

            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import OrganizationService from "../../services/organization/orgservice";
const orgService = new OrganizationService();
const configapi = require("../../../public/config.json").development.api;
export default {
    name:"Organizations",
    data(){
        return{
            organizations:[],
            organization:{},
            org:{},
            doctors:[]
        }
    },
    methods:{
        getOrganization(){
            axios.get(configapi+"api/organization/").then((response)=>{
                if(response.status == 200){
                    this.organizations = response.data.result;
                    console.log("success");
                    console.log(this.organizations);
                }else{
                    console.log("error occured");
                }
            });
        }
    }, 
    mounted() {
       this.getOrganization();
       this.doctors = orgService.getDoctorByOrganization(this.$route.params.id).then(response=>{
           //this.doctors = response;
           console.log(response);
       }).catch(err=>{
           console.log(err);
       });
       orgService.getOrganizationDetails(this.$route.params.id).then(response=>{
           this.organization = response.data.organization;
       }).catch(error=>{
           console.log(error);
       });
    },
}
</script>