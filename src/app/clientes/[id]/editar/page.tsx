import AppLayout from "@/components/AppLayout";
import { supabase } from "@/lib/supabase";
import EditarClienteForm from "@/components/clientes/EditarClienteForm";

export default async function EditarClientePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: cliente } = await supabase
    .from("clientes")
    .select("*")
    .eq("id", id)
    .single();

  return (
    <AppLayout>
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Editar Cliente
      </h1>

      <EditarClienteForm cliente={cliente} />
    </AppLayout>
  );
}