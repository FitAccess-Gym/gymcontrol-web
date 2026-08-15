 
 
 

"use client"; 
 
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  UserCog, 
  Ticket, 
  CreditCard, 
  ClipboardCheck, 
  Settings, 
} from "lucide-react"; 
 
export default function Sidebar() { 
  const pathname = usePathname(); 
 
  const menuClass = (href: string) => 
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-slate-800 hover:translate-x-1 ${ 
      pathname === href 
        ? "bg-blue-600 text-white shadow-lg" 
        : "text-slate-300" 
    }`; 
 
  return ( 
    <aside className="flex min-h-screen w-72 flex-col bg-slate-900 text-white shadow-2xl"> 
      <div className="border-b border-slate-800 px-6 py-6"> 
        <h1 className="text-2xl font-bold tracking-wide"> 
          GymControl Pro 
        </h1> 
        <p className="mt-1 text-sm text-slate-400"> 
          Gestión Integral de Gimnasios 
        </p> 
      </div> 
 
      <nav className="flex-1 px-4 py-6 space-y-2"> 
        <p className="px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Principal</p> 
 
        <Link href="/dashboard" className={menuClass("/dashboard")}> 
          <LayoutDashboard size={20} /> 
          <span>Dashboard</span> 
        </Link> 
 
        <p className="px-3 pt-6 text-xs font-bold uppercase tracking-widest text-slate-500">Gestión</p> 
 
        <Link href="/clientes" className={menuClass("/clientes")}> 
          <Users size={20} /> 
          <span>Clientes</span> 
        </Link> 
 
        <Link href="/sedes" className={menuClass("/sedes")}> 
          <Building2 size={20} /> 
          <span>Sedes</span> 
        </Link> 
 
        <Link href="/usuarios" className={menuClass("/usuarios")}> 
          <UserCog size={20} /> 
          <span>Usuarios</span> 
        </Link> 
 
        <p className="px-3 pt-6 text-xs font-bold uppercase tracking-widest text-slate-500">Operación</p> 
 
        <Link href="/membresias" className={menuClass("/membresias")}> 
          <Ticket size={20} /> 
          <span>Membresías</span> 
        </Link> 
 
        <Link href="/pagos" className={menuClass("/pagos")}> 
          <CreditCard size={20} /> 
          <span>Pagos</span> 
        </Link> 
 
        <Link href="/asistencias" className={menuClass("/asistencias")}> 
          <ClipboardCheck size={20} /> 
          <span>Asistencias</span> 
        </Link> 
 
        <p className="px-3 pt-6 text-xs font-bold uppercase tracking-widest text-slate-500">Sistema</p> 
 
        <Link href="/configuracion" className={menuClass("/configuracion")}> 
          <Settings size={20} /> 
          <span>Configuración</span> 
        </Link> 
      </nav> 
 
      <div className="border-t border-slate-800 p-6"> 
        <div className="rounded-xl bg-slate-800 p-4"> 
          <p className="font-semibold">HAMMER JAIR CRUZ GUAJE</p> 
          <p className="text-sm text-slate-400">Administrador</p> 
          <p className="mt-2 text-xs text-green-400">● En línea</p> 
        </div> 
      </div> 
    </aside> 
  ); 
} 
 