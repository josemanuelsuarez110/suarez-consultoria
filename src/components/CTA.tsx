import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Mail, ExternalLink, ShieldCheck, Globe, Code } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

export const CTA = () => {
  return (
    <SectionContainer id="contact" className="relative group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyber-blue/20 rounded-full blur-[120px] -z-10 group-hover:bg-brand-emerald/10 transition-colors duration-1000" />
      
      <div className="glass-card p-12 lg:p-20 text-center border-white/20">
        <Reveal>
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue animate-bounce">
              <ShieldCheck className="w-10 h-10" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            ¿LISTO PARA <span className="text-cyber-blue">ASEGURAR</span> EL SIGUIENTE NIVEL?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Ya sea una auditoría de sistemas ISO 27001, una prueba de penetración o una estrategia financiera híbrida, estoy aquí para construir el futuro de tu organización.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-10 items-center justify-center">
            {/* WhatsApp Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex flex-col gap-3">
                <motion.a 
                  href="https://wa.me/18294613778" 
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-emerald text-slate-950 font-bold text-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
                >
                  <MessageSquare className="w-6 h-6" /> WhatsApp (829)
                </motion.a>
                <a href="tel:8294613778" className="text-xs text-slate-500 hover:text-white transition-colors">Llamar: 829-461-3778</a>
              </div>

              <div className="flex flex-col gap-3">
                <motion.a 
                  href="https://wa.me/18095135535" 
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/20 text-white font-bold text-xl hover:bg-white/10 transition-all shadow-xl"
                >
                  <MessageSquare className="w-6 h-6" /> WhatsApp (809)
                </motion.a>
                <a href="tel:8095135535" className="text-xs text-slate-500 hover:text-white transition-colors">Llamar: 809-513-5535</a>
              </div>
            </div>

            {/* Social Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/5 w-full">
              <motion.a 
                href="http://linkedin.com/in/josemanuelsuarez110" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600/10 border border-blue-600/30 text-blue-400 hover:bg-blue-600/20 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn Profesional
              </motion.a>
              <motion.a 
                href="http://github.com/josemanuelsuarez110" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Código y Proyectos
              </motion.a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 uppercase tracking-[0.2em] text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Systems Engineering
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" /> Certified Public Accountant
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue" /> Ethical Hacking
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mt-20 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} José Manuel Suárez. Ingeniería & Finanzas de Élite.</p>
        <p className="mt-2 opacity-50 italic">Construido con React, Tailwind CSS y Supabase.</p>
      </footer>
      {/* Footer Addition */}
      <footer className="mt-32 pt-20 border-t border-white/5 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-left">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white">SUAREZ</span>
              <span className="text-[10px] text-cyber-blue font-bold uppercase">Consultoría & Auditoría</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Liderazgo técnico y financiero comprometido con la excelencia ISO 27001 y la optimización de procesos mediante IA.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-cyber-blue transition-colors">Auditoría IT</a></li>
              <li><a href="#services" className="hover:text-cyber-blue transition-colors">Estrategia Fiscal</a></li>
              <li><a href="#services" className="hover:text-cyber-blue transition-colors">Hacking Ético</a></li>
              <li><a href="#services" className="hover:text-cyber-blue transition-colors">Pentesting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Gobernanza</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">ISO 27001</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Cumplimiento Fiscal</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Políticas de Seguridad</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Ética de Consultoría</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Conectar</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="tel:8294613778" className="hover:text-cyber-blue transition-colors">829-461-3778</a></li>
              <li><a href="mailto:josemanuelsuarez110@gmail.com" className="hover:text-cyber-blue transition-colors">Email Oficial</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            © 2026 SUAREZ | SERVICIOS Y ASESORÍA. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            Dominican Republic | Global Consulting
          </p>
        </div>
      </footer>
    </SectionContainer>
  )
}
