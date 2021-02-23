import axios from "axios"

export default class DoctorService{
    getDoctorById=(id)=>{
        axios.get(`http://localhost:8000/api/doctor/${id}`).then(response=>{
            if(response){
                return response.data;
            }
        })
    }
}