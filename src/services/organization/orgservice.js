import axios from "axios";

export default class OrganizationService{
    getDoctorByOrganization = (id)=>{
        console.log(id);
        axios.get(`http://localhost:8000/api/doctor/organization/${id}`).then((response)=>{
            if(response.status == 200){
                return response.data;
            }else{
                console.log("error occured");
            }
        });
    }

    getOrganizationDetails = async (id) => {
        try{
            return await axios.get(`http://localhost:8000/api/organization/${id}`);
        }catch(error){
            return error;
        }
    }
}