<template>
    <div class="container">
        <div class="col-md-3 col-sm-4">
            profile
        </div>
        <div class="col-md-9 col-sm-8">
            details
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
            doctor:{}
        }
    },
    mounted(){
        doctorService.getDoctorById(this.$route.params.id).then(result=>{
            this.doctor = result;
        }).catch(error=>{
            console.log(error);
        })
    }
}
</script>

<style scoped>

</style>