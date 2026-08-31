import AppLayout from "@/components/AppLayout";

export default function NuevaSedePage() {
  return (
    <AppLayout>
      <div className="mb-8">
  <h1 className="text-3xl font-bold text-slate-800">
    🏢 Nueva Sede
  </h1>

  <p className="mt-2 text-slate-500">
    Registre una nueva sucursal del gimnasio.
  </p>
</div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <form className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
              Nombre
            </label>

            <input
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 uppercase shadow-sm transition 
                          focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              placeholder="Nombre de la sede"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
              Ciudad
            </label>

            <input
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 uppercase shadow-sm transition 
                          focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              placeholder="Ciudad"
            />
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
              Dirección
            </label>

            <input
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 uppercase shadow-sm transition 
                          focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              placeholder="Dirección"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
              Teléfono
            </label>

            <input
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition 
                          focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              placeholder="Teléfono"
            />
          </div>

          <div className="col-span-12">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 
                          hover:scale-105 hover:bg-blue-700"
            >
              GUARDAR
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}