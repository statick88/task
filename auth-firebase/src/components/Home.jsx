import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="bg-gray-900 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={user.photoURL || 'placeholder.jpg'}
            alt="User Avatar"
          />
          <span className="text-lg font-semibold">{user.displayName || user.email}</span>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Landing Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Programación Web Integrativa</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-700 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Acerca de Frameworks de JavaScript</h2>
            <p className="text-gray-300">Explora los diversos frameworks de JavaScript y descubre sus características distintivas. Aprende cómo estos frameworks pueden mejorar tu experiencia en el desarrollo web.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-700 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-2">ReactJS</h2>
            <p className="text-gray-300">React es una biblioteca de JavaScript para construir interfaces de usuario. Descubre sus componentes reutilizables y su enfoque declarativo.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-700 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Vue.js</h2>
            <p className="text-gray-300">Vue.js es un framework progresivo para la construcción de interfaces de usuario. Explora su flexibilidad y la integración sencilla en proyectos existentes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
