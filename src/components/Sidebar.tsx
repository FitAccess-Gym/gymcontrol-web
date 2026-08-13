export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 p-5 text-white">
      <h2 className="mb-8 text-2xl font-bold">
        GymControl Pro
      </h2>

      <nav className="flex flex-col gap-4">
        <div>Dashboard</div>
        <div>Clientes</div>
        <div>Membresías</div>
        <div>Pagos</div>
        <div>Asistencias</div>
        <div>Sedes</div>
        <div>Usuarios</div>
      </nav>
    </aside>
  );
}
