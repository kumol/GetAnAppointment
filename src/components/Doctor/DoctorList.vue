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
                <tr v-for="doctor in doctors" :key="doctor._id">
                    <th scope="row"> {{doctor.doctorId}}</th>
                    <td> <a :href="'/doctor/' + doctor._id">{{doctor.name}}</a> </td>
                    <td>{{doctor.email}}</td>
                    <td>{{doctor.details}}</td>
                    <td><button @click="selectForDelete(doctor._id)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios"
const configapi = require("../../../public/config.json").development.api;
export default {
    name:"DoctorList",
    data(){
        return{
            doctors:[]
        }
    },
    methods:{
        selectForDelete(event,id){
            event.preventDefault();
            console.log(id)
            console.log(configapi);
            axios.delete(configapi+`api/doctor/delete/${id}`)
            .then(response => {
                this.getAllDoctor();
                console.log(response.status);
            });
        },

        getAllDoctor(){
            axios.get(
                "http://localhost:8000/api/doctor/all"
            ).then((response)=>{
                this.doctors = response.data.result;
            });
        }
    }, 
    mounted() {
       this.getAllDoctor();
    },
}
</script>