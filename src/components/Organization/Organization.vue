<template>
    <div>
        <p>hello org</p>
    </div>
</template>
<script>
import axios from "axios"
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
    },
}
</script>