<template>
    <form class="row m-0"> 
        
        
    </form>
</template>
<script>

//import axios from 'axios'
export default {
    name:"AddDoctor",
    data(){
        return{
            skill: null
        }
    },
    methods:{
         async submitData(event){
             event.preventDefault()
             let doctorDetails = {
                name: this.firstName+ " " + this.lastName,
                email: this.email,
                contactNumber : this.contactNumber,
                address: this.address,
                accoutTye: 3,
                doctorId: this.doctorId,
                image:""
             }
            fetch("http://localhost:8000/api/doctor/save",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(doctorDetails)
            }).then((response)=>{
                console.log(response);
            })

            
        }
    },
    // async mounted() {
        // const data = await axios.get(
        //     "https://jsonplaceholder.typicode.com/users"
        // );
        // console.log(data);
        // this.users = data.data;
    // },
}
</script>

<style lang="style" scoped>
    
</style>