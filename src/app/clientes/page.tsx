
import Link from "next/link";
import AppLayout from "@/components/AppLayout";
import { supabase } from "@/lib/supabase";
import EliminarClienteButton from "@/components/clientes/EliminarClienteButton";


export default async function ClientesPage() {
  const { data: clientes } = await supabase
    .from("clientes")
    .select("*")
    .order("id", { ascending: false });

  return (
    <AppLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">
          Clientes
        </h1>

        
        <Link 
          href="/clientes/nuevo"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700" 
        > 
          Nuevo Cliente
        </Link> 

        
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-3 text-left">Tipo Doc.</th>
              <th className="p-3 text-left">Documento</th>
              <th className="p-3 text-left">Nombre Completo</th>
              <th className="p-3 text-left">Celular</th>
              <th className="p-3 text-left">Correo</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes?.map((cliente: any) => (
              <tr
                key={cliente.id}
                className="border-b border-slate-200 hover:bg-blue-50 transition"
              >
                <td className="p-3">
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    {cliente.tipo_documento}
                  </span>
                </td>

                <td className="p-3 font-semibold text-slate-700">
                  {cliente.documento}
                </td>

                <td className="p-3 text-slate-700">
                  {cliente.nombres} {cliente.apellidos}
                </td>

                <td className="p-3 text-slate-700">
                  {cliente.celular}
                </td>

                <td className="p-3 text-slate-700">
                  {cliente.correo}
                </td>

                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                    {cliente.estado}
                  </span>
                </td>


              

    <td className="p-3">
  <div className="flex gap-2">
    <Link
      href={`/clientes/${cliente.id}/editar`}
      className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600"
      >
      Editar
    </Link>

    <EliminarClienteButton id={cliente.id} />

  </div>
</td>





            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}