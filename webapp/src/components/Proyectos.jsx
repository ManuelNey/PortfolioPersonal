import SectionHead from './SectionHead';
import ProjectTechChips from './ProjectTechChips';
import Lightbox from './Lightbox';
import { useProjectCarousel } from '../hooks/useProjectCarousel';
import { p1Shots, p2Shots, techsP1, techsP2, techsP3 } from '../data/projects';
import './Proyectos.css';

export default function Proyectos() {
  const p1Carousel = useProjectCarousel(p1Shots);
  const p2Carousel = useProjectCarousel(p2Shots);

  return (
    <section id="proyectos" className="proyectos reveal-on-scroll">
      <SectionHead title="Proyectos" mb={36} />
      <div className="proyectos-grid">
        {/* P1 */}
        <article className="project-card">
          <div className="mc-scan" />
          <div className="project-thumb project-thumb--carousel">
            <img src={p1Carousel.shot.src} alt={p1Carousel.shot.label} className="project-thumb-img" />
            <button
              onClick={p1Carousel.open}
              aria-label="Ampliar captura de Ticketing"
              title="Ampliar captura"
              className="project-zoom-btn"
            >
              <svg viewBox="0 0 24 24" width="17" height="17">
                <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35M11 8v6M8 11h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className="project-carousel-bar">
              <button onClick={p1Carousel.prev} aria-label="Captura anterior" className="project-carousel-btn">‹</button>
              <span className="project-carousel-label">
                {p1Carousel.shot.label} · {p1Carousel.index + 1} / {p1Carousel.n}
              </span>
              <button onClick={p1Carousel.next} aria-label="Captura siguiente" className="project-carousel-btn">›</button>
            </div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag project-tag--featured">DESTACADO</span>
              <span className="project-tag project-tag--muted">FULL STACK + MOBILE</span>
            </div>
            <h3 className="project-title">Sistema de Ticketing — Mundial 2026</h3>
            <p className="project-desc">
              Plataforma completa para la venta, administración, transferencia y validación de entradas del Mundial
              FIFA 2026. El sistema incluye una API REST con autenticación por roles, un portal web para usuarios y
              administradores, una app móvil para funcionarios de puerta y una base de datos PostgreSQL diseñada con
              roles, triggers y reglas de negocio.
            </p>
            <ul className="project-list">
              <li><span className="project-list-arrow">▸</span>Portal web para usuarios: registro, compra de entradas, reservas, pagos, QR y transferencias</li>
              <li><span className="project-list-arrow">▸</span>Panel administrativo por país sede para gestionar estadios, sectores, partidos, dispositivos, comisiones y reportes</li>
              <li><span className="project-list-arrow">▸</span>App móvil con Expo para funcionarios, orientada a validar entradas mediante escaneo QR</li>
              <li><span className="project-list-arrow">▸</span>Autenticación JWT con roles diferenciados: usuario, administrador y funcionario</li>
              <li><span className="project-list-arrow">▸</span>Base de datos PostgreSQL con roles, permisos, triggers, constraints y consultas SQL explícitas</li>
              <li><span className="project-list-arrow">▸</span>Flujo de entradas con estados controlados: reservada, activa, transferida y utilizada</li>
              <li><span className="project-list-arrow">▸</span>Transferencia segura de entradas entre usuarios con límites y validación de estado</li>
              <li><span className="project-list-arrow">▸</span>Validación en puerta mediante QR temporal de 30 segundos</li>
              <li><span className="project-list-arrow">▸</span>Infraestructura de desarrollo con Docker Compose para backend, frontend y base de datos</li>
            </ul>
            <ProjectTechChips techs={techsP1} />
            <div className="project-links">
              <a href="https://github.com/ManuelNey/Sistema_tickets_BD2" target="_blank" rel="noreferrer" className="project-github-btn">Ver GitHub</a>
            </div>
          </div>
        </article>

        {/* P2 */}
        <article className="project-card">
          <div className="mc-scan" />
          <div className="project-thumb project-thumb--carousel">
            <img src={p2Carousel.shot.src} alt={p2Carousel.shot.label} className="project-thumb-img" />
            <button onClick={p2Carousel.open} aria-label="Ampliar captura" title="Ampliar captura" className="project-zoom-btn">
              <svg viewBox="0 0 24 24" width="17" height="17">
                <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35M11 8v6M8 11h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className="project-carousel-bar">
              <button onClick={p2Carousel.prev} aria-label="Captura anterior" className="project-carousel-btn">‹</button>
              <span className="project-carousel-label">
                {p2Carousel.shot.label} · {p2Carousel.index + 1} / {p2Carousel.n}
              </span>
              <button onClick={p2Carousel.next} aria-label="Captura siguiente" className="project-carousel-btn">›</button>
            </div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag project-tag--muted">
                FULL STACK&nbsp;
                <br />
              </span>
            </div>
            <h3 className="project-title">Sistema de Gestión de Salas</h3>
            <p className="project-desc">
              Aplicación web full stack para la reserva y administración de salas de estudio universitarias, con
              control de acceso por rol y un panel de estadísticas de uso. La API expone endpoints REST consumidos
              por el frontend para manejar usuarios, reservas, sanciones y disponibilidad en tiempo real.
            </p>
            <ul className="project-list">
              <li><span className="project-list-arrow">▸</span>Backend en FastAPI (Python) y frontend en React, comunicados vía API REST</li>
              <li><span className="project-list-arrow">▸</span>Autenticación con JWT y contraseñas hasheadas, con permisos por rol (usuario, bibliotecario, administrador)</li>
              <li><span className="project-list-arrow">▸</span>Reservas con invitación de participantes, bloqueo de usuarios y sanciones automáticas por inasistencia</li>
              <li><span className="project-list-arrow">▸</span>Panel administrativo para gestionar edificios, salas, facultades y programas académicos</li>
              <li><span className="project-list-arrow">▸</span>Dashboard de estadísticas de uso (ocupación, asistencia, sanciones) para bibliotecarios y administradores</li>
              <li><span className="project-list-arrow">▸</span>Base de datos relacional (MySQL) modelando usuarios, reservas, invitaciones y sanciones</li>
              <li><span className="project-list-arrow">▸</span>Entorno completo orquestado con Docker Compose (BD, backend y frontend en contenedores)</li>
            </ul>
            <ProjectTechChips techs={techsP2} />
            <div className="project-links">
              <a href="https://github.com/ConstanzaBlanco/Sistema-de-reservas-Biblioteca" target="_blank" rel="noreferrer" className="project-github-btn">Ver GitHub</a>
            </div>
          </div>
        </article>

        {/* P3 */}
        <article className="project-card">
          <div className="mc-scan" />
          <div className="project-thumb project-thumb--placeholder">[ CAPTURA DEL BOT ]</div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag project-tag--muted">BACKEND · DISCORD BOT</span>
            </div>
            <h3 className="project-title">ChatBot Pokémon Battles</h3>
            <p className="project-desc">
              Bot de Discord desarrollado en C# y .NET 8 que permite enfrentar a dos jugadores en combates Pokémon
              por turnos. Implementa un motor de batalla con sistema de tipos, estados alterados, objetos y
              selección de equipos, separando la lógica de negocio de la integración con Discord mediante una
              arquitectura modular orientada a objetos.
            </p>
            <ul className="project-list">
              <li><span className="project-list-arrow">▸</span>Sistema completo de batallas por turnos entre usuarios de Discord</li>
              <li><span className="project-list-arrow">▸</span>Lista de espera, emparejamiento y selección de equipos Pokémon</li>
              <li><span className="project-list-arrow">▸</span>Sistema de tipos, efectividades, estados alterados e ítems de combate</li>
              <li><span className="project-list-arrow">▸</span>Arquitectura por capas aplicando principios SOLID y GRASP</li>
              <li><span className="project-list-arrow">▸</span>Patrones de diseño Facade, Adapter y Strategy para reducir el acoplamiento</li>
              <li><span className="project-list-arrow">▸</span>Pruebas unitarias con NUnit y cobertura mediante Coverlet</li>
            </ul>
            <ProjectTechChips techs={techsP3} />
            <div className="project-links">
              <a href="https://github.com/ManuelNey/ChatBot_Pokemon_Battles" target="_blank" rel="noreferrer" className="project-github-btn">Ver GitHub</a>
              <span className="project-soon">CAPTURAS PRÓXIMAMENTE</span>
            </div>
          </div>
        </article>
      </div>

      {p1Carousel.lightboxOpen && (
        <Lightbox
          shot={p1Carousel.shot}
          counter={`${p1Carousel.index + 1} / ${p1Carousel.n}`}
          footer="Sistema de Ticketing - Mundial 2026"
          onPrev={p1Carousel.prev}
          onNext={p1Carousel.next}
          onClose={p1Carousel.close}
        />
      )}

      {p2Carousel.lightboxOpen && (
        <Lightbox
          shot={p2Carousel.shot}
          counter={`${p2Carousel.index + 1} / ${p2Carousel.n}`}
          footer="Sistema de Gestión de Salas"
          onPrev={p2Carousel.prev}
          onNext={p2Carousel.next}
          onClose={p2Carousel.close}
        />
      )}
    </section>
  );
}
