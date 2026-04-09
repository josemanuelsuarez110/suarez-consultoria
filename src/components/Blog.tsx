import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Lock, LineChart } from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

const posts = [
  {
    category: "Inteligencia Artificial",
    title: "El futuro de la auditoría financiera impulsado por IA",
    date: "Abril 2026",
    icon: <Cpu className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    category: "Ciberseguridad",
    title: "ISO 27001: Más que un cumplimiento, una ventaja competitiva",
    date: "Marzo 2026",
    icon: <Lock className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Estrategia",
    title: "5 Pilares para la estabilidad fiscal en entornos volátiles",
    date: "Febrero 2026",
    icon: <LineChart className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
]

export const Blog = () => {
  return (
    <SectionContainer id="blog" className="bg-slate-900/20">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Insights <span className="text-cyber-blue">2026.</span>
            </h2>
            <p className="text-slate-400">Análisis prospectivo sobre tecnología, finanzas y seguridad.</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-cyber-blue font-bold text-sm uppercase tracking-widest"
          >
            Ver todos los artículos <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  {post.icon} {post.category}
                </div>
              </div>
              <div className="text-xs text-slate-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors leading-tight">
                {post.title}
              </h3>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
