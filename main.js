/* Luis Monsalve — personal site interactions
   Progressive enhancement: fully readable without JS (reveal states
   gate on html.js). Honours prefers-reduced-motion.
   Features: EN/ES i18n, theme toggle, CSS parallax, stat counters. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  /* ---------------- i18n (EN canonical · ES first-class) ---------------- */
  var I18N = {
    en: {
      skip: 'Skip to content',
      meta_desc: 'Luis Monsalve — Applied AI Engineer in Miami. I design, ship, and operate production AI systems: multi-agent platforms, voice AI, and MCP/OAuth integrations. Bilingual EN/ES.',
      nav_work: 'Work', nav_cap: 'Capabilities', nav_about: 'About', nav_contact: 'Contact',
      hero_eyebrow: 'Miami, FL · Applied AI Engineer',
      hero_title: 'I build production AI<br>that runs <em>around the clock.</em>',
      hero_lede: 'Multi-agent systems, voice AI on live phone lines, and Model Context Protocol integrations — designed, shipped, and operated end-to-end. The messy 20% most demos skip.',
      hero_cta1: 'See selected work', hero_cta2: 'Get in touch',
      fact1: '11 systems in production', fact2: 'Bilingual EN / ES', fact3: 'US work-authorized',
      scroll: 'Scroll',
      proof_kicker: 'Operated, not demoed',
      proof1: 'systems live in production', proof2: 'commits shipped in a year',
      proof3: 'AI agents running 24/7', proof4: 'AI voice lines answering calls',
      cap_kicker: 'What I do', cap_title: 'From the model to the phone line.',
      cap_lede: "I own the whole stack — architecture, code, evals, security, and deploys. Here's where I spend my time.",
      cap1_t: 'Multi-Agent AI Systems', cap1_d: 'Orchestrated agents that triage, decide, and act 24/7 across WhatsApp, Telegram, voice, and email — with multi-provider LLM routing, fallback, and cost control.',
      cap2_t: 'Voice AI', cap2_d: 'Bilingual AI agents on real phone lines — Telnyx + ElevenLabs, multi-destination PBX routing, guardrails, and AI-to-AI regression testing before every release.',
      cap3_t: 'MCP & LLM Integration', cap3_d: 'Production Model Context Protocol connectors with OAuth 2.1 — exposing your business systems as safe tools directly inside Claude and ChatGPT.',
      cap4_t: 'Full-Stack SaaS', cap4_d: 'Multi-tenant platforms with Row-Level Security, RAG pipelines, and CI-tested code — React / Next.js on FastAPI, Express, or Django with PostgreSQL.',
      cap5_t: 'Networks & Security', cap5_d: 'Enterprise UniFi networks with IDS/IPS, VLAN segmentation, and monitoring. Ubiquiti-certified (Routing/Switching/Cybersecurity & Wireless).',
      cap6_t: 'Data & Automation', cap6_d: 'Embeddings-based reconciliation, PDF/report automation, and workflow integration that turns manual, spreadsheet-bound operations into measured pipelines.',
      work_kicker: 'Selected work', work_title: 'Real systems, running today.',
      work_lede: 'A selection — mostly as sole or primary engineer. Client names and internal details withheld; the engineering is real and in production.',
      w1_tag: 'MULTI-AGENT · 24/7', w1_t: 'Multi-Agent AI Platform',
      w1_d: 'A 12+ agent orchestration platform running around the clock across WhatsApp, Telegram, voice, and email for a fleet of thousands of managed devices — with custom multi-provider LLM routing and cost monitoring.',
      w1_m: '~99% automated reconciliation across tens of thousands of legacy records',
      w2_tag: 'VOICE AI · TELEPHONY', w2_t: 'Voice AI Platform',
      w2_d: 'A multi-tenant voice-agent SaaS with paying clients on live phone lines — bilingual EN/ES agents, multi-destination PBX routing, and a STRIDE security audit covering prompt-injection and cross-tenant isolation.',
      w2_m: 'Live phone lines · provider migration with zero reported downtime',
      w3_tag: 'MCP · OAUTH 2.1', w3_t: 'MCP / LLM Integration',
      w3_d: 'A production Model Context Protocol connector with OAuth 2.1, exposing live operational data as safe read/write tools directly inside Claude and ChatGPT — audited and role-controlled.',
      w3_m: 'Business systems, usable from the AI assistants your team already uses',
      w4_tag: 'COMPLIANCE · SAAS', w4_t: 'Compliance SaaS Platform',
      w4_d: 'A multi-tenant compliance platform (Next.js, Postgres with Row-Level Security) replacing manual spreadsheets for hundreds of clients — deadline engine, auto-filled regulatory PDF forms, and bulk document migration.',
      w4_m: 'Taken to production in under 30 days',
      w5_tag: 'LOGISTICS · PLATFORM', w5_t: 'Logistics Operations Platform',
      w5_d: 'A full booking → warehouse → delivery → invoicing platform rebuilt end-to-end with hierarchical, role-based multi-tenant isolation — thousands of unit, database, and end-to-end tests green in CI.',
      w5_m: 'End-to-end rebuild · live public demo',
      w6_tag: 'INFRASTRUCTURE · SECURITY', w6_t: 'Enterprise Network & Security',
      w6_d: 'Corporate UniFi networks with a Dream Machine gateway, IDS/IPS threat management, VLAN segmentation, and 24/7 monitoring — the infrastructure backbone underneath the software.',
      w6_m: 'High uptime · hardened, segmented, monitored',
      work_note: 'Building something bigger? I take on AI & automation engagements through my studio, <a href="https://novaiflow.com" rel="noopener">NovAIFlow →</a>',
      about_kicker: 'About', about_title: 'An engineer who ships — and keeps it running.',
      about_p1: 'I came up through IT and software engineering — networks, systems, and full-stack development — and moved into AI because I like owning the whole thing: the architecture, the code, the evals, the security, and the 2 a.m. production incident.',
      about_p2: "Today I build and operate multi-agent platforms, voice AI, and MCP integrations — mostly as sole or primary engineer. Fully bilingual (English / Spanish), based in Miami, US work-authorized, and finishing an Associate's in Artificial Intelligence at Miami Dade College.",
      tl1_t: 'Technical Support', tl1_d: 'Learned the fundamentals solving real tickets, hands on hardware and users.',
      tl2_t: 'Networks & Infrastructure', tl2_d: 'Specialized in enterprise UniFi networks, segmentation, and security.',
      tl3_t: 'Full-Stack Development', tl3_d: 'Moved into building software — Python, React, and databases in production.',
      tl4_t: 'Applied AI Engineer', tl4_d: 'Multi-agent systems, voice AI, and MCP integrations — production, 24/7.',
      contact_kicker: 'Contact', contact_title: "Let's talk about what you're building.",
      contact_lede: 'Open to Applied AI / AI Engineer / LLM Engineer / Voice AI / Forward-Deployed roles — Miami onsite/hybrid or US-remote — and select consulting.',
      footer_role: 'Applied AI Engineer · Miami', footer_lang: 'English · Español',
      theme_to_light: 'Switch to light theme', theme_to_dark: 'Switch to dark theme'
    },
    es: {
      skip: 'Saltar al contenido',
      meta_desc: 'Luis Monsalve — Ingeniero de IA aplicada en Miami. Diseño, construyo y opero sistemas de IA en producción: plataformas multi-agente, voice AI e integraciones MCP/OAuth. Bilingüe EN/ES.',
      nav_work: 'Proyectos', nav_cap: 'Capacidades', nav_about: 'Perfil', nav_contact: 'Contacto',
      hero_eyebrow: 'Miami, FL · Ingeniero de IA Aplicada',
      hero_title: 'Construyo IA en producción<br>que corre <em>las 24 horas.</em>',
      hero_lede: 'Sistemas multi-agente, voice AI en líneas telefónicas reales e integraciones con Model Context Protocol — diseñados, construidos y operados de punta a punta. El 20% difícil que las demos evitan.',
      hero_cta1: 'Ver proyectos', hero_cta2: 'Hablemos',
      fact1: '11 sistemas en producción', fact2: 'Bilingüe EN / ES', fact3: 'Autorizado para trabajar en US',
      scroll: 'Baja',
      proof_kicker: 'Operado, no en demo',
      proof1: 'sistemas vivos en producción', proof2: 'commits entregados en un año',
      proof3: 'agentes de IA operando 24/7', proof4: 'líneas de voz IA atendiendo llamadas',
      cap_kicker: 'Qué hago', cap_title: 'Del modelo a la línea telefónica.',
      cap_lede: 'Manejo todo el stack — arquitectura, código, evals, seguridad y despliegues. Aquí es donde invierto mi tiempo.',
      cap1_t: 'Sistemas Multi-Agente', cap1_d: 'Agentes orquestados que triangulan, deciden y actúan 24/7 en WhatsApp, Telegram, voz y email — con routing de LLM multi-proveedor, fallback y control de costos.',
      cap2_t: 'Voice AI', cap2_d: 'Agentes de IA bilingües en líneas telefónicas reales — Telnyx + ElevenLabs, enrutamiento a PBX multi-destino, guardrails y testing de regresión IA-a-IA antes de cada release.',
      cap3_t: 'Integración MCP y LLM', cap3_d: 'Conectores Model Context Protocol en producción con OAuth 2.1 — exponiendo tus sistemas de negocio como herramientas seguras dentro de Claude y ChatGPT.',
      cap4_t: 'SaaS Full-Stack', cap4_d: 'Plataformas multi-tenant con Row-Level Security, pipelines RAG y código probado en CI — React / Next.js sobre FastAPI, Express o Django con PostgreSQL.',
      cap5_t: 'Redes y Seguridad', cap5_d: 'Redes UniFi empresariales con IDS/IPS, segmentación por VLAN y monitoreo. Certificado Ubiquiti (Routing/Switching/Ciberseguridad y Wireless).',
      cap6_t: 'Datos y Automatización', cap6_d: 'Conciliación por embeddings, automatización de PDFs/reportes e integración de flujos que convierte operaciones manuales de hoja de cálculo en pipelines medidos.',
      work_kicker: 'Proyectos seleccionados', work_title: 'Sistemas reales, corriendo hoy.',
      work_lede: 'Una selección — la mayoría como ingeniero único o principal. Se omiten nombres de clientes y detalles internos; la ingeniería es real y está en producción.',
      w1_tag: 'MULTI-AGENTE · 24/7', w1_t: 'Plataforma Multi-Agente',
      w1_d: 'Una plataforma de orquestación de 12+ agentes corriendo 24/7 en WhatsApp, Telegram, voz y email para una flota de miles de equipos gestionados — con routing de LLM multi-proveedor y monitoreo de costos.',
      w1_m: '~99% de conciliación automática en decenas de miles de registros legacy',
      w2_tag: 'VOICE AI · TELEFONÍA', w2_t: 'Plataforma de Voice AI',
      w2_d: 'Un SaaS de agentes de voz multi-tenant con clientes pagando en líneas reales — agentes bilingües EN/ES, enrutamiento PBX multi-destino y una auditoría de seguridad STRIDE que cubre prompt-injection y aislamiento entre tenants.',
      w2_m: 'Líneas telefónicas en vivo · migración de proveedor sin downtime reportado',
      w3_tag: 'MCP · OAUTH 2.1', w3_t: 'Integración MCP / LLM',
      w3_d: 'Un conector Model Context Protocol en producción con OAuth 2.1, exponiendo datos operativos en vivo como herramientas seguras de lectura/escritura dentro de Claude y ChatGPT — auditado y con control de roles.',
      w3_m: 'Sistemas de negocio, usables desde los asistentes de IA que tu equipo ya usa',
      w4_tag: 'COMPLIANCE · SAAS', w4_t: 'Plataforma SaaS de Compliance',
      w4_d: 'Una plataforma de compliance multi-tenant (Next.js, Postgres con Row-Level Security) que reemplaza hojas de cálculo manuales para cientos de clientes — motor de vencimientos, formularios regulatorios PDF auto-llenados y migración masiva de documentos.',
      w4_m: 'En producción en menos de 30 días',
      w5_tag: 'LOGÍSTICA · PLATAFORMA', w5_t: 'Plataforma de Operaciones Logísticas',
      w5_d: 'Una plataforma completa booking → bodega → entrega → facturación reconstruida de punta a punta con aislamiento multi-tenant jerárquico por roles — miles de tests unitarios, de base de datos y end-to-end en verde en CI.',
      w5_m: 'Reconstrucción end-to-end · demo pública en vivo',
      w6_tag: 'INFRAESTRUCTURA · SEGURIDAD', w6_t: 'Red y Seguridad Empresarial',
      w6_d: 'Redes UniFi corporativas con gateway Dream Machine, gestión de amenazas IDS/IPS, segmentación por VLAN y monitoreo 24/7 — la columna de infraestructura debajo del software.',
      w6_m: 'Alto uptime · endurecida, segmentada, monitoreada',
      work_note: '¿Construyes algo más grande? Tomo proyectos de IA y automatización a través de mi estudio, <a href="https://novaiflow.com" rel="noopener">NovAIFlow →</a>',
      about_kicker: 'Perfil', about_title: 'Un ingeniero que entrega — y lo mantiene corriendo.',
      about_p1: 'Vengo de IT e ingeniería de software — redes, sistemas y desarrollo full-stack — y me moví a la IA porque me gusta manejarlo todo: la arquitectura, el código, los evals, la seguridad y el incidente de producción a las 2 a.m.',
      about_p2: 'Hoy construyo y opero plataformas multi-agente, voice AI e integraciones MCP — la mayoría como ingeniero único o principal. Totalmente bilingüe (inglés / español), radicado en Miami, autorizado para trabajar en US, y terminando un Associate en Inteligencia Artificial en Miami Dade College.',
      tl1_t: 'Soporte Técnico', tl1_d: 'Aprendí los fundamentos resolviendo tickets reales, con las manos en hardware y usuarios.',
      tl2_t: 'Redes e Infraestructura', tl2_d: 'Me especialicé en redes UniFi empresariales, segmentación y seguridad.',
      tl3_t: 'Desarrollo Full-Stack', tl3_d: 'Pasé a construir software — Python, React y bases de datos en producción.',
      tl4_t: 'Ingeniero de IA Aplicada', tl4_d: 'Sistemas multi-agente, voice AI e integraciones MCP — producción, 24/7.',
      contact_kicker: 'Contacto', contact_title: 'Hablemos de lo que estás construyendo.',
      contact_lede: 'Abierto a roles de Applied AI / AI Engineer / LLM Engineer / Voice AI / Forward-Deployed — Miami presencial/híbrido o US-remoto — y consultoría selecta.',
      footer_role: 'Ingeniero de IA Aplicada · Miami', footer_lang: 'English · Español',
      theme_to_light: 'Cambiar a tema claro', theme_to_dark: 'Cambiar a tema oscuro'
    }
  };

  var THEME_COLORS = { dark: '#0C0D10', light: '#F4EFE4' };
  var currentLang = root.getAttribute('lang') === 'es' ? 'es' : 'en';
  var counted = false;

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (dict[el.getAttribute('data-i18n')] !== undefined) el.textContent = dict[el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (dict[el.getAttribute('data-i18n-html')] !== undefined) el.innerHTML = dict[el.getAttribute('data-i18n-html')];
    });
    var meta = document.getElementById('meta-desc');
    if (meta) meta.setAttribute('content', dict.meta_desc);
    root.setAttribute('lang', lang);
    try { localStorage.setItem('lm-lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var code = btn.querySelector('.lang-code');
      if (code) code.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    });
    applyThemeUI();
    if (reduce || counted) formatCounters();
  }

  function applyThemeUI() {
    var theme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var meta = document.getElementById('meta-theme');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
    var dict = I18N[currentLang] || I18N.en;
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? dict.theme_to_light : dict.theme_to_dark);
    });
  }

  function formatCounters() {
    document.querySelectorAll('.stat-n[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      el.textContent = target.toLocaleString(currentLang === 'es' ? 'es' : 'en-US') + (el.getAttribute('data-suffix') || '');
    });
  }

  if (currentLang === 'es') applyLang('es');
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyLang(currentLang);
    });
  });

  /* ---- theme ---- */
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('lm-theme', next); } catch (e) {}
      applyThemeUI();
    });
  });
  applyThemeUI();

  /* ---- sticky header state ---- */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- parallax layers ---- */
  var plxEls = Array.prototype.slice.call(document.querySelectorAll('[data-plx]'));
  if (!reduce && plxEls.length) {
    var ticking = false;
    var update = function () {
      var vh = window.innerHeight;
      var rects = new Map();
      plxEls.forEach(function (el) {
        var host = el.closest('section') || el.parentElement;
        if (!host) return;
        var r = rects.get(host);
        if (!r) { r = host.getBoundingClientRect(); rects.set(host, r); }
        if (r.bottom < -vh || r.top > vh * 2) return;
        var speed = parseFloat(el.getAttribute('data-plx')) || 0.15;
        el.style.transform = 'translate3d(0,' + (-r.top * speed).toFixed(1) + 'px,0)';
      });
      ticking = false;
    };
    var request = function () { if (!ticking) { window.requestAnimationFrame(update); ticking = true; } };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    update();
  }

  /* ---- stat counters ---- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null, dur = 1100;
    function fmt(n) { return n.toLocaleString(currentLang === 'es' ? 'es' : 'en-US'); }
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + (p === 1 ? suffix : '');
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  /* ---- reveal on scroll ---- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  document.querySelectorAll('.cap-list, .work-list, .stat-row, .hero-facts').forEach(function (grid) {
    Array.prototype.slice.call(grid.children).forEach(function (child, i) {
      if (child.classList.contains('reveal')) child.style.setProperty('--d', (i * 70) + 'ms');
    });
  });

  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
    formatCounters();
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      if (entry.target.classList.contains('stat') && !counted) {
        counted = true;
        document.querySelectorAll('.stat-n[data-count]').forEach(animateCount);
      }
      io.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  revealables.forEach(function (el) { io.observe(el); });
})();
