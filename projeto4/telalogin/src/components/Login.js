import axios from "axios";
import { useState } from "react";
import image from "../components/gif/image.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
  };

  return (
    <div className="login-form-wrap">
      {user == null ? (
        <div>
          <h2>Login</h2>
          <h6>Utilize uma conta do backend</h6>
          <form className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn-login"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </form>
          <p>{error}</p>
        </div>
      ) : (
        <div className="login-form-conta">
          <h2>Olá, {user.name}</h2>
          <h5>Bem vindo(a) {user.name} :) </h5>
          <figure className="gif">
            <img src={image} alt="gif" width="150" height="150 " />
          </figure>
          <button
            type="button"
            className="btn-login btn-logout"
            onClick={(e) => handleLogout(e)}
          >
            Sair da conta
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
