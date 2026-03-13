'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Globe, Terminal, Server, Cpu, Layers, Activity } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Ciberseguridad',
    icon: <Lock className="w-8 h-8" />,
    items: [
      'Ethical Hacking & Pentesting',
      'Auditorías de Seguridad',
      'Evaluación de Vulnerabilidades',
      'Hardening de Servidores',
      'Seguridad de Endpoints'
    ]
  },
  {
    title: 'Seguridad de la Información',
    icon: <Shield className="w-8 h-8" />,
    items: [
      'Implementación ISO 27001',
      'Auditoría Interna ISO',
      'Análisis de Riesgos',
      'Políticas y Procedimientos',
      'Gestión de Incidentes'
    ]
  },
  {
    title: 'Redes e Infraestructura',
    icon: <Globe className="w-8 h-8" />,
    items: [
      'Configuración Routers & Switches',
      'Seguridad Perimetral (Firewall)',
      'Segmentación de Red',
      'Diseño de Arquitectura LAN/WAN',
      'Configuración de Dispositivos'
    ]
  },
  {
    title: 'Automatización y TI',
    icon: <Terminal className="w-8 h-8" />,
    items: [
      'Automatización con Python',
      'Scripts de Monitoreo Real-time',
      'Optimización de Procesos',
      'Consultoría Técnica Especializada'
    ]
  },
  {
    title: 'Consultoría Financiera',
    icon: <Activity className="w-8 h-8" />,
    items: [
      'Planificación Financiera Estratégica',
      'Gestión de Flujo de Caja',
      'Análisis y Control Presupuestario',
      'Auditoría y Cumplimiento Contable',
      'Optimización de Procesos Administrativos'
    ]
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#f0fdf4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-24">
          <div className="lg:col-span-1">
            <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6">Portafolio de Especialidad</h2>
            <h3 className="text-5xl font-black text-primary mb-8 leading-tight tracking-tighter">Servicios de Consultoría Integral</h3>
            <p className="text-emerald-900/60 mb-10 text-lg leading-relaxed">
              Soluciones técnicas de élite diseñadas para fortalecer la resiliencia digital de su organización con estándares globales.
            </p>
            <div className="relative p-2 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(6,78,59,0.1)] border border-emerald-100/50 overflow-hidden transform hover:-rotate-2 transition-transform duration-500">
               <img src="/images/services-bg.png" alt="Infrastructure" className="rounded-[1.5rem] w-full h-[300px] object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {serviceCategories.map((cat, i) => (
              <motion.a
                key={i}
                href="#contacto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(6,78,59,0.03)] border border-emerald-50 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)] transition-all group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-black text-primary mb-6 tracking-tight">{cat.title}</h4>
                <ul className="space-y-4 flex-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-3 text-sm font-medium text-emerald-900/70">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-accent font-black text-xs flex items-center uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <span>Solicitar Información</span>
                  <div className="ml-3 w-8 h-[2px] bg-accent" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
