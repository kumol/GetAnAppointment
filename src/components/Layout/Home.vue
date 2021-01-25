<template>
    <div class="row" style="margin:0px">
        <div class="col-md-6">

        </div>
        <div class="col-md-6" style="padding:50px">
            <form>
                

            <!-- <div class="form-group">
                
                <select v-model="doctor" class="form-control" id="doctor">
                    <option v-for="doc in doctors" :key="doc._id" v-bind:value="{ _id: doc._id }">{{doc.name}}</option>
                </select>
            </div> -->

            <div class="dropdown  form-group">
                <label for="doctor">Select Doctor</label>
                <input type="text" v-model="doctorName" placeholder="Type Doctor Name" class="input dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                <div class="dropdown-menu doctor-find-menu custom-menu" aria-labelledby="dropdownMenuLink">
                   <div class="notch"></div>
                    <a v-for="doc in filteredCommands" :key="doc._id" @click="selectDoctor($event,doc)" class="dropdown-item">{{doc.name}}</a>
                </div>
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
            
            <div>
                <label for="doctor">Select Date</label>
                <input class="form-control" v-model="date" type="date" placeholder="date input">
            </div>

             <button type="submit" @click="submitData($event)" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Home",
    data(){
        return{
            doctors:[],
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
        submitData(event){
            event.preventDefault();
            console.log(this.doctor._id);
        },
        selectDoctor(event,doctor){
            event.preventDefault();
            this.doctor = doctor._id;
            this.doctorName = doctor.name;
            console.log(doctor);
        }
    },
    computed: {
        filteredCommands: function() {
            var matcher = new RegExp(this.doctorName, 'i')
            return this.doctors.filter(function(doctor){
                return matcher.test(doctor.name)
            })
        }
    },
    mounted(){
        this.getAllDoctor();
    }
}
</script>