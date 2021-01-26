<template>
  <div class="nav-border">
    <nav class="navbar navbar-expand-md">
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
  </div>
  <div class="body">
    <router-view />
  </div>
  
    <Footer></Footer>
  
</template>

<script>
import Footer from "./components/Layout/Footer"

export default {
  name: 'App',
  components: {
    Footer
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
  .notch{
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #ffffff;
    margin-top: -23px;
    margin-left: 150px;
  }
  .custom-menu{
    top: 15px !important;
    border: 1px solid #eeeeee !important;
    box-shadow: 1px 1px 15px #eeeeee !important;
    border-radius: 5px !important;
  }

  .doctor-find-menu{
    width: 300px !important;
  }

  .mt-10{
    margin-top: 10px;
  }
  .mr-10{
    margin-right: 10px;
  }
</style>
