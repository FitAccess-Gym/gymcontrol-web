import { supabase } from "@/lib/supabase";

export async function obtenerSedes() {
  const { data, error } = await supabase
    .from("sedes")
    .select("*")
    .order("id");

  if (error) {
    throw error;
  }

  return data;
}

export async function crearSede(
  sede: any
) {
  const { data, error } = await supabase
    .from("sedes")
    .insert([sede])
    .select();

  if (error) {
    throw error;
  }

  return data;
}