 
"use client";

import { useState } from "react";
import AppLayout from "@/components/AppLayout";

 
export default function NuevoGimnasioPage() {

const [nombreComercial, setNombreComercial] = useState("");
const [razonSocial, setRazonSocial] = useState("");
const [representante, setRepresentante] = useState("");
const [correo, setCorreo] = useState("");
const [nit, setNit] = useState(""); 
const [codigoInterno, setCodigoInterno] = useState(""); 
const [telefono, setTelefono] = useState(""); 
const [whatsApp, setWhatsApp] = useState(""); 
const [instagram, setInstagram] = useState("");
const [facebook, setFacebook] = useState(""); 
const [tiktok, setTiktok] = useState(""); 
const [paginaWeb, setPaginaWeb] = useState("");
const [logoName, setLogoName] = useState("Seleccionar archivo"); 

return ( 
    <AppLayout> 
        <div className="mb-8"> 
            <h1 className="text-3xl font-bold text-slate-800"> 
                🏋️ Nuevo Gimnasio 
            </h1> 
 
            <p className="mt-2 text-slate-500"> 
                Registro y configuración general del gimnasio. 
            </p> 
        </div> 
 


    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"> 
        <form className="grid grid-cols-12 gap-5"> 
 
        <div className="col-span-12 mb-2 border-b border-slate-200 pb-3"> 
            <h2 className="text-xl font-bold text-slate-800"> 
                Información General 
            </h2> 

            <p className="text-sm text-slate-500"> 
                Datos principales del gimnasio. 
            </p> 
        </div> 
 

        <div className="col-span-12 md:col-span-6"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
                Nombre Comercial
            </label> 
            
            <input
                value={nombreComercial}onChange={(e) =>setNombreComercial(e.target.value.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9\s]/g, "").toUpperCase())}
                inputMode="numeric" maxLength={40} //Limita cantidad de letars en campo
                placeholder="Ingrese nombre comercial" //Texto que aparece en la caja de texto
                className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
        </div> 
 

        <div className="col-span-12 md:col-span-6"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
                Razón Social 
            </label>

            <input
                value={razonSocial}onChange={(e) =>setRazonSocial(e.target.value.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9\s]/g, "").toUpperCase())}
                inputMode="numeric" maxLength={40} //Limita cantidad de letars en campo
                placeholder="Ingrese razón social" //Texto que aparece en la cajade texto
                className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" //Caja de texto personalizada
            /> 
        </div> 
 

        <div className="col-span-12 md:col-span-4"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
                NIT
            </label>

            <input 
                value={nit}onChange={(e) =>setNit(e.target.value.replace(/[^0-9]/g, ""))}
                inputMode="numeric" maxLength={15}
                placeholder="Ingrese NIT"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
        </div> 
 

        <div className="col-span-12 md:col-span-4"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              Código 
            </label> 

            <input   
                value={codigoInterno}onChange={(e) =>setCodigoInterno(e.target.value.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9\s]/g, "").toUpperCase())}
                inputMode="numeric" maxLength={6}
                placeholder="Ingrese código"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" 
            /> 
        </div> 
 







          <div className="col-span-12 md:col-span-4"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              Estado 
            </label> 
            <select className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"> 
              <option>ACTIVO</option> 
              <option>INACTIVO</option> 
            </select> 
          </div> 

        <div className="col-span-12 md:col-span-4">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
                Tipo Operación
            </label>
            <select className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200">
                <option>MULTI_SEDE</option>
                <option>SEDE_UNICA</option>
            </select>
        </div>


        <div className="col-span-12 md:col-span-4">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
                Plan
            </label>
            <select className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200">
                <option>BASICO</option>
                <option>PRO</option>
                <option>EMPRESARIAL</option>
            </select>
        </div>


        <div className="col-span-12 md:col-span-4">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
                Logo del Gimnasio
            </label>
            <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
                <label
                    htmlFor="logo"className="cursor-pointer bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700">
                        Examinar
                </label>
            <input
                id="logo"
                type="file"
                accept=".png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) => {
                const file = e.target.files?.[0];
                setLogoName(
                    file?.name || "Seleccionar archivo"
                );
                }}
            />
            <div className="flex flex-1 items-center px-4 text-slate-600">
                {logoName}
            </div>

            </div>
        </div>




          <div className="col-span-12 mt-4 mb-2 border-b border-slate-200 pb-3"> 
            <h2 className="text-xl font-bold text-slate-800"> 
              Contacto Corporativo 
            </h2> 
            <p className="text-sm text-slate-500"> 
              Información de contacto principal del gimnasio. 
            </p> 
          </div> 
 
          <div className="col-span-12 md:col-span-6"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              Propietario / Representante 
            </label> 
            <input 
            value={representante}onChange={(e) =>setRepresentante(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "").toUpperCase())}
                
              placeholder="Ingrese nombre del propietario o representante" 
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" 
            /> 
          </div> 
 
          <div className="col-span-12 md:col-span-6">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              Correo Principal 
            </label> 
            <input 
              placeholder="correo@empresa.com" 
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" 
            /> 
          </div> 
 
          <div className="col-span-12 md:col-span-6"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              Teléfono 
            </label> 
            <input 
              placeholder="3001234567" 
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" 
            /> 
          </div> 
 
          <div className="col-span-12 md:col-span-6"> 
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"> 
              WhatsApp 
            </label> 
            <input 
              placeholder="573001234567" 
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200" 
            /> 
          </div> 



<div className="col-span-12 md:col-span-6">
  <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
    Instagram
  </label>

  <input
    placeholder="@fitadmin+"
    className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
  />
</div>

<div className="col-span-12 md:col-span-6">
  <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
    Facebook
  </label>

  <input
    placeholder="FitAdmin+"
    className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
  />
</div>

<div className="col-span-12 md:col-span-6">
  <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
    TikTok
  </label>

  <input
    placeholder="@fitadmin+"
    className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
  />
</div>

<div className="col-span-12 md:col-span-6">
  <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">
    Página Web
  </label>

  <input
    placeholder="www.fitadmin.com"
    className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
  />
</div>

 
          <div className="col-span-12 mt-4"> 
            <button 
              type="submit" 
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700" 
            > 
              GUARDAR GIMNASIO 
            </button> 
          </div> 
 
        </form> 
      </div> 
    </AppLayout> 
  ); 
} 
 