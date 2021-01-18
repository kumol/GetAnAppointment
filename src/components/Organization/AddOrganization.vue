<template>
    <form class="row m-0"> 
        <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="firstName" class="form-control" id="name"  placeholder="Enter Name">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"  v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Details">Details</label>
                <input type="text"  v-model="details" class="form-control" id="details" placeholder="Enter Details">
                <small id="details" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </div>
        <div class="col-md-6 m-0 col-sm-6 col-xs-6">
            <div class="form-group">
                <label for="contactNumber">Contact Number</label>
                <input type="text" v-model="contactNumber" class="form-control" id="id" placeholder="Enter Your Number">
                <small id="contactNumber" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="sf">Address</label>
                <input type="text"  v-model="address" class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter Address">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="id">Website</label>
                <input type="text" v-model="website" class="form-control" id="id" placeholder="Enter Your Website">
                <small id="website" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
const api = require("../../../public/config.json");
export default {
    name:"AddOrganization",
    data(){
        return{
            name:"",
            email:"",
            doctor: [],
            address: "",
            contactNumber: "",
            organization_Id: "",
            details: "",
            accountType: 2,
            website: "",
            logo: ""
        }
    },
    methods:{
         async submitData(event){
             event.preventDefault()
             let organizationDetails = {
                name:this.name,
                email: this.email,
                contactNumber : this.contactNumber,
                address: this.address,
                accoutTye: 2,
                website: this.website,
                logo:""
             }
            fetch(api+"api/organization/save",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(organizationDetails)
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