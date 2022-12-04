import './signIn.css';

import { useContext, useRef,useEffect,useState } from "react";


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
                <p>Sign in to connect to Production</p>
  
              </div>
              <div className="signInForm">
                <div className="signInFormContainer">
  
                  <form className="signInBox">
                    <div>
                      <label>Username</label>
                      <input placeholder="Username" required className="signInInput" ref={username} /*onFocus={handleFocus}*/ />
                    </div>
                    <div>
                      <label>Password</label>
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
  