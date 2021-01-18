<template>
    <form class="row m-0"> 
        <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="form-group">
                <label for="exampleInputFirstName">First Name</label>
                <input type="text" v-model="firstName" class="form-control" id="firstName"  placeholder="Enter First Name">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputLastName">Last Name</label>
                <input type="text" v-model="lastName" class="form-control" id="lastName"  placeholder="Enter Last Name">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"  v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </div>
        <div class="col-md-6 m-0 col-sm-6 col-xs-6">
            <div class="form-group">
                <label for="id">Doctor Id</label>
                <input type="text" v-model="doctorId" class="form-control" id="id" placeholder="Enter Your Id">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="sf">Address</label>
                <input type="text"  v-model="address" class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter Address">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <!-- <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div> -->
        </div>
        
        <button type="submit" @click="submitData($event)" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>

//import axios from 'axios'
export default {
    name:"AddDoctor",
    data(){
        return{
            users:[],
            firstName:"",
            lastName:"",
            name:"",
            email:"",
            doctorId: "",
            address: "",
            college: "",
            contactNumber: "",
            degrees: null,
            skill: null,
            position: "",
            chembers: null,
            image: "",
            appointment: null
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