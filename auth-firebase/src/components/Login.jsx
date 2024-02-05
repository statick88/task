import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-md m-auto">
  {error && <Alert message={error} />}

  <form
    onSubmit={handleSubmit}
    className="bg-gray-900 shadow-md rounded-lg px-10 pt-8 pb-6 mb-8 text-white"
  >
    <h2 className="text-3xl font-extrabold mb-6 text-center">Bienvenido de nuevo</h2>

    <div className="mb-8">
      <label
        htmlFor="email"
        className="block text-sm font-semibold mb-2 text-gray-400"
      >
        Correo Electrónico
      </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500"
        placeholder="tucorreo@correo.com"
      />
    </div>
    <div className="mb-8">
      <label
        htmlFor="password"
        className="block text-sm font-semibold mb-2 text-gray-400"
      >
        Contraseña
      </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500"
        placeholder="*************"
      />
    </div>

    <div className="flex items-center justify-between mb-6">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition-transform hover:scale-105"
        type="submit"
      >
        Iniciar Sesión
      </button>
      <a
        className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
        href="#!"
        onClick={handleResetPassword}
      >
        ¿Olvidaste tu contraseña?
      </a>
    </div>

    <p className="text-center text-gray-400 mb-4">
      O inicia sesión con tu cuenta de Google
    </p>
    <button
      onClick={handleGoogleSignin}
      className="bg-gray-800 hover:bg-gray-700 text-white shadow-md rounded-full border-2 border-gray-700 py-3 px-6 w-full transition-colors"
    >
      Google Login
    </button>

    <p className="mt-6 text-sm flex justify-center items-center text-gray-400">
      ¿Aún no tienes una cuenta?
      <Link to="/register" className="ml-2 text-blue-400 hover:text-blue-500">
        Regístrate
      </Link>
    </p>
  </form>
</div>

  );
}
