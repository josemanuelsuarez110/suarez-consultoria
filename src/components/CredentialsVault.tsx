import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, CheckCircle2, FileCheck, Terminal, Database as Db, Calculator, Globe2, Lock } from 'lucide-react'
import { SectionContainer, Reveal, cn } from './Layout'

const categories = ["Todos", "Ciberseguridad", "Finanzas", "Sistemas", "Academia"]

const certifications = [
  // CIBERSEGURIDAD & DEFENSA
  { title: "Junior Cybersecurity Analyst", issuer: "Cisco Networking Academy", status: "Career Path", type: "Ciberseguridad", fileUrl: "/diplomas/Junior Cybersecurity Analyst Career Path certificate.pdf" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", status: "Verified", type: "Ciberseguridad", fileUrl: "/diplomas/Ethical Hacker.jpg" },
  { title: "Network Defense", issuer: "Cisco Networking Academy", status: "Certified", type: "Ciberseguridad", fileUrl: "/diplomas/Network_Defense_certificate_josemanuelsuarez110-icloud-com_fe1fef07-3b59-4ebd-9350-c05f645ad47f.pdf" },
  { title: "Endpoint Security", issuer: "Cisco Networking Academy", status: "Verified", type: "Ciberseguridad", fileUrl: "/diplomas/Endpoint Security.png" },
  { title: "Cyber Threat Management", issuer: "Cisco Networking Academy", status: "Expert", type: "Ciberseguridad", fileUrl: "/diplomas/Cyber Threat Management Certificate.pdf" },
  { title: "ISC2 CC - Domain 1", issuer: "ISC2", status: "Security Principles", type: "Ciberseguridad", fileUrl: "/diplomas/CC DOMAIN 1.pdf" },
  { title: "Implementación ISO 27001", issuer: "HP Foundation", status: "Auditoría", type: "Ciberseguridad", fileUrl: "/diplomas/implementacion y auditoria iso 27001_1.jpg" },
  { title: "Intro to Cybersecurity", issuer: "Cisco", status: "Foundations", type: "Ciberseguridad", fileUrl: "/diplomas/introduction-to-cybersecurity (1).png" },

  // INGENIERÍA DE SOFTWARE & INFRAESTRUCTURA
  { title: "Python Essentials 2", issuer: "OpenEDG Python Institute", status: "Avanzado", type: "Sistemas", fileUrl: "/diplomas/Python Essentials 2.pdf" },
  { title: "Python Essentials 1", issuer: "OpenEDG Python Institute", status: "Certified", type: "Sistemas", fileUrl: "/diplomas/Python_Essentials_1.jpg" },
  { title: "Linux Essentials", issuer: "Cisco / LPI", status: "Experto", type: "Sistemas", fileUrl: "/diplomas/Linux_Essentials_certificate_josemanuelsuarez110-icloud-com_f98b1fbc-35db-4999-a2e8-c700312e42ef.pdf" },
  { title: "Linux Unhatched", issuer: "Cisco Networking Academy", status: "Verified", type: "Sistemas", fileUrl: "/diplomas/Linux Unhatched certificate.pdf" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", status: "Certified", type: "Sistemas", fileUrl: "/diplomas/Networking_Basics_certificate_.jpg" },
  { title: "Networking Devices", issuer: "Cisco Networking Academy", status: "Verified", type: "Sistemas", fileUrl: "/diplomas/Networking Devices and Initial Configuration.png" },
  { title: "IT Customer Support", issuer: "Cisco Networking Academy", status: "Certified", type: "Sistemas", fileUrl: "/diplomas/IT_Customer_Support_Basics_certificate_josemanuelsuarez110-icloud-com_336a0cf3-491d-405c-8f4c-a227416d9504.pdf" },

  // FINANZAS & GESTIÓN
  { title: "Administración de Inventario", issuer: "HP LIFE Foundation", status: "Experto", type: "Finanzas", fileUrl: "/diplomas/Administración del Inventario_1.jpg" },
  { title: "Flujo de Caja", issuer: "HP LIFE Foundation", status: "Análisis Financiero", type: "Finanzas", fileUrl: "/diplomas/Flujo de Caja_1.jpg" },

  // FORMACIÓN ACADÉMICA
  { title: "Ingeniero en Sistemas de Información", issuer: "Universidad APEC", status: "Graduado", type: "Academia", fileUrl: "/diplomas/universidad_apec.pdf" },
  { title: "Licenciatura en Contabilidad", issuer: "Universidad Federico Henríquez y Carvajal", status: "Suma Cum Laude", type: "Academia", fileUrl: "/diplomas/titulo_contabilidad_jose_suarez.pdf" }
]

export const CredentialsVault = () => {
  const [filter, setFilter] = React.useState("Todos")

  const filteredCerts = filter === "Todos" 
    ? certifications 
    : certifications.filter(c => c.type === filter)

  return (
    <SectionContainer id="credentials" className="bg-slate-900/30">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Bóveda de Credenciales</h2>
          <p className="text-slate-400 max-w-xl mx-auto italic">
            "La autoridad técnica no se presume, se verifica." — Una trayectoria de excelencia ininterrumpida con más de 40 certificaciones internacionales.
          </p>
        </div>
      </Reveal>

      {/* Filter Tabs */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all border",
                filter === cat 
                  ? "bg-cyber-blue border-cyber-blue text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)]" 
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 relative group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-brand-blue">
                  {cert.type === 'Academia' ? <Award className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6 text-cyber-blue" />}
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-brand-emerald uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> {cert.status}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {cert.issuer}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase font-medium">{cert.type}</span>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  onClick={() => window.open(cert.fileUrl, '_blank')}
                  className="text-xs text-brand-blue font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Ver Certificado <FileCheck className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue/20 to-brand-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity blur shadow-xl -z-10" />
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.6}>
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Gestionado dinámicamente vía <span className="text-slate-300 font-bold">Supabase Backend</span>
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
