import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";


export const Login = () => {
    //  use reqres to log user in.
    const {handleAuth}=useContext(AuthContext)

    const navigate=useNavigate()
  
    return (
      <form className="loginform" onSubmit={(e)=>{
          handleAuth(true);
          navigate(-1, {replace: true});
          e.preventDefault()
      }}>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };