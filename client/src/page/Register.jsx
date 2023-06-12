// RegisterPage.js
import React from "react";
import RegisterForm from "../component/FormRegister";
import { AuthProvider } from "../contex/AuthContext";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <AuthProvider>
        <RegisterForm />
      </AuthProvider>
    </div>
  );
};

export default RegisterPage;
