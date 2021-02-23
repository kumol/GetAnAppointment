<template>
    <div class="row m-0">
        <div class="col-md-3 col-sm-4 p-10">
            <div class="m-10 bg-white">
                profile
            </div>
            
        </div>
        <div class="col-md-9 col-sm-8 p-10">
            <div class=" m-10 bg-white ">
                details
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