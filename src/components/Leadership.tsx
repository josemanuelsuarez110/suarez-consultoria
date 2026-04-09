import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Zap, ShieldCheck } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

export const Leadership = () => {
  return (
    <SectionContainer id="leadership" className="bg-slate-950">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <Reveal className="flex-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue to-brand-emerald rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <img 
                src="/images/jose_turtleneck.jpg" 
                alt="José Manuel Suárez"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="text-2xl font-black text-white uppercase tracking-tighter">ING. JOSÉ MANUEL SUÁREZ</div>
                <div className="text-cyber-blue font-bold tracking-[0.2em] text-[10px] uppercase">Founder & Leading Consultant</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex-1 space-y-10">
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Liderazgo impulsado por <br />
                <span className="text-cyber-blue">Integridad Digital.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                "Como Ingeniero en Sistemas y estratega financiero, mi visión es transformar la complejidad tecnológica en claridad estratégica. No solo protegemos datos;blindamos el futuro de su organización mediante una infraestructura resiliente y cumplimiento riguroso."
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck />, title: "ISO 27001", text: "Compromiso total con estándares globales de seguridad." },
              { icon: <Target />, title: "Visión 360", text: "Sinergia nativa entre Finanzas, Riesgo y Sistemas." },
              { icon: <Zap />, title: "Innovación IA", text: "Automatización inteligente para procesos críticos." },
              { icon: <Award />, title: "Suma Cum Laude", text: "Excelencia académica aplicada a la consultoría real." }
            ].map((item, i) => (
              <Reveal key={i} delay={0.3 + (i * 0.1)}>
                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-cyber-blue shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
