import React from 'react'
import { motion } from 'framer-motion'
import { Shield, TrendingUp, ChevronRight, FileDown } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="text-left space-y-8">
            <Reveal>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-cyber-blue animate-pulse" />
                  <span className="text-sm font-bold tracking-wider text-slate-300 uppercase">Consultoría de Élite ISO 27001</span>
                </div>
                <div className="text-cyber-blue font-black tracking-widest text-xs uppercase ml-1">ING. JOSÉ MANUEL SUÁREZ</div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                PROTECCIÓN <br />
                <span className="text-cyber-blue">TOTAL.</span> <br />
                ESTRATEGIA <br />
                <span className="text-brand-emerald">GLOBAL.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed">
                Ingeniero en Sistemas de Información y estratega financiero fusionando la <span className="text-white font-bold">Ciberdefensa</span> con estándares de <span className="text-white font-bold">Cumplimiento Global</span>. Más de 10 años optimizando infraestructuras mediante IA y auditoría continua.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-10 py-4 bg-cyber-blue text-slate-950 font-black rounded-xl shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  CONSULTAR AHORA <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="relative hidden lg:block">
            <div className="relative group">
              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-8 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-16 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="relative z-10 w-full aspect-square md:aspect-auto rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <img 
                  src="/images/jose_suit.jpg" 
                  alt="José Manuel Suárez"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-slate-900 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl z-20">
                <div className="text-3xl font-black text-white">10+ AÑOS</div>
                <div className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Experiencia Senior</div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* Stats Section */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl border-t border-white/10 pt-12">
            <div>
              <div className="text-3xl font-bold text-white mb-1">ISO 27001</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Suma Cum</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Honores Académicos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Cisco</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Certified Expert</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Hacking</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Ético & Pentesting</div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  )
}
