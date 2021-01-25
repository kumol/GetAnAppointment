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
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
  button:focus{
    outline: none !important;
    
  }
  .nav-border{
    border-bottom: 2px solid #2195F3;
  }

  .body{
    background-color: #fbfbfb;
  }

  .nav-title{
    color:#2195F3 im !important;
  }
  .notch{
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #eeeeee;
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
</style>
