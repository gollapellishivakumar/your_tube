import {combineReducers} from "redux";
import authreducer from "./auth";
import currentuserreducer from "./currentuser";
import chanelreducer from "./chanel";
import videoreducer from "./video";
export default combineReducers({
    authreducer,
    currentuserreducer,
    videoreducer,
    chanelreducer,
});