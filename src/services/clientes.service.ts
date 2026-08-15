import { supabase } from "@/lib/supabase";

export async function crearCliente(cliente: any) {
  const { data, error } = await supabase
    .from("clientes")
    .insert([cliente])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function actualizarCliente(
  id: number,
  cliente: any
) {
  const { data, error } = await supabase
    .from("clientes")
    .update(cliente)
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
}


export async function eliminarCliente(id: number) {
  const { error } = await supabase
    .from("clientes")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  return true;
}