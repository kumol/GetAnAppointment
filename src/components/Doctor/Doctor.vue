<template>
    <div class="row m-0">
        <div class="col-md-3 col-sm-4 p-10">
            <div class="m-10 bg-white">
                <div style="width:100%;">
                    <img style="width:100% !important;" src="https://clinicalnotebook.com/wp-content/uploads/2015/04/Doctor-Profile-Pic-Example.png" alt="">
                </div>
                <div class="p-10">
                    <p class="m-0">{{doctor.name}}</p>
                    <p class="m-0">Email</p>
                    <hr class="hr"/>
                    <p class="m-0"> {{doctor.email}} </p>
                </div>
            </div>
            
        </div>
        <div class="col-md-9 col-sm-8 p-10">
            <div class="row m-0">
                    <div class="col-md-3 col-sm-3 bg-white p-0">col3</div>
                    <div class="col-md-3 col-sm-3 bg-white p-0">col3</div>
                    <div class="col-md-3 col-sm-3 bg-white p-0">col3</div>
                    <div class="col-md-3 col-sm-3 bg-white p-0">col3</div>
                </div>
                <div class="row m-0 bg-white" style="margin-top:20px!important">
                    hello
                </div>
            <div class="m-10 bg-white ">
                
            </div>
        </div>
    </div>
</template>

<script>
import DoctorService from "../../services/doctor/doctor";
const doctorService = new DoctorService();
export default {
    name:"Doctor",
    data(){
        return {
            doctor:{},
            appointments:[]
        }
    },
    mounted(){
        this.getDoctorById(this.$route.params.id);
    },
    methods:{
        getDoctorById(id){
            doctorService.getDoctorById(id).then(response=>{
                if(response){
                    console.log(response);
                    this.doctor = response.data.doctor;
                    this.appointments = response.data.appointments;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>