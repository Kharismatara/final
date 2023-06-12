// LoginForm.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../contex/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/user");

      if (response.ok) {
        const users = await response.json();
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
          login(user);
          console.log("Login berhasil!");
          alert("Login berhasil!");
        } else {
          console.log("Username atau password salah!");
          alert("Username atau password salah!");
        }
      } else {
        console.log("Login gagal!");
        alert("Login gagal!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
