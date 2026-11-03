/**
 * 🏛️ SSOT Canónico de Servicios de la Flota Soberana
 * Titular Exclusivo: Mauricio Uribe Maldonado
 */

export const FLEET_SERVICES = [
  {
    id: "cambioya",
    name: "CAMBIOYA!",
    category: "Trueque Directo & Economía Circular sin Dinero",
    url: "https://cambioya.pythonanywhere.com",
    host: "PythonAnywhere WSGI / Daphne",
    expectedLatencyMs: 38,
    historicalUptime: 99.95,
    tier: "Tier 1 Sovereign (Core)",
    description: "Plataforma comunitaria de trueque directo y economía circular con mapa ESRI en tiempo real y chat WebSocket."
  },
  {
    id: "ataraxia",
    name: "Ataraxia — Coach Estoico",
    category: "Fitness, Nutrición & Rendimiento Estoico (SaaS)",
    url: "https://ataraxia-stoic.vercel.app",
    host: "Vercel Edge CDN & EAS Native",
    expectedLatencyMs: 18,
    historicalUptime: 99.99,
    tier: "Tier 1 Sovereign (AAA 96.7)",
    description: "Coach multimodal con podómetro biomecánico NEAT 24/7, biometría PPG en memoria y Quota Guard SaaS."
  },
  {
    id: "hidoctor",
    name: "HiDoctor (HiDoc)",
    category: "Bitácora Clínica Pediátrica Inteligente & Triaje IA (SaaS)",
    url: "https://mauriciano47-pixel.github.io/hi-doctor/",
    host: "GitHub Pages PWA & Cloudflare Workers",
    expectedLatencyMs: 22,
    historicalUptime: 99.99,
    tier: "Tier 1 Sovereign (AAA 97.3)",
    description: "Triaje asistencial pediátrico dual (Gemini + Offline), curva térmica vectorial SVG y cálculo de dosis en kg."
  },
  {
    id: "vitrina",
    name: "Vitrina de Aplicaciones & Hub de Inversores",
    category: "Portal Showcase Comercial & Launchpad",
    url: "https://mauriciano47-pixel.github.io/vitrina/",
    host: "GitHub Pages CDN Global",
    expectedLatencyMs: 20,
    historicalUptime: 99.99,
    tier: "Infraestructura & Showcase",
    description: "Catálogo interactivo con simulador multipantalla (iPhone, Tablet, Desktop) y modales de licenciamiento B2B."
  },
  {
    id: "due_diligence",
    name: "V-GUARD Due Diligence Suite & Investor Deal Desk",
    category: "Auditoría de 7 Pilares M&A & Virtual Data Room (VDR)",
    url: "https://mauriciano47-pixel.github.io/due-diligence-suite/",
    host: "GitHub Pages CDN & Local Engine",
    expectedLatencyMs: 21,
    historicalUptime: 99.99,
    tier: "Infraestructura & M&A",
    description: "Terminal institucional de adquisición con paquetes VDR sellados con hash SHA-256 y certificación OpenSSF/OWASP."
  },
  {
    id: "faro",
    name: "Faro — Tu Seguridad, Tu Luz",
    category: "Seguridad Personal Física & Alerta SOS",
    url: "https://faro-app.mauriciano47.workers.dev",
    host: "Cloudflare Workers Edge Network",
    expectedLatencyMs: 16,
    historicalUptime: 99.99,
    tier: "Tier 1 Sovereign (AAA 99.4)",
    description: "Botón de pánico SOS con coordenadas GPS en tiempo real, baliza estroboscópica y geocercas inteligentes."
  },
  {
    id: "vitrodiag",
    name: "VitroDiag — Operador I.S.",
    category: "Diagnóstico Óptico Asistido por IA en Manufactura de Vidrio",
    url: "https://mauriciano47-pixel.github.io/vitrodiag/",
    host: "GitHub Pages PWA Hot End",
    expectedLatencyMs: 22,
    historicalUptime: 99.99,
    tier: "Tier 2 Industrial (AAA 98.5)",
    description: "Detección y clasificación de 57 defectos críticos al pie de máquina I.S. en línea caliente (Hot End)."
  },
  {
    id: "sentinel",
    name: "SENTINEL — Guardián de Privacidad",
    category: "Monitoreo de Brechas & Derecho al Olvido (RGPD Art. 17)",
    url: "https://mauriciano47-pixel.github.io/sentinel/",
    host: "GitHub Pages & Railway Backend",
    expectedLatencyMs: 45,
    historicalUptime: 99.90,
    tier: "Tier 2 Ciberseguridad (AAA 98.2)",
    description: "Orquestación legal de solicitudes de supresión de datos con k-anonymity y cero almacenamiento invasivo."
  },
  {
    id: "crypto_analyzer",
    name: "Crypto Pattern Analyzer",
    category: "Análisis Técnico Cuantitativo & Streaming Binance",
    url: "https://mauriciano47-pixel.github.io/crypto-analyzer/",
    host: "GitHub Pages WebSocket Client",
    expectedLatencyMs: 28,
    historicalUptime: 99.95,
    tier: "Tier 3 Cuantitativo (Grado A)",
    description: "Escáner de patrones armónicos y velas en tiempo real a 60 FPS mediante WebSockets directos de Binance."
  },
  {
    id: "tramitefacil",
    name: "TrámiteFácil",
    category: "Gestión Burocrática Ciudadana & Accesibilidad",
    url: "https://tramitefacil-app.mauriciano47.workers.dev",
    host: "Cloudflare Workers Edge Network",
    expectedLatencyMs: 17,
    historicalUptime: 99.99,
    tier: "Tier 3 Ciudadano (Grado A)",
    description: "Simplificador de documentos legales con cálculo de finiquitos bajo el Código del Trabajo y Gemini Vision."
  }
];

export const INCIDENT_LOG = [
  {
    id: "INC-20261029-01",
    service: "Ataraxia",
    title: "Optimización de Latencia en Handshake de Stripe Checkout",
    date: "2026-10-29",
    status: "Resuelto",
    durationMinutes: 12,
    impact: "Bajo (Micro-latencia transitoria de 450ms)",
    summary: "Se implementó prefetch asíncrono del bundle de suscripción en SafeStorage, reduciendo el Time-to-Interactive a < 15ms."
  },
  {
    id: "INC-20261020-01",
    service: "HiDoctor",
    title: "Verificación de Timeout Pediátrico en API Gemini",
    date: "2026-10-20",
    status: "Resuelto",
    durationMinutes: 8,
    impact: "Ninguno (Conmutación inmediata a algoritmo offline)",
    summary: "El sistema de triaje dual activó automáticamente el motor offline-first ante una respuesta lenta de red en menos de 8.000 ms."
  },
  {
    id: "INC-20261013-01",
    service: "CAMBIOYA!",
    title: "Migración de Cartografía a ESRI World Street Map",
    date: "2026-10-13",
    status: "Resuelto",
    durationMinutes: 15,
    impact: "Bajo (Tiles de mapa en recarga)",
    summary: "Se erradicaron bloqueos de cuota 403 migrando el visor geográfico a ESRI con soporte global sin clave de API."
  }
];

export function calculateGlobalSLA(services = FLEET_SERVICES) {
  if (!services || services.length === 0) return 100.0;
  const sum = services.reduce((acc, s) => acc + (s.historicalUptime || 99.9), 0);
  return Number((sum / services.length).toFixed(2));
}
