
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom"

function RequireAuth({allowedRoles}){
    
const {isLoggedIn,role}=useSelector((state)=>{ return state.auth});
    
return isLoggedIn&&allowedRoles.find((myRole)=>{return myRole==role})?(<Outlet/>):(isLoggedIn?(<Navigate to="/denied"/>):(<Navigate to="/login"/>))
    
}

export default RequireAuth;