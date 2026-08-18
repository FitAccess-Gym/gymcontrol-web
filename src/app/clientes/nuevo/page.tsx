"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import { crearCliente } from "@/services/clientes.service";

export default function NuevoClientePage() {
  const router = useRouter();

  const [guardando, setGuardando] = useState(false);

  const [form, setForm] = useState({
  tipo_documento: "CC",
  documento: "",
  ciudad: "BOGOTA",
  nombres: "",
  apellidos: "",
  celular: "",
  correo: "",
  estado: "ACTIVO",
});

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value.toUpperCase(),
  });
};

  const guardarCliente = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setGuardando(true);

      await crearCliente(form);

      router.push("/clientes");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error al guardar cliente");
    } finally {
      setGuardando(false);
    }
  };

  return (
<AppLayout>
  <div className="mb-8">
    <h1 className="text-4xl font-bold text-slate-800">
      Nuevo Cliente
    </h1>

    <p className="mt-2 text-slate-500">
      Registra un nuevo cliente en GymControl Pro
    </p>
  </div>

  <form
  onSubmit={guardarCliente}
  className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl"
>
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-slate-800">
      Información del Cliente
    </h2>

    <p className="mt-2 text-slate-500">
      Complete los datos requeridos para registrar un nuevo cliente.
    </p>
  </div>

  <div className="space-y-6">

    {/* FILA 1 */}
    <div className="grid grid-cols-12 gap-4">

      <div className="col-span-12 md:col-span-2">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Tipo de Documento
        </label>

        <select
          name="tipo_documento"
          value={form.tipo_documento}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-semibold uppercase shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <option value="CC">CC</option>
          <option value="TI">TI</option>
          <option value="CE">CE</option>
          <option value="PASAPORTE">PASAPORTE</option>
          <option value="NIT">NIT</option>
        </select>
      </div>

      <div className="col-span-12 md:col-span-4">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Número Documento
        </label>

        <input
          type="text"
          name="documento"
          value={form.documento}
          onChange={(e) =>
           setForm({
            ...form,
            documento: e.target.value.replace(/\D/g, ""),
           })
          }
          placeholder="Ingrese documento"
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          required
        />

      </div>

      <div className="col-span-12 md:col-span-3">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Ciudad
        </label>

        <select
          name="ciudad"
          value={form.ciudad}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-semibold uppercase shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
         <option value="BOGOTA">BOGOTÁ</option>
         <option value="MEDELLIN">MEDELLÍN</option>
         <option value="CALI">CALI</option>
         <option value="MANIZALES">MANIZALES</option>
         <option value="IBAGUE">IBAGUÉ</option>
         <option value="VILLAVICENCIO">VILLAVICENCIO</option>

        </select>
      </div>

      <div className="col-span-12 md:col-span-3">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Estado
        </label>

        <select
          name="estado"
          value={form.estado}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-semibold uppercase shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <option value="ACTIVO">ACTIVO</option>
          <option value="SUSPENDIDO">SUSPENDIDO</option>
        </select>
      </div>

    </div>

    {/* FILA 2 */}
    <div className="grid grid-cols-12 gap-4">

      <div className="col-span-12 md:col-span-6">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Nombres
        </label>

        <input
          name="nombres"
          value={form.nombres}
          onChange={handleChange}
          placeholder="Ingrese nombres"
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          required
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Apellidos
        </label>

        <input
          name="apellidos"
          value={form.apellidos}
          onChange={handleChange}
          placeholder="Ingrese apellidos"
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          required
        />
      </div>

    </div>

    {/* FILA 3 */}
    <div className="grid grid-cols-12 gap-4">

      <div className="col-span-12 md:col-span-6">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Celular
        </label>

        <input
          name="celular"
          value={form.celular}
          onChange={handleChange}
          placeholder="Ingrese celular"
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
          Correo Electrónico
        </label>

        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>

    </div>

  </div>

  <div className="mt-10 flex gap-4">
    <button
      type="submit"
      disabled={guardando}
      className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
    >
      {guardando
        ? "Guardando..."
        : "Guardar Cliente"}
    </button>

    <button
      type="button"
      onClick={() => router.push("/clientes")}
      className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100"
    >
      Cancelar
    </button>
  </div>
</form>
</AppLayout>
  );
}