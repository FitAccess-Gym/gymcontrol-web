import AppLayout from "@/components/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-gray-500">
            Clientes Activos
          </h3>
          <p className="mt-2 text-3xl font-bold">
            1,245
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-gray-500">
            Ingresos del Mes
          </h3>
          <p className="mt-2 text-3xl font-bold">
            $12.500.000
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-gray-500">
            Asistencias Hoy
          </h3>
          <p className="mt-2 text-3xl font-bold">
            352
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-gray-500">
            Membresías Vencidas
          </h3>
          <p className="mt-2 text-3xl font-bold">
            18
          </p>
        </div>
      </div>
    </AppLayout>
  );
}