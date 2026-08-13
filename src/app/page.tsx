export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          GymControl Pro
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Plataforma de Gestión de Gimnasios
        </p>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@empresa.com"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 p-3 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}