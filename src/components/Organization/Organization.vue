<template>
    <div class="m-0 row">
        <div class="col-md-3 p-0">
            col-md-2
        </div>
        <div class="col-md-6 p-0">
            colmd 8
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
            organizations:[]
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
       orgService.getDoctorByOrganization(this.$route.params.id);
    },
}
</script>