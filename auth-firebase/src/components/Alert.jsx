export function Alert({ message }) {
  return (
    <div
      className="bg-gradient-to-r from-red-300 via-red-400 to-red-500 border border-red-600 text-white px-6 py-4 rounded-md mb-4 text-center"
      role="alert"
    >
      <span className="sm:inline block">{message}</span>
    </div>
  );
}
