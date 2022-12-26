import './signIn.css';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { useContext, useRef,useEffect,useState } from "react";
import Slider from './slider/slider'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiLockPasswordFill} from 'react-icons/ri'
// import { loginRoute } from "src/"



export default function SignIn() {
  // const navigate = useNavigate();
  // const [values, setValues] = useState({ username: "", password: "" });
  // const handleChange = (event) => {
  //   setValues({ ...values, [event.target.name]: event.target.value });
  // };
  // const validateForm = () => {
  //   const { username, password } = values;
  //   const toastOptions = {
  //     position: "bottom-right",
  //     autoClose: 8000,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "dark",
  //   };
  //   if (username === "") {
  //     toast.error("Email and Password is required.", toastOptions);
  //     return false;
  //   } else if (password === "") {
  //     toast.error("Email and Password is required.", toastOptions);
  //     return false;
  //   }
  //   return true;
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     const { username, password } = values;
  //     const { data } = await axios.post(loginRoute, {
  //       username,
  //       password,
  //     });
  //     // if (data.status === false) {
  //     //   toast.error(data.msg, toastOptions);
  //     // }
  //     if (data.status === true) {
  //       localStorage.setItem(
  //         process.env.REACT_APP_LOCALHOST_KEY,
  //         JSON.stringify(data.user)
  //       );

  //       navigate("/");
  //     }
  //   }
  // };
  return (
      <div className="signIn">
        <div className="signInWrapper">
          
          <div className="signInContainer">
            <div className="signInContent">
  
              <div className= "signInHeader">
                <h4 className="signInTitle">Production Move</h4>
                <h4>Sign In</h4>
                <Slider className = "slider"/>
              </div>
              <div className="signInForm">
                <div className="signInFormContainer">
  
                  <form className="signInBox" 
                  // onSubmit={(e) => handleSubmit(e)}
                  >
                    <div>
                    {/* <span className='spanSI'>Username</span> */}
                    <BsFillPersonFill className="iconSignin"/>
                    <input placeholder="Username" required 
                    className="signInInput" 
                    // ref={username} 
                    autofocus
                    // onChange={(e) => handleChange(e)} /*onFocus={handleFocus}*/ 
                    />
                    </div>
                    <div>
                      {/* <span className='spanSI'>Password</span> */}
                      <RiLockPasswordFill className='iconSignin'/>
                      <input
                      placeholder="Password"
                      type="password"
                      required
                      className="signInInput"
                      // ref={password}
                      // onChange={(e) => handleChange(e)}
                    //   onFocus={handleFocus}
                    />
                    </div>
                
                    {/* <h4 style={{color: "red",display:"block",height:20 }}>
                      {formWarning}
                    </h4> */}
                    <button className="signInButton" type="submit"
                    >
                      Sign In
                    </button>
                  </form>
                  {/* <ToastContainer /> */}
                </div>
              </div>
              <div className="signInFooter">
                <p>© 2022 Produce Move by Pro-team</p>
              </div>
  
              
  
            </div>
            
            
          </div>
          
        </div>
      </div>
      
    );
  }
  