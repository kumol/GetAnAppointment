<template>
    <div class="row">
        <div class="col-md-6">

        </div>
        <div class="col-md-6">
            <form>
                

            <div class="form-group">
                <label for="doctor">Select Doctor</label>
                <select v-model="doctor" class="form-control" id="doctor">
                    <option v-for="doc in doctors" :key="doc._id" v-bind:value="{ _id: doc._id }">{{doc.name}}</option>
                </select>
            </div>
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
        }
    },
    mounted(){
        this.getAllDoctor();
    }
}
</script>