"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur">
        {/* Reducimos el py (padding vertical) a 1 para que el header no se vuelva gigante por el nuevo tamaño del logo */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 md:py-2">

          {/* Contenedor del Logo con espacio horizontal expandido */}
          <div className="flex items-center min-w-[280px] md:min-w-[400px]">
            <Image
              src="/logo-horizontal1.png"
              alt="TISTRATEGY S.A."
              width={500} // Aumentamos la base de renderizado para evitar pixeleado
              height={135}
              priority
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-base tracking-wide">
            <a href="#services" className="hover:text-white transition-colors duration-200">
              Servicios
            </a>

            <a href="#about" className="hover:text-white transition-colors duration-200">
              Nosotros
            </a>

            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contacto
            </a>
          </nav>

          {/* Botón Mobile */}
          <button
            className="md:hidden text-white text-3xl font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 md:py-2"></div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="flex flex-col gap-4 px-6 py-5">

              <a
                href="#services"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>

              <a
                href="#about"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </a>

              <a
                href="#contact"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
      )}

      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
                Soluciones Digitales para Empresas
              </span>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-black">
                Transformamos ideas en soluciones digitales que impulsan el crecimiento de tu negocio
              </h2>

              <p className="mt-6 text-xl text-gray-600">
                Desarrollamos aplicaciones móviles, plataformas web,
                software empresarial, soluciones SaaS e inteligencia
                artificial para startups, pymes y grandes empresas.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-800">
                  Solicitar Cotización
                </button>
                <button className="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-50">
                  Agendar Reunión
                </button>
              </div>
            </div>

            {/* Imagen simulada */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-lg rounded-3xl border bg-white p-8 shadow-2xl">
                <div className="mb-4 h-4 w-32 rounded bg-blue-500" />
                <div className="space-y-3">
                  <div className="h-4 rounded bg-gray-200" />
                  <div className="h-4 rounded bg-gray-200" />
                  <div className="h-4 rounded bg-gray-200" />
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-xl bg-blue-100" />
                    <div className="h-24 rounded-xl bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">
              Nuestros Servicios
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Soluciones tecnológicas diseñadas para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">📱</div>
              <h3 className="mt-4 text-xl font-semibold">
                Aplicaciones Móviles
              </h3>
              <p className="mt-3 text-gray-600">
                Apps para iOS y Android enfocadas en experiencia de usuario y escalabilidad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🌐</div>
              <h3 className="mt-4 text-xl font-semibold">
                Plataformas Web
              </h3>
              <p className="mt-3 text-gray-600">
                Sistemas web modernos para administración, ventas y operaciones empresariales.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">☁️</div>
              <h3 className="mt-4 text-xl font-semibold">
                Soluciones SaaS
              </h3>
              <p className="mt-3 text-gray-600">
                Diseñamos productos escalables basados en suscripción para nuevos negocios digitales.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🤖</div>
              <h3 className="mt-4 text-xl font-semibold">
                Inteligencia Artificial
              </h3>
              <p className="mt-3 text-gray-600">
                Automatización, asistentes inteligentes y análisis de información mediante IA.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">⚙️</div>
              <h3 className="mt-4 text-xl font-semibold">
                Automatización de Procesos
              </h3>
              <p className="mt-3 text-gray-600">
                Optimización de tareas repetitivas para mejorar productividad y reducir costos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🏢</div>
              <h3 className="mt-4 text-xl font-semibold">
                Software Empresarial
              </h3>
              <p className="mt-3 text-gray-600">
                Sistemas personalizados para empresas que requieren soluciones a medida.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Tecnologías Modernas
            </h2>

            <p className="mt-4 text-gray-600">
              Utilizamos herramientas modernas para desarrollar productos rápidos, seguros y escalables.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {[
              "Flutter",
              "Firebase",
              "Next.js",
              "Cloudflare",
              "MySQL",
              "PHP",
              "IA Generativa",
              "OpenAI",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border px-6 py-3 font-medium"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="text-blue-400 font-medium">
              Producto SaaS Propio
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              MONOBU.app
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              Plataforma SaaS diseñada para ayudar a negocios a gestionar clientes,
              ventas, productos y operaciones desde cualquier lugar.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-4 text-black font-semibold">
              Conocer MONOBU
            </button>

          </div>

        </div>
      </section>      

      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            ¿Por qué elegirnos?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-xl font-semibold">
                Experiencia Tecnológica
              </h3>
              <p className="mt-3 text-gray-600">
                Desarrollo de plataformas web, móviles y soluciones empresariales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Innovación Continua
              </h3>
              <p className="mt-3 text-gray-600">
                Aplicamos inteligencia artificial y automatización para generar valor real.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Enfoque en Resultados
              </h3>
              <p className="mt-3 text-gray-600">
                Construimos soluciones orientadas al crecimiento y rentabilidad del negocio.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Hablemos de tu proyecto
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Cuéntanos tu idea y te ayudaremos a convertirla en una solución digital.
          </p>

          <div className="mt-10">
            <button className="rounded-xl bg-black px-8 py-4 text-white">
              Solicitar Cotización
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}