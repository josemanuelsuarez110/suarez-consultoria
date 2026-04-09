import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Crosshair, Calculator, Globe, Lock, Cpu } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

const services = [
  {
    title: "Auditoría & Cumplimiento",
    subtitle: "ISO/IEC 27001 & Gobernanza IT",
    description: "Evaluación senior de infraestructuras críticas y cumplimiento normativo. Especialista en blindar la integridad y disponibilidad de la información organizacional.",
    icon: <Lock className="w-8 h-8" />,
    features: ["ISO 27001 Compliance", "Control de Riesgos IT", "Gobernanza de Datos"],
    color: "blue"
  },
  {
    title: "Hacking Ético",
    subtitle: "Ofensive Security & Red Teaming",
    description: "Identificación proactiva de vulnerabilidades mediante técnicas avanzadas de ataque simulado. No esperes a que ocurra un desastre, simúlalo.",
    icon: <Crosshair className="w-8 h-8" />,
    features: ["Pentesting Web/Red", "Vulnerability Assessment", "Social Engineering Tests"],
    color: "cyber"
  },
  {
    title: "Estrategia Financiera",
    subtitle: "5 Pilares del Éxito",
    description: "Consultoría de alto nivel enfocada en: Planificación, Flujo de Caja, Presupuesto, Auditoría y Optimización de recursos.",
    icon: <Calculator className="w-8 h-8" />,
    features: ["Planificación Fiscal", "Control de Flujo", "Auditoría Contable"],
    color: "emerald"
  }
]

export const ServicesMatrix = () => {
  return (
    <SectionContainer id="services">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Matriz de <span className="text-cyber-blue">Servicios.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Soluciones modulares diseñadas para organizaciones que no solo buscan seguridad, sino una arquitectura empresarial sólida y resiliente.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-[100px] font-black text-white/5 leading-none">STRATEGY</span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.15}>
            <div className="group relative glass-card p-10 min-h-[450px] flex flex-col justify-between hover:border-white/20 transition-all duration-500">
              <div>
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-cyber-blue group-hover:text-slate-950 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="text-xs font-bold text-cyber-blue uppercase tracking-widest mb-2">{service.subtitle}</div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-cyber-blue/50 to-transparent group-hover:h-full transition-all duration-500" />
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-cyber-blue/50 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
