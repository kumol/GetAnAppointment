<template>
  <div class="nav-border row justify-content-between" style="margin:0px;padding:0px" >
    <nav class="navbar navbar-expand-md ">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active"><router-link class="nav-link nav-title" to="/">Home</router-link> </li>
          <li class="nav-item"><router-link class="nav-link nav-title" to="/doctor">Doctor </router-link></li>
          <li class="nav-item"><router-link class="nav-link nav-title" to="/add">Add New Doctor</router-link></li>
          <li class="nav-item"><router-link class="nav-link nav-title" to="/doctor">Doctor </router-link></li>
          <li class="nav-item"><router-link class="nav-link nav-title" to="/organization/new">New Organization </router-link></li>
          <li class="nav-item"><router-link class="nav-link nav-title" to="/organization">Organization </router-link></li>
        </ul>
      </div>
    </nav>
    <div class="col-md-4 col-lg-3 signupdiv">
      <nav>
        <ul class="signuplogin">
          <li class="dropdown"><button class="button2 mr-10" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SignUp</button>
            <div class="dropdown-menu signupmenu" aria-labelledby="dropdownMenuLink">
                <div class="signupnotch"></div>
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="name" class="form-control input" id="fullName"  placeholder="Enter Full Name">

                  <!-- <input type="text" v-model="name" class="input" id=""/> -->
                </div>
                <div class="form-group">
                  <label for="number">Number</label>
                  <input type="text" v-model="number"  class="input" id=""/>
                </div>
              </form>
              <div>
                <button @click="join($event)" class="button" >Join</button>
                <p>{{name}}</p>
                <p>{{number}}</p>
              </div>
            </div>
          </li>
          <li class="dropdown"> <button class="button2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LogIn</button>
            <div class="dropdown-menu signupmenu" aria-labelledby="dropdownMenuLink">
              <div class="signupnotch"></div>
              <div>
                <form class="form-group">
                  <label for="number">Number</label>
                  <input type="text" v-model="number" name="number" class="input" id=""/>
                </form>
                <div>
                  <button class="button" @click="logIn($event)" >Login</button>
                </div>
              </div>
            </div>
          </li>
          <li>{{name}}</li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="body">
    <router-view />
  </div>
  
    <Footer></Footer>
  
</template>

<script>
import Footer from "./components/Layout/Footer"

export default {
  
  components: {
    Footer
  },
  data(){
    return{
      number:"",
      name:"",
    }
  },
  methods:{
    async logIn(event){
      event.preventDefault()
      console.log("go");
      fetch("http://localhost:8000/api/user/login",{
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({number:this.number})
      }).then((response)=>{
        //localStorage.setItem("user",JSON.stringify(response));
        //console.log(response);
        return response.json();
      }).then(json=>{
        localStorage.setItem("user",JSON.stringify(json));
        let appUser = localStorage.getItem('user');
        console.log(json);
        console.log(appUser);
      }).catch(err=>{
        console.log(err);
      })
    },
    join(event){
      event.preventDefault();
      console.log(this.name + " " + this.number);
      fetch("http://localhost:8000/api/user/save",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:this.name,number:this.number,accountType:5})
      }).then((response)=>{
        console.log(response.status);
        console.log(response);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
  .m-0{
    margin: 0px !important;
  }
  .input:focus {
    outline: none !important;
    border:1px solid #eeeeee;
    box-shadow: 0 0 2px #2195F3; 
  }

  .input{
    border-radius: 4px 4px;
    border: 1px solid #eeeeee!important;
    padding: 5px 10px;
  }

  .button{
    cursor: pointer;
    padding: 7px 20px;
    min-width: 100px;
    border: 1px solid white;
    background: #2195F3;
    color: #eeeeee;
    border-radius: 5px;
  }
  .button:focus{
    outline: none !important;
  }
  .button1{
    cursor: pointer;
    padding: 7px 20px;
    min-width: 100px;
    border: 1px solid #2195F3;
    background: #eeeeee;
    color: #2195F3;
    border-radius: 5px;
  }
  .button1:focus{
    outline: none !important;
  }
  .button2{
    cursor: pointer;
    padding: 7px 20px;
    min-width: 100px;
    border: 1px solid #2195F3;
    background: #ffffff;
    color: #2195F3;
    border-radius: 5px;
  }
  .button2:focus{
    outline: none !important;
  }
  .buttondelete{
    cursor: pointer;
    padding: 7px 20px;
    min-width: 100px;
    border: 1px solid red;
    background: #eeeeee;
    color: red;
    border-radius: 5px;
  }
  .buttondelete:focus{
    outline: none !important;
  }
  .nav-border{
    border-bottom: 2px solid #2195F3;
  }

  .body{
    background-color: #f4f4f4;
    min-height: 100vh;
  }

  .nav-title{
    color:#2195F3 !important;
  }
 
</style>
