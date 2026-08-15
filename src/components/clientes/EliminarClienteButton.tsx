"use client";

import { useRouter } from "next/navigation";
import { eliminarCliente } from "@/services/clientes.service";

export default function EliminarClienteButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  const handleEliminar = async () => {
    const confirmar = window.confirm(
      "¿Está seguro de eliminar este cliente?"
    );

    if (!confirmar) return;

    try {
      await eliminarCliente(id);

      alert("✅ Cliente eliminado correctamente");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("❌ Error al eliminar el cliente");
    }
  };

  return (
    <button
      onClick={handleEliminar}
      className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
    >
      Eliminar
    </button>
  );
}