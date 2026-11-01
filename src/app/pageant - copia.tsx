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
                <a
                  href="https://wa.me/593963079564?text=Hola%20TISTRATEGY,%20quiero%20una%20cotización."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-800"
                >
                  Solicitar Cotización
                </a>

                <a
                  href="https://wa.me/593963079564?text=Hola%20TISTRATEGY,%20quiero%20agendar%20reunión."
                  className="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-50"
                >
                  Agendar Reunión
                </a>

              </div>
            </div>

            {/* Imagen simulada */}
           <div className="hidden lg:flex justify-center">
            <Image
              src="/logoTistrategy.jpeg"
              alt="TISTRATEGY"
              width={900}
              height={250}
              priority
              className="w-full max-w-2xl object-contain"
            />
          </div>

          </div>
        </div>
      </section>

      {/* TIPOS DE PROYECTOS */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-black">
              ¿Qué tipo de proyectos desarrollamos?
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Creamos soluciones digitales adaptadas a cada tipo de organización.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🚀 Startups</h3>
              <p className="mt-4 text-gray-600">
                MVPs, plataformas SaaS, marketplaces y productos innovadores.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🏢 PYMES</h3>
              <p className="mt-4 text-gray-600">
                Ventas, inventarios, CRM y automatización de procesos.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🏭 Empresas</h3>
              <p className="mt-4 text-gray-600">
                Sistemas corporativos, dashboards y plataformas empresariales.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🛍 Centros Comerciales</h3>
              <p className="mt-4 text-gray-600">
                Campañas promocionales, fidelización y experiencias digitales.
              </p>
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

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Nuestro Proceso
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
              De la idea a la solución
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Acompañamos a nuestros clientes durante todo el ciclo de desarrollo,
              desde la definición de la idea hasta la implementación y evolución del producto.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-5">

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                🔍
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Análisis
              </h3>

              <p className="mt-3 text-gray-600">
                Entendemos tus objetivos y necesidades.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                🎨
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Diseño
              </h3>

              <p className="mt-3 text-gray-600">
                Definimos la experiencia y arquitectura.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                💻
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Desarrollo
              </h3>

              <p className="mt-3 text-gray-600">
                Construimos soluciones modernas y escalables.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Implementación
              </h3>

              <p className="mt-3 text-gray-600">
                Desplegamos y capacitamos a los usuarios.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                🤝
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Evolución
              </h3>

              <p className="mt-3 text-gray-600">
                Soporte, mejoras y crecimiento continuo.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 text-center md:grid-cols-4">

            <div>
              <div className="text-5xl font-bold">10+</div>
              <p className="mt-2">Años de experiencia</p>
            </div>

            <div>
              <div className="text-5xl font-bold">50+</div>
              <p className="mt-2">Proyectos desarrollados</p>
            </div>

            <div>
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2">Soluciones personalizadas</p>
            </div>

            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p className="mt-2">Compromiso con nuestros clientes</p>
            </div>

          </div>

        </div>

      </section>





      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-purple-950 py-28 text-white">

        {/* Glow decorativo */}
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* CONTENIDO */}

            <div>

              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                Producto SaaS desarrollado por TISTRATEGY
              </span>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold">
                MONOBU
              </h2>

              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Una plataforma SaaS diseñada para ayudar a negocios,
                emprendedores y empresas a gestionar clientes,
                productos, inventario, ventas y operaciones desde cualquier lugar.
              </p>

              {/* BENEFICIOS */}

              <div className="mt-10 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  👥 Gestión de Clientes
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  📦 Inventario Inteligente
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  💰 Ventas y Facturación
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  📊 Reportes en Tiempo Real
                </div>

              </div>

              {/* MÉTRICAS */}

              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    100%
                  </div>
                  <p className="text-sm text-gray-400">
                    Cloud
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    24/7
                  </div>
                  <p className="text-sm text-gray-400">
                    Disponible
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    SaaS
                  </div>
                  <p className="text-sm text-gray-400">
                    Escalable
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    IA
                  </div>
                  <p className="text-sm text-gray-400">
                    Preparado
                  </p>
                </div>

              </div>

              {/* BOTONES */}

              <div className="mt-12 flex flex-wrap gap-4">

                <a
                  href="https://monobu.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700 transition"
                >
                  Visitar MONOBU
                </a>

                <a
                  href="https://wa.me/593963079564?text=Hola,%20quiero%20una%20demo%20de%20MONOBU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10 transition"
                >
                  Solicitar Demo
                </a>

              </div>

            </div>

            {/* IMAGEN */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-3xl" />

                <Image
                  src="/monobu.png"
                  alt="MONOBU"
                  width={500}
                  height={500}
                  className="relative w-full max-w-md"
                />

              </div>

            </div>

          </div>

        </div>

      </section>






      <section id="about" className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              ¿Por qué TISTRATEGY?
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
              Tecnología orientada a resultados
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Diseñamos soluciones digitales que ayudan a las empresas a crecer,
              optimizar procesos y generar nuevas oportunidades de negocio.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-4 text-xl font-semibold">
                Enfoque Empresarial
              </h3>
              <p className="mt-3 text-gray-600">
                Entendemos los objetivos de negocio antes de escribir una sola línea de código.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">📈</div>
              <h3 className="mt-4 text-xl font-semibold">
                Escalabilidad
              </h3>
              <p className="mt-3 text-gray-600">
                Soluciones preparadas para crecer junto con tu empresa.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🤖</div>
              <h3 className="mt-4 text-xl font-semibold">
                Inteligencia Artificial
              </h3>
              <p className="mt-3 text-gray-600">
                Incorporamos automatización e IA para aumentar la productividad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🔒</div>
              <h3 className="mt-4 text-xl font-semibold">
                Seguridad
              </h3>
              <p className="mt-3 text-gray-600">
                Aplicamos buenas prácticas para proteger la información de tu negocio.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-4 text-xl font-semibold">
                Desarrollo Ágil
              </h3>
              <p className="mt-3 text-gray-600">
                Entregamos valor rápidamente mediante procesos iterativos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-4 text-xl font-semibold">
                Acompañamiento
              </h3>
              <p className="mt-3 text-gray-600">
                Te acompañamos desde la idea inicial hasta la puesta en producción.
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
              <a
                href="https://wa.me/593963079564?text=Hola%20TISTRATEGY,%20quiero%20una%20cotización."
                className="rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-800"
                >
                Solicitar Cotización
              </a>
            </button>
          </div>

        </div>
      </section>

      <footer className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 md:grid-cols-4">

            {/* Empresa */}

            <div>

              <h3 className="text-2xl font-bold">
                TISTRATEGY S.A.
              </h3>

              <p className="mt-4 text-gray-400">
                Desarrollo de aplicaciones móviles,
                plataformas web, software empresarial,
                SaaS e inteligencia artificial.
              </p>

            </div>

            {/* Servicios */}

            <div>

              <h4 className="font-semibold text-lg">
                Servicios
              </h4>

              <ul className="mt-4 space-y-2 text-gray-400">

                <li>Apps Móviles</li>
                <li>Plataformas Web</li>
                <li>Software Empresarial</li>
                <li>Soluciones SaaS</li>
                <li>Inteligencia Artificial</li>

              </ul>

            </div>

            {/* Productos */}

            <div>

              <h4 className="font-semibold text-lg">
                Productos
              </h4>

              <ul className="mt-4 space-y-2 text-gray-400">

                <li>
                  <a
                    href="https://monobu.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    MONOBU.app
                  </a>
                </li>

              </ul>

            </div>

            {/* Contacto */}

            <div>

              <h4 className="font-semibold text-lg">
                Contacto
              </h4>

              <div className="mt-4 space-y-2 text-gray-400">

                <p>Guayaquil - Ecuador</p>

                <p>
                  <a
                    href="https://wa.me/593963079564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">

            © 2026 TISTRATEGY S.A. Todos los derechos reservados.

          </div>

        </div>

      </footer>

      <a
        href="https://wa.me/593963079564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition"
      >
        💬
      </a>
      
    </main>
  );
}