// LoginPage.js
import React from "react";
import LoginForm from "../component/FormLogin";
import { AuthProvider } from "../contex/AuthContext";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  );
};

export default LoginPage;
