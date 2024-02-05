import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-md m-auto text-white">
  {error && <Alert message={error} />}

  <form
    onSubmit={handleSubmit}
    className="bg-gray-900 shadow-md rounded-lg px-10 pt-8 pb-6 mb-8"
  >
    <h2 className="text-3xl font-extrabold mb-6 text-center">Regístrate</h2>

    <div className="mb-8">
      <label
        htmlFor="email"
        className="block text-sm font-semibold mb-2 text-gray-400"
      >
        Correo Electrónico
      </label>
      <input
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500"
        placeholder="youremail@company.tld"
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
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500"
        placeholder="*************"
      />
    </div>

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition-transform hover:scale-105 mx-auto block"
    >
      Registrate
    </button>
  </form>

  <p className="mt-6 text-sm flex justify-center items-center text-gray-400">
    ¿Ya tienes una cuenta?
    <Link to="/login" className="ml-2 text-blue-400 hover:text-blue-500">
      Iniciar Sesión
    </Link>
  </p>
</div>

  );
}
