import axios from "axios";

export default class OrganizationService{
    getDoctorByOrganization = (id)=>{
        console.log(id);
        axios.get(`http://localhost:8000/api/doctor/organization/${id}`).then((response)=>{
            if(response.status == 200){
                console.log("success");
                console.log(response.data.doctors);
            }else{
                console.log("error occured");
            }
        });
    }

    getOrganizationDetails = (id) =>{
        axios.get(`http://localhost:8000/api/organization/${id}`).then(result=>{
            if(result.status == 200){
                console.log(result.data);
            }else{
                console.log("error occured");
            }
        });
    }
}