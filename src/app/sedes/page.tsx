 

import AppLayout from "@/components/AppLayout"; 
import { obtenerSedes } from "@/services/sedes.service"; 
import Link from "next/link"; 
 
export default async function SedesPage() { 
  const sedes = await obtenerSedes(); 
 
  return ( 
    <AppLayout> 
      <div className="mb-8 flex items-center justify-between"> 
        <h1 className="text-3xl font-bold text-slate-800"> 
          Sedes 
        </h1> 
 
        <Link 
          href="/sedes/nuevo" 
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700" 
        > 
          Nueva Sede 
        </Link> 
      </div> 
 
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"> 
        <table className="w-full"> 
          <thead className="bg-slate-100"> 
            <tr> 
              <th className="p-3 text-left">Nombre</th> 
              <th className="p-3 text-left">Ciudad</th> 
              <th className="p-3 text-left">Dirección</th> 
              <th className="p-3 text-left">Teléfono</th> 
            </tr> 
          </thead> 
 
          <tbody> 
            {sedes?.map((sede) => ( 
              <tr 
                key={sede.id} 
                className="border-t border-slate-200" 
              > 
                <td className="p-3">{sede.nombre}</td> 
                <td className="p-3">{sede.ciudad}</td> 
                <td className="p-3">{sede.direccion}</td> 
                <td className="p-3">{sede.telefono}</td> 
              </tr> 
            ))} 
          </tbody> 
        </table> 
      </div> 
    </AppLayout> 
  ); 
} 
 