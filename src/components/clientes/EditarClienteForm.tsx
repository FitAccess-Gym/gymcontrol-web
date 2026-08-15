"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { actualizarCliente } from "@/services/clientes.service";

export default function EditarClienteForm({
  cliente,
}: {
  cliente: any;
}) {
  const router = useRouter();

  const [guardando, setGuardando] = useState(false);

  const [form, setForm] = useState({
    tipo_documento: cliente.tipo_documento,
    documento: cliente.documento,
    nombres: cliente.nombres,
    apellidos: cliente.apellidos,
    celular: cliente.celular,
    correo: cliente.correo,
    estado: cliente.estado,
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


  const guardarCambios = async () => {
  try {
    setGuardando(true);

    await actualizarCliente(cliente.id, form);

    alert("✅ Cliente actualizado correctamente");

    router.push("/clientes");
    router.refresh();
  } catch (error) {
    console.error(error);
    alert("❌ Error al actualizar cliente");
  } finally {
    setGuardando(false);
  }
};

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">
      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-2">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Tipo Doc.
          </label>

          <select
            name="tipo_documento"
            value={form.tipo_documento}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-semibold uppercase 
                        shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="CE">CE</option>
            <option value="PASAPORTE">PASAPORTE</option>
            <option value="NIT">NIT</option>
          </select>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Documento
          </label>

          <input
            name="documento"
            value={form.documento}
            onChange={(e) =>
              setForm({
                ...form,
                documento: e.target.value.replace(/\D/g, ""),
              })
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase 
                  placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Estado
          </label>

          <select
            name="estado"
            value={form.estado}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-semibold uppercase 
                        shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <option value="ACTIVO">ACTIVO</option>
            <option value="SUSPENDIDO">SUSPENDIDO</option>
          </select>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Nombres
          </label>

          <input
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase 
                  placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
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
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase 
                  placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Celular
          </label>

          <input
            name="celular"
            value={form.celular}
            onChange={(e) =>
              setForm({
                ...form,
                celular: e.target.value.replace(/\D/g, ""),
              })
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase 
                  placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
            Correo
          </label>

          <input
              name="correo"
              value={form.correo}
              onChange={(e) =>
            setForm({
              ...form,
              correo: e.target.value.toUpperCase(),
            })
              }
              className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 uppercase placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
        
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
            type="button"
            onClick={guardarCambios}
            disabled={guardando}
            className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl"
        >
            {guardando
            ? "Actualizando..."
            : "Actualizar Cliente"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/clientes")}
          className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}