'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    service_area: 'Ciberseguridad',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', company: '', email: '', phone: '', address: '', service_area: 'Ciberseguridad', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-24 bg-[#022c22] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500 blur-[130px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6">Contacto</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-tight">Hablemos de su <br/><span className="text-accent">Próximo Paso</span></h3>
            <p className="text-emerald-100/60 text-xl mb-12 leading-relaxed">
              Estamos listos para asesorarle con estándares de clase mundial. Complete el formulario para una respuesta inmediata de nuestros especialistas.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xl">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 group-hover:text-accent transition-colors">Correo Electrónico</h4>
                  <p className="text-emerald-100/40 font-medium">josemanuelsuarez11@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xl">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 group-hover:text-accent transition-colors">WhatsApp Business</h4>
                  <div className="space-y-1">
                    <a href="https://wa.me/18294613778" target="_blank" rel="noopener noreferrer" className="block text-emerald-100/40 font-medium hover:text-accent transition-colors">+1 (829) 461-3778</a>
                    <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="block text-emerald-100/40 font-medium hover:text-accent transition-colors">+1 (809) 513-5535</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            {status === 'success' ? (
              <div className="text-center py-20 relative z-10">
                <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce transition-transform">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">¡Solicitud Enviada!</h3>
                <p className="text-emerald-100/60 mb-10 text-lg font-medium">Nuestro equipo senior le contactará en menos de 24 horas.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-accent text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">Nombre Completo *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">Teléfono</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                      placeholder="+58 4XX XXXXXXX"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">Email Corporativo *</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                      placeholder="email@empresa.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">Dirección</label>
                    <input 
                      type="text" 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                      placeholder="Ciudad, Estado"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">Área de Interés</label>
                  <select 
                    value={formData.service_area}
                    onChange={(e) => setFormData({...formData, service_area: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option className="bg-[#022c22]">Ciberseguridad</option>
                    <option className="bg-[#022c22]">Redes e Infraestructura</option>
                    <option className="bg-[#022c22]">Cumplimiento ISO 27001</option>
                    <option className="bg-[#022c22]">Consultoría Financiera</option>
                    <option className="bg-[#022c22]">Otro</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-100/50">¿En qué podemos ayudarle?</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium resize-none"
                    placeholder="Describa brevemente su necesidad..."
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-emerald-600 transition-all shadow-2xl shadow-accent/20 disabled:opacity-50 active:scale-95 group"
                >
                  <span>{status === 'loading' ? 'Procesando...' : 'Enviar Consulta'}</span>
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center font-bold">Ocurrió un error. Por favor, intente de nuevo.</p>
                )}

                <p className="text-[10px] text-center text-emerald-100/30 uppercase tracking-[0.3em] mt-8 font-black">
                  Respetamos la privacidad de su información corporativa
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
