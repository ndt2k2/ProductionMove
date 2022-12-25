import './signIn.css';

import { useContext, useRef,useEffect,useState } from "react";
import Slider from './slider/slider'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiLockPasswordFill} from 'react-icons/ri'
export default function SignIn() {

    const username= useRef();
    const password= useRef();
  
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
  
                  <form className="signInBox">
                    <div>
                    {/* <span className='spanSI'>Username</span> */}
                    <BsFillPersonFill className="icon"/>
                    <input placeholder="Username" required className="signInInput" ref={username} autofocus /*onFocus={handleFocus}*/ />
                    </div>
                    <div>
                      {/* <span className='spanSI'>Password</span> */}
                      <RiLockPasswordFill className='icon'/>
                      <input
                      placeholder="Password"
                      type="password"
                      required
                      className="signInInput"
                      ref={password}
                    //   onFocus={handleFocus}
                    />
                    </div>
                
                    {/* <h4 style={{color: "red",display:"block",height:20 }}>
                      {formWarning}
                    </h4> */}
                    <button className="signInButton" type="submit"
                    // onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </form>
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
  