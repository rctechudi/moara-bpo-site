/**
 * MOARA BPO — main.js v3
 * Renderiza todo o conteúdo a partir das configurações em js/config.js
 * Para alterar textos, contatos e planos: edite js/config.js
 */
document.addEventListener('DOMContentLoaded', () => {

  // ── SEO dinâmico ────────────────────────────────────────────
  const setMeta = (sel, val, attr='content') => {
    const el = document.querySelector(sel);
    if (el) el[attr] = val;
  };
  document.title = SITE.seo.title;
  setMeta('meta[name="description"]', SITE.seo.description);
  setMeta('meta[name="keywords"]', SITE.seo.keywords);
  setMeta('meta[property="og:title"]', SITE.seo.title);
  setMeta('meta[property="og:description"]', SITE.seo.description);
  setMeta('meta[name="twitter:title"]', SITE.seo.title);
  setMeta('meta[name="twitter:description"]', SITE.seo.description);

  // Schema.org LocalBusiness
  const schema = {
    "@context":"https://schema.org","@type":"LocalBusiness",
    "name":"Moara BPO Financeiro","description":SITE.seo.description,
    "url":SITE.seo.ogUrl,"telephone":"+55"+SITE.contato.whatsapp.replace('55',''),
    "email":SITE.contato.email,"image":"./img/mora_fclaro.png",
    "address":{"@type":"PostalAddress","addressLocality":"Uberlândia","addressRegion":"MG","addressCountry":"BR"},
    "founder":{"@type":"Person","name":SITE.cintia.nome,"jobTitle":SITE.cintia.cargo},
    "priceRange":"$$","openingHours":"Mo-Fr 08:00-18:00",
    "sameAs":[SITE.contato.instagramUrl,"https://"+SITE.contato.site]
  };
  document.getElementById('schema-lb').textContent = JSON.stringify(schema);

  // ── Bind simples ─────────────────────────────────────────────
  const bind = (sel, val) => document.querySelectorAll('['+sel+']').forEach(el => el.textContent = val);
  bind('data-empresa-nome',      SITE.empresa.nome);
  bind('data-empresa-subtitulo', SITE.empresa.subtitulo);
  bind('data-empresa-descricao', SITE.empresa.descricao);
  bind('data-empresa-cidade',    SITE.empresa.cidade);
  bind('data-empresa-grupo',     SITE.empresa.grupo);
  bind('data-empresa-ano',       SITE.empresa.ano);
  bind('data-cintia-nome',       SITE.cintia.nome);
  bind('data-cintia-cargo',      SITE.cintia.cargo);
  bind('data-cintia-bio1',       SITE.cintia.bio1);
  bind('data-cintia-bio2',       SITE.cintia.bio2);
  bind('data-cintia-bio3',       SITE.cintia.bio3);
  bind('data-cintia-quote',      SITE.cintia.quote);
  bind('data-diferencial-titulo',SITE.diferencial.titulo);
  bind('data-diferencial-desc',  SITE.diferencial.descricao);
  bind('data-missao',            SITE.essencia.missao);
  bind('data-visao',             SITE.essencia.visao);
  bind('data-whatsapp-label',    SITE.contato.whatsappLabel);
  bind('data-email',             SITE.contato.email);
  bind('data-instagram',         SITE.contato.instagram);

  // Valores (lista)
  document.querySelectorAll('[data-valores]').forEach(ul => {
    ul.innerHTML = SITE.essencia.valores.map(v => `<li>${v}</li>`).join('');
  });

  // Foto Cíntia
  document.querySelectorAll('img[data-cintia-foto]').forEach(img => {
    img.src = SITE.cintia.foto;
    img.alt = `${SITE.cintia.nome} — ${SITE.cintia.cargo}, Moara BPO Financeiro Uberlândia MG`;
    img.onerror = function() {
      this.style.display = 'none';
      const ph = this.parentElement.querySelector('.cintia-placeholder');
      if (ph) ph.style.display = 'flex';
    };
  });

  // Links dinâmicos — WhatsApp com mensagem pré-preenchida opcional
  document.querySelectorAll('a[data-wa-link]').forEach(a => {
    const msg = a.getAttribute('data-wa-msg');
    a.href = msg
      ? `https://wa.me/${SITE.contato.whatsapp}?text=${encodeURIComponent(msg)}`
      : `https://wa.me/${SITE.contato.whatsapp}`;
  });
  document.querySelectorAll('a[data-instagram-link]').forEach(a =>
    a.href = SITE.contato.instagramUrl);
  const el = document.getElementById('link-email');
  if (el) el.href = `mailto:${SITE.contato.email}`;

  // Logo fallback
  const logoImg = document.getElementById('nav-logo-img');
  if (logoImg) {
    logoImg.onerror = () => {
      logoImg.style.display = 'none';
      document.getElementById('nav-logo-fallback').style.display = 'block';
    };
  }

  // ── Serviços ─────────────────────────────────────────────────
  const sg = document.getElementById('servicos-grid');
  if (sg) sg.innerHTML = SITE.servicos.map(s => `
    <div class="servico-card reveal">
      <span class="servico-icon" aria-hidden="true">${s.icon}</span>
      <h3>${s.titulo}</h3>
      <p>${s.desc}</p>
    </div>`).join('');

  // ── Benefícios ────────────────────────────────────────────────
  const bg = document.getElementById('beneficios-grid');
  if (bg) bg.innerHTML = SITE.beneficios.map(b => `
    <div class="beneficio-item reveal">
      <h3>${b.titulo}</h3>
      <p>${b.desc}</p>
    </div>`).join('');

  // ── Planos ────────────────────────────────────────────────────
  const pg = document.getElementById('planos-grid');
  if (pg) pg.innerHTML = SITE.planos.map(pl => `
    <div class="plano-card ${pl.destaque ? 'destaque' : ''} reveal">
      ${pl.destaque ? '<span class="plano-badge">Mais escolhido</span>' : '<div class="plano-spacer"></div>'}
      <div class="plano-nome">${pl.nome}</div>
      <div class="plano-sub">${pl.subtitulo}</div>
      <ul class="plano-itens">
        ${pl.itens.map((item, i) => {
          if (item.endsWith(':') || item.includes('mais:'))
            return `<li class="plano-divider">${item}</li>`;
          return `<li>${item}</li>`;
        }).join('')}
      </ul>
      <a href="https://wa.me/${SITE.contato.whatsapp}?text=${encodeURIComponent('Olá! Tenho interesse no plano ' + pl.nome + ' da Moara BPO. Gostaria de uma proposta.')}"
         class="plano-cta" target="_blank" rel="noopener">${pl.tagCTA}</a>
    </div>`).join('');

  // ── Etapas ────────────────────────────────────────────────────
  const eg = document.getElementById('etapas-grid');
  if (eg) eg.innerHTML = SITE.etapas.map(e => `
    <div class="etapa reveal">
      <div class="etapa-num">${e.num}</div>
      <h3>${e.titulo}</h3>
      <p>${e.descricao}</p>
    </div>`).join('');

  // ── FAQ ───────────────────────────────────────────────────────
  const fl = document.getElementById('faq-lista');
  if (fl) {
    fl.innerHTML = SITE.faq.map(f => `
      <div class="faq-item" role="listitem">
        <div class="faq-q" role="button" tabindex="0">${f.p}</div>
        <div class="faq-r">${f.r}</div>
      </div>`).join('');
    fl.addEventListener('click', e => {
      const item = e.target.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  }

  // ── Select planos no form ─────────────────────────────────────
  const sel = document.querySelector('select[data-planos-select]');
  if (sel) sel.innerHTML =
    '<option value="">Selecione um plano...</option>' +
    SITE.planos.map(p => `<option value="${p.id}">${p.nome}</option>`).join('') +
    '<option value="duvida">Ainda tenho dúvidas</option>';

  // ── Formulário → WhatsApp ─────────────────────────────────────
  document.querySelector('.form-submit')?.addEventListener('click', () => {
    const nome    = document.getElementById('f-nome')?.value.trim();
    const empresa = document.getElementById('f-empresa')?.value.trim();
    const plano   = document.getElementById('f-plano')?.value;
    const msg     = document.getElementById('f-msg')?.value.trim();
    if (!nome || !empresa) { alert('Por favor, preencha seu nome e a empresa.'); return; }
    let txt = `Olá! Meu nome é *${nome}* da empresa *${empresa}*.`;
    if (plano && plano !== 'duvida') txt += ` Tenho interesse no plano *${plano}* da Moara BPO.`;
    if (plano === 'duvida') txt += ` Ainda tenho dúvidas e gostaria de conhecer melhor os planos.`;
    if (msg) txt += ` ${msg}`;
    window.open(`https://wa.me/${SITE.contato.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank');
  });

  // ── Reveal on scroll ──────────────────────────────────────────
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 75);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ── Nav hamburger ─────────────────────────────────────────────
  const ham = document.getElementById('hamburger');
  const navUl = document.getElementById('nav-links');
  if (ham && navUl) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      navUl.classList.toggle('nav-open');
    });
    document.querySelectorAll('#nav-links a').forEach(a =>
      a.addEventListener('click', () => {
        ham.classList.remove('active');
        navUl.classList.remove('nav-open');
      }));
  }

});
