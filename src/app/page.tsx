'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  FileCheck2,
  Globe2,
  Layers,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';

export default function TiStrategyPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'saas' | 'custom'>('all');

  const productos = [
    {
      id: "sincroiq",
      category: "saas",
      name: "SincroIQ",
      badge: "Nuevo Lanzamiento",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      domain: "sincroiq.com",
      link: "https://sincroiq.com",
      description: "Plataforma SaaS con Inteligencia Artificial para la extraccion, lectura y procesamiento estructurado de comprobantes tributarios, XMLs y documentos PDF.",
      features: [
        "Motor OCR con Vertex AI & Gemini Flash",
        "Extraccion de facturas, retenciones y XMLs",
        "Estructuracion de datos en tiempo real",
        "Integracion directa via API REST"
      ],
      icon: <Brain className="w-8 h-8 text-emerald-400" />
    },
    {
      id: "monobu",
      category: "saas",
      name: "MONOBU",
      badge: "SaaS Consolidado",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      domain: "monobu.app",
      link: "https://app.monobu.app",
      description: "Plataforma cloud de gestion comercial, POS y control de inventarios disenada para pymes y empresas independientes en Ecuador.",
      features: [
        "Punto de Venta (POS) y Kardex con PMP",
        "Facturacion Electronica SRI automatizada",
        "Desglose inverso de IVA (15%)",
        "App movil Android y Consola Web"
      ],
      icon: <Boxes className="w-8 h-8 text-purple-400" />
    }
  ];

  const servicios = [
    {
      title: "Desarrollo Movil Multiplataforma",
      description: "Construccion de aplicaciones nativas e hibridas de alto rendimiento en Flutter para iOS y Android.",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Integracion de IA & Machine Learning",
      description: "Despliegue de modelos OCR, vision por computadora y automatizaciones empresariales con Google Cloud y Vertex AI.",
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Plataformas Web & Arquitectura SaaS",
      description: "Desarrollo frontend en Next.js, React y Tailwind CSS respaldados por infraestructura escalable en Firebase.",
      icon: <Layers className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Pasarelas de Pago & SRI",
      description: "Integracion de cobros con PayPhone, PayPal, transferencias bancarias y emision directa de comprobantes al SRI.",
      icon: <FileCheck2 className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* --- NAVEGACION --- */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-12 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-900/40">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl tracking-tight text-white">
            TISTRATEGY <span className="text-purple-500 text-xs font-mono ml-1">S.A.</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#ecosistema" className="hover:text-white transition">Ecosistema SaaS</a>
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition">Nosotros</a>
          <a href="#contacto" className="bg-purple-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-purple-500 transition shadow-md shadow-purple-900/30">
            Contacto
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] -z-10" />
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold text-purple-300 bg-purple-950/60 rounded-full border border-purple-800/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Ingenieria de Software & Inteligencia Artificial
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6 max-w-4xl">
            Construimos plataformas digitales que transforman la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-emerald-400">
              operacion empresarial.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
            En <strong className="text-white">TISTRATEGY S.A.</strong> disenamos e impulsamos soluciones tecnologicas de alto impacto. Creadores de productos SaaS lideres como <strong className="text-emerald-400">SincroIQ</strong> y <strong className="text-purple-400">MONOBU</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="#ecosistema"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-purple-500 transition shadow-lg shadow-purple-950 flex items-center justify-center gap-2"
            >
              Explorar Productos SaaS
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-800 hover:text-white transition text-center"
            >
              Consultoria Tecnologica
            </a>
          </div>
        </div>
      </section>

      {/* --- ECOSISTEMA DE PRODUCTOS --- */}
      <section id="ecosistema" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-mono text-purple-400 mb-3">Productos Propios</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ecosistema Tecnologico TISTRATEGY
            </p>
            <p className="text-slate-400 text-sm mt-3">
              Soluciones desarrolladas en casa para resolver retos criticos de negocio e inteligencia documental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productos.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-900/90 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                      {prod.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${prod.badgeColor}`}>
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {prod.name}
                    <span className="text-xs font-mono text-slate-500 font-normal">({prod.domain})</span>
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <ul className="space-y-3 border-t border-slate-800/80 pt-6 mb-8">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 py-3.5 rounded-xl text-xs font-bold hover:bg-purple-600 hover:text-white hover:border-purple-500 transition flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  Visitar sitio oficial ({prod.domain})
                  <Globe2 className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAPACIDADES / SERVICIOS CORPORATIVOS --- */}
      <section id="servicios" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-mono text-purple-400 mb-3">Servicios Enterprise</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ingenieria a la medida de tu compania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((srv, idx) => (
              <div key={idx} className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-purple-900/50 transition">
                <div className="p-3 bg-purple-950/40 w-fit rounded-xl border border-purple-800/40 mb-5">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{srv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACERCA DE TISTRATEGY --- */}
      <section id="nosotros" className="py-20 px-6 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-4">Acerca de TISTRATEGY S.A.</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Somos una sociedad anonima ecuatoriana constituida para liderar la transformacion digital en la region. Combinamos arquitectura limpia en Flutter, Next.js, Firebase e integracion con APIs de IA de ultima generacion para entregar software de grado empresarial.
          </p>
        </div>
      </section>

      {/* --- FOOTER & CONTACTO --- */}
      <footer id="contacto" className="bg-slate-950 py-16 px-6 border-t border-slate-800/80 text-xs">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-purple-500" />
              <span className="font-bold text-base text-white">TISTRATEGY S.A.</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empresa de ingenieria de software, SaaS e integracion de Inteligencia Artificial en Ecuador.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Canales de Atencion</h4>
            <div className="space-y-3 text-slate-400">
              <a href="mailto:info@tistrategy.net" className="flex items-center gap-2 hover:text-purple-400 transition">
                <Mail className="w-4 h-4 text-purple-400" /> info@tistrategy.net
              </a>
              <a href="https://wa.me/593963079564" className="flex items-center gap-2 hover:text-purple-400 transition">
                <Phone className="w-4 h-4 text-purple-400" /> +593 96 307 9564
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Plataformas Activas</h4>
            <div className="space-y-2 font-mono">
              <a href="https://sincroiq.com" target="_blank" rel="noopener noreferrer" className="block text-emerald-400 hover:underline">
                -&gt; sincroiq.com (OCR &amp; IA)
              </a>
              <a href="https://app.monobu.app" target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:underline">
                -&gt; monobu.app (POS &amp; SRI)
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 gap-4">
          <p>&copy; 2026 TISTRATEGY S.A. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-slate-600">
            <ShieldCheck className="w-4 h-4" /> Ecuador
          </div>
        </div>
      </footer>
    </div>
  );
}