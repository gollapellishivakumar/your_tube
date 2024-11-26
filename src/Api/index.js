import axios from "axios"
const API=axios.create({baseURL:`http://localhost:5000/`})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("Profile")){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
})

export const login=(authdata)=>API.post("/user/login",authdata);
export const updatechaneldata=(id,updatedata)=>API.patch(`/user/update/${id}`,updatedata)
export const fetchallchannel=()=>API.get("/user/getallchannel");

export const uploadvideo=(filedata,fileoption)=>API.post("/video/uploadvideo",filedata,fileoption)
export const getvideos=()=>API.get("/video/getvideos");
export const likevideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
export const viewsvideo=(id)=>API.patch(`/video/view/${id}`);