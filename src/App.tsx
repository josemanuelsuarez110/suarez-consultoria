import React from 'react'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { CredentialsVault } from './components/CredentialsVault'
import { ServicesMatrix } from './components/ServicesMatrix'
import { TechStack } from './components/TechStack'
import { Blog } from './components/Blog'
import { CTA } from './components/CTA'
import { Reveal } from './components/Layout'

function App() {
  return (
    <main className="min-h-screen relative">
      {/* Decorative Global Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Navigation (Floating) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center gap-12">
        <div className="flex flex-col items-center -mr-4">
          <span className="text-xl font-black tracking-[0.2em] text-white">SUAREZ</span>
          <span className="text-[8px] uppercase tracking-[0.1em] text-cyber-blue font-bold">Servicios y Asesoría</span>
        </div>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold text-white hover:text-cyber-blue transition-colors">Inicio</a>
          <a href="#credentials" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Credenciales</a>
          <a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Servicios</a>
          <a href="#tech-stack" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Stack</a>
          <a href="#blog" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Blog</a>
          <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contacto</a>
        </div>
      </nav>

      {/* Main Content Sections */}
      <Hero />
      <Leadership />
      <CredentialsVault />
      <ServicesMatrix />
      <TechStack />
      <Blog />
      <CTA />

      {/* Scroll Progress Indicator (Left Side) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 py-8 pointer-events-none opacity-20">
        <div className="w-px h-20 bg-gradient-to-t from-cyber-blue to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 rotate-180">
          Scroll for Strategy
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-cyber-blue to-transparent" />
      </div>
    </main>
  )
}

export default App
