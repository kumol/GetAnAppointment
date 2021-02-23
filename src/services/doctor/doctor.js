import axios from "axios"

export default class DoctorService{
    getDoctorById=(id)=>{
        return axios.get(`http://localhost:8000/api/doctor/${id}`);
    }
}