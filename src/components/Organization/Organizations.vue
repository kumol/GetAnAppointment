<template>
    
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="organization in organizations" :key="organization._id">
                    <th scope="row"><a :href="'/organization/' + organization._id" >{{organization.name}}</a></th>
                    <td>{{organization.email}}</td>
                    <td>{{organization.address}}</td>
                    <td><button @click="selectForDelete(organization._id)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
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
        selectForDelete(event,id){
            event.preventDefault();
            axios.delete(configapi+`api/organization/delete/${id}`)
            .then(response => {
                if(response){
                    this.getAllOrganization();
                }
            });
        },

        getAllOrganization(){
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
       this.getAllOrganization();
    },
}
</script>