<template>
    
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Doctor Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Details</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="organization in organizations" :key="organization._id">
                    <th scope="row">{{organization.name}}</th>
                    <td>{{organizations.location}}</td>
                    <td>{{organizations.address}}</td>
                    <td>{{organizations.details}}</td>
                    <td><button @click="selectForDelete(organizations._id)" class="btn btn-danger">Delete</button></td>
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
        selectForDelete(id){
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
                this.organizations = response.data.result;
            });
        }
    }, 
    mounted() {
       this.getAllOrganization();
    },
}
</script>