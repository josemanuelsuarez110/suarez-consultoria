import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Database, Cloud, Code2, DatabaseZap as Db, Cpu, Globe2 } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

const techItems = [
  { name: 'Python', icon: <Code2 className="w-6 h-6" />, category: 'Backend & Automation', level: 'Avanzado' },
  { name: 'Linux', icon: <Terminal className="w-6 h-6" />, category: 'OS & Security', level: 'Experto' },
  { name: 'SQL', icon: <Database className="w-6 h-6" />, category: 'Data Architecture', level: 'Avanzado' },
  { name: 'Supabase', icon: <Db className="w-6 h-6" />, category: 'Backend as a Service', level: 'Fluido' },
  { name: 'Vite', icon: <Cpu className="w-6 h-6" />, category: 'Build Tools', level: 'Experto' },
  { name: 'TypeScript', icon: <Globe2 className="w-6 h-6" />, category: 'Safe Code', level: 'Avanzado' },
]

export const TechStack = () => {
  return (
    <SectionContainer id="tech-stack" className="bg-slate-900/50">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Infraestructura de IT</h2>
          <p className="text-slate-400">Herramientas de vanguardia para arquitecturas resilientes.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {techItems.map((item, index) => (
          <Reveal key={index} delay={index * 0.05}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 flex flex-col items-center text-center group border-white/5"
            >
              <div className="mb-4 text-slate-400 group-hover:text-cyber-blue transition-colors">
                {item.icon}
              </div>
              <div className="text-lg font-bold text-white mb-1">{item.name}</div>
              <div className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">{item.level}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Skills Radar / Visualization (Mockup) */}
      <Reveal delay={0.4}>
        <div className="mt-16 glass-card p-8 border-cyber-blue/20 bg-cyber-blue/5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold">Arquitectura de Decisión</h3>
              <p className="text-slate-400">
                Mi enfoque técnico no se limita a escribir código; se trata de construir puentes seguros entre los datos financieros y la infraestructura IT. Cada línea de Python y cada consulta SQL está alineada con los objetivos de negocio y la seguridad ISO 27001.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Auditoría Pentesting', 'Análisis de Datos', 'Automatización Financiera', 'Compliance IT'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 aspect-square flex items-center justify-center">
              {/* Decorative Circle Logic/Glow */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyber-blue/20" />
              <div className="text-cyber-blue relative z-10">
                <Db className="w-20 h-20 opacity-50 blur-sm absolute inset-0" />
                <Db className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
