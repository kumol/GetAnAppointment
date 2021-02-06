<template>
    <div class="row" style="margin:0px">
        <div class="col-md-6">

        </div>
        <div class="col-md-6" style="padding:50px">
            <form>
                <div class="dropdown  form-group">
                    <label for="doctor">Select Doctor</label>
                    <input type="text" v-model="orgName" placeholder="Type Organization Name" class="input form-control dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                    <div class="dropdown-menu doctor-find-menu custom-menu" aria-labelledby="dropdownMenuLink">
                        <div class="notch1"></div>
                        <a v-for="org in filteredOrganization" :key="org._id" @click="selectOrg($event,org)" class="dropdown-item">{{org.name}}</a>
                    </div>
                </div>

                <div class="dropdown  form-group">
                    <label for="doctor">Select Doctor</label>
                    <input type="text" v-model="doctorName" placeholder="Type Doctor Name" class="input form-control dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                    <div class="dropdown-menu doctor-find-menu custom-menu" aria-labelledby="dropdownMenuLink">
                        <div class="notch1"></div>
                        <a v-for="doc in filteredCommands" :key="doc._id" @click="selectDoctor($event,doc)" class="dropdown-item">{{doc.name}}</a>
                    </div>
                </div>

                <div class="form-group">
                    <label for="date">Select Date</label>
                    <input type="date" class="form-control input" v-model="date"/>
                </div>
            <!-- <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div> -->
            
            <!-- <div>
                <label for="doctor">Select Date</label>
                <input class="form-control" v-model="date" type="date" placeholder="date input">
            </div> -->

            <button class="button mr-10 mt-10">Go</button>
            <button class="button1 mr-10 mt-10">demo</button>
            <button class="button2 mr-10 mt-10">demo</button>
            <button class="buttondelete mr-10 mt-10">Delete</button>
             <button type="submit" @click="submitData($event)" class="btn btn-primary mt-10">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
//const configapi = require("../../../public/config.json").development.api;
export default {
    name:"Home",
    data(){
        return{
            doctors:[],
            organizations:[],
            organization:null,
            orgName:"",
            doctor:null,
            doctorName:"",
            user:"",
            date:Date,
            time:Date,
            sldf:"#2195F3",
            color:"#5ca5e0e0"
        }
    },
    methods:{
        getAllDoctor(){
            axios.get(
                "http://localhost:8000/api/doctor/all"
            ).then((response)=>{
                this.doctors = response.data.result;
            });
        },
        fixAppointment(){
            fetch("http://localhost:8000/api/appointment").then((response)=>{
                console.log(response);
            });
        },
        getAllOrganization(){
            axios.get("http://localhost:8000/api/organization/").then((response)=>{
                if(response.status == 200){
                    this.organizations = response.data.result;
                    console.log("success");
                    console.log(this.organizations);
                }else{
                    console.log("error occured");
                }
            });
        },
        submitData(event){
            event.preventDefault();
            console.log(this.doctor._id);
        },
        selectDoctor(event,doctor){
            event.preventDefault();
            this.doctor = doctor._id;
            this.doctorName = doctor.name;
            console.log(doctor);
        },
        selectOrg(event,org){
            event.preventDefault();
            console.log("selected ")
            this.organization = org._id;
            this.orgName = org.name;
            console.log(org);
        }
    },
    computed: {
        filteredCommands: function() {
            var matcher = new RegExp(this.doctorName, 'i')
            return this.doctors.filter(function(doctor){
                return matcher.test(doctor.name);
            })
        },
        filteredOrganization:function(){
            let matcher = new RegExp(this.orgName,'i');
            return this.organizations.filter(function(org){
                return matcher.test(org.name); 
            })
        }
    },
    mounted(){
        console.log("sdfdf")
        this.getAllDoctor();
        this.getAllOrganization();
    }
}
</script>