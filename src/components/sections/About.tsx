'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Doble Titulación',
    desc: 'Ingeniero en Sistemas de Información y Licenciado en Contabilidad.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Ciberseguridad Avanzada',
    desc: 'Especialista en Ethical Hacking, Cisco Networking e ISO 27001.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Gestión Financiera',
    desc: 'Experto en control presupuestario, flujo de caja y auditoría financiera.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Transformación Digital',
    desc: 'Liderando procesos de modernización institucional por más de 10 años.'
  }
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6">Nuestra Esencia</h2>
            <h3 className="text-5xl md:text-6xl font-black text-primary mb-10 leading-[1.1] tracking-tighter">
              Sinergia entre <span className="text-emerald-500">Tecnología</span>, Seguridad y Finanzas.
            </h3>
            <p className="text-emerald-950/60 text-xl mb-12 leading-relaxed font-medium">
              Liderado por Jose Manuel Suarez, combinamos formación técnica de élite (Cisco, ISC2, Seguridad CERO) 
              con una visión estratégica integral. Nuestra propuesta une la robustez de los sistemas de información 
              con la precisión del análisis estratégico empresarial.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-4 group cursor-default">
                  <div className="text-accent bg-emerald-50 p-3 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100/50">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary text-lg mb-1 tracking-tight">{f.title}</h4>
                    <p className="text-sm font-medium text-emerald-900/50 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(6,78,59,0.15)] border border-emerald-100/30 group">
               <img 
                src="/images/about-workspace.png" 
                alt="Workspace Background" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
               
               <div className="absolute bottom-10 left-10 right-10">
                  <div className="backdrop-blur-2xl bg-white/10 p-8 rounded-[2rem] border border-white/20 flex items-center justify-between shadow-2xl">
                    <div>
                      <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Certificación</p>
                      <p className="text-white font-black text-xl tracking-tight">ISO 27001 Auditor</p>
                    </div>
                    <div className="bg-accent p-4 rounded-2xl text-white shadow-xl">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 -left-10 w-6 h-6 bg-accent rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
