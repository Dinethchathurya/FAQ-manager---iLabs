import React from "react";
import AuthButton from "../components/AuthButton";
import AuthHeading from "../components/AuthHeading";
import AuthLabel from "../components/AuthLabel";
import AuthInputField from "../components/AuthInputField";

const RegisterPage = () => {
  return (
    <>
      <body
        className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary"
      >
        <main className="container d-flex flex-column align-items-center text-center w-50 m-auto">
          <form className="w-50"> 
            <AuthHeading name="Please Register" />
            <div className="form-floating mb-3">

              <AuthInputField 
                type="email" 
                id="floatingInput" 
                placeholder="name@example.com" 
              />

              <AuthLabel name="Email address" />

            </div>
            <div className="form-floating mb-3">
              
              <AuthInputField 
                type="password" 
                id="floatingPassword" 
                placeholder="Password"
              />

              <AuthLabel name="Password" />

            </div>

            <AuthButton text="Register" />
            
          </form>
        </main>
      </body>
    </>
  );
};

export default RegisterPage;
