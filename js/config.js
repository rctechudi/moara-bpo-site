/**
 * ╔══════════════════════════════════════════════════════════════╗
 *  MOARA BPO — CONFIGURAÇÕES DO SITE v3  (Maio 2026)
 *  ► Para editar conteúdo: altere os valores neste arquivo.
 *  ► Para editar cores: abra css/style.css e edite :root
 *  ► Para editar layout: abra index.html
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE = {

  // ── EMPRESA ──────────────────────────────────────────────────
  empresa: {
    nome:      "Moara",
    subtitulo: "BPO Financeiro",
    tagline:   "Financeiro organizado é crescimento descomplicado.",
    descricao: "Terceirizamos o financeiro da sua empresa com precisão e acompanhamento diário — para que você foque no que realmente importa: crescer.",
    cidade:    "Uberlândia - MG",
    grupo:     "Grupo RC Tech",
    ano:       "2026",
  },

  // ── CONTATO ──────────────────────────────────────────────────
  contato: {
    whatsapp:      "5534988646444",
    whatsappLabel: "(34) 9 8864-6444",
    email:         "contato@moarabpo.com.br",
    instagram:     "@moara.bpofinanceiro",
    instagramUrl:  "https://instagram.com/moara.bpofinanceiro",
    site:          "www.moarabpo.com.br",
  },

  // ── CÍNTIA ───────────────────────────────────────────────────
  cintia: {
    nome:  "Cíntia Costa",
    cargo: "CEO · Moara BPO Financeiro",
    foto:  "./img/cintia.jpg",
    bio1:  "Apaixonada por Finanças, com mais de 15 anos de experiência em gestão financeira e administrativa, formada em Gestão Financeira com MBA em Auditoria, Controladoria e Finanças.",
    bio2:  "A Moara nasceu com o propósito de descomplicar a gestão financeira das empresas, oferecendo suporte estratégico para que empresários tenham mais clareza, segurança e controle nas tomadas de decisão.",
    bio3:  "Entendemos que cada cliente é ÚNICO — por isso oferecemos uma Gerente de Sucesso Exclusiva para acompanhar sua empresa diariamente.",
    quote: "Financeiro organizado é crescimento descomplicado.",
  },

  // ── DIFERENCIAL EXCLUSIVO ─────────────────────────────────────
  diferencial: {
    titulo:   "Você terá uma Gerente de Sucesso Exclusiva",
    descricao:"Para acompanhar sua empresa e te atender diariamente. Não somos um sistema — somos seu braço financeiro estratégico.",
  },

  // ── ESSÊNCIA ─────────────────────────────────────────────────
  essencia: {
    missao: "Descomplicar a gestão financeira das empresas, oferecendo suporte estratégico para que empresários tenham mais clareza, segurança e controle nas decisões.",
    visao:  "Ser referência nacional como parceira estratégica em BPO financeiro para pequenas e médias empresas.",
    valores: ["Clareza", "Segurança", "Excelência operacional", "Crescimento sustentável", "Atendimento personalizado"],
  },

  // ── SERVIÇOS (lista unificada para a seção de serviços) ───────
  servicos: [
    { icon:"📋", titulo:"Contas a Pagar e Receber",   desc:"Registro, controle e acompanhamento diário de todas as obrigações e recebimentos da sua empresa." },
    { icon:"🧾", titulo:"Emissão de Notas Fiscais",    desc:"Emitimos todas as notas fiscais com precisão e dentro dos prazos, evitando problemas fiscais." },
    { icon:"📨", titulo:"Boletos Bancários",           desc:"Emissão, envio e acompanhamento de boletos para garantir o recebimento dos seus clientes." },
    { icon:"🏦", titulo:"Conciliação Bancária",        desc:"Conciliação bancária completa para garantir que todos os lançamentos estejam corretos e em dia." },
    { icon:"💳", titulo:"Vendas em Cartões",           desc:"Registro e controle de todas as movimentações em cartões de crédito e débito." },
    { icon:"⚠️", titulo:"Cobrança de Inadimplentes",   desc:"Controle ativo e estratégico de cobranças para reduzir a inadimplência do seu negócio." },
    { icon:"📊", titulo:"Relatórios Mensais",          desc:"Relatórios completos de fluxo de caixa, inadimplentes, contas em atraso, recebimentos e movimentações." },
    { icon:"💰", titulo:"Fluxo de Caixa",              desc:"Acompanhamento diário, semanal e mensal do fluxo de caixa para total previsibilidade financeira." },
  ],

  // ── BENEFÍCIOS ────────────────────────────────────────────────
  beneficios: [
    { titulo:"Foco no seu negócio",       desc:"Livre-se das rotinas operacionais e dedique-se ao que realmente gera crescimento para a sua empresa." },
    { titulo:"Informações rápidas",       desc:"Relatórios claros e dados precisos sempre que você precisar tomar uma decisão estratégica." },
    { titulo:"Redução de gastos",         desc:"Menos custo que um funcionário CLT — sem encargos, treinamentos e problemas de gestão de pessoas." },
    { titulo:"Segurança financeira",      desc:"Especialista dedicada monitorando cada centavo que entra e sai da sua empresa, diariamente." },
    { titulo:"Clareza e previsibilidade", desc:"Controle total do fluxo de caixa para planejar o futuro da empresa com segurança e exatidão." },
    { titulo:"Especialista à disposição", desc:"Sua Gerente de Sucesso Exclusiva disponível para atender sua empresa no dia a dia." },
  ],

  // ── PLANOS (sem preço — cumulativos) ─────────────────────────
  planos: [
    {
      id:        "essencial",
      nome:      "Essencial",
      subtitulo: "Organização Financeira Básica",
      destaque:  false,
      tagCTA:    "Quero começar",
      itens: [
        "Acompanhamento de Notas Fiscais",
        "Gestão de Contas a Receber",
        "Gestão de Contas a Pagar",
        "Conciliação Bancária Semanal (1 conta PJ)",
        "Registro de vendas em cartões",
        "Controle de vencimentos",
        "Relatório de fluxo de caixa mensal",
        "Relatório de inadimplentes",
        "Atendimento via WhatsApp e e-mail",
        "Gerente de Sucesso Exclusiva",
      ],
    },
    {
      id:        "estrategico",
      nome:      "Estratégico",
      subtitulo: "Controle + Visão Estratégica",
      destaque:  true,
      tagCTA:    "Quero este plano",
      itens: [
        "Tudo do plano Essencial, mais:",
        "Conciliação bancária diária",
        "Gestão de plano de contas",
        "Relatório de despesas detalhado",
        "Relatório de posição de recebimentos",
        "Relatório de movimentações (receitas e despesas)",
        "Agendamento de pagamentos",
        "Cobrança ativa de inadimplentes",
      ],
    },
    {
      id:        "executivo",
      nome:      "Executivo",
      subtitulo: "Gestão Avançada com CFO Light",
      destaque:  false,
      tagCTA:    "Quero este plano",
      itens: [
        "Tudo do plano Estratégico, mais:",
        "Agendamento Bancário completo",
        "Acompanhamento de metas financeiras",
        "Análise de indicadores financeiros",
        "Reuniões consultivas CFO Light",
        "Diagnóstico financeiro periódico",
        "Suporte estratégico para decisões",
      ],
    },
  ],

  // ── ETAPAS DO FLUXO DE TRABALHO ──────────────────────────────
  etapas: [
    { num:"01", titulo:"Diagnóstico",         descricao:"Mapeamos os processos financeiros da sua empresa, entendemos a realidade atual e identificamos oportunidades de melhoria." },
    { num:"02", titulo:"Estruturação",         descricao:"Implementamos os processos necessários, organizamos o plano de contas e configuramos as ferramentas de gestão." },
    { num:"03", titulo:"Operação Diária",      descricao:"Assumimos a rotina financeira: lançamentos, conciliações, emissões e cobranças com total controle e precisão." },
    { num:"04", titulo:"Relatórios & Reunião", descricao:"Entregamos relatórios periódicos e realizamos reunião de análise para que você tome decisões com segurança." },
  ],

  // ── FAQ ───────────────────────────────────────────────────────
  faq: [
    { p:"O que é BPO Financeiro?",                   r:"BPO Financeiro é a terceirização das rotinas financeiras da sua empresa para especialistas. Uma Gerente de Sucesso Exclusiva cuida das operações diárias enquanto você mantém o controle e as decisões estratégicas." },
    { p:"Qual é o investimento necessário?",          r:"Cada plano é personalizado de acordo com o volume e as necessidades específicas do seu negócio. Agende uma conversa e receba uma proposta sob medida — geralmente o investimento é inferior ao custo de um colaborador interno." },
    { p:"Minha empresa precisa ser grande?",           r:"Não. Somos especializados em pequenas e médias empresas. Nossos planos foram criados exatamente para negócios que precisam de organização financeira profissional sem o custo de um departamento interno." },
    { p:"Perco o controle das minhas finanças?",       r:"Pelo contrário — você ganha mais visibilidade. Todo o histórico fica registrado, você recebe relatórios claros e tem acesso às informações a qualquer momento. O BPO executa as operações, você aprova e decide." },
    { p:"Como funciona o acesso bancário?",            r:"Trabalhamos com um Perfil de Acesso secundário ao banco, sem permissão para efetuar pagamentos — apenas consultas e agendamentos. Toda a segurança financeira permanece nas suas mãos." },
    { p:"Atendem empresas fora de Uberlândia?",        r:"Sim! Atendemos 100% remotamente para todo o Brasil via WhatsApp, e-mail e reuniões online. A distância não é um obstáculo." },
    { p:"Como é feita a transição?",                   r:"Começamos com um diagnóstico financeiro gratuito. Em seguida, estruturamos os processos e fazemos uma transição organizada e segura, sem interromper as operações da sua empresa." },
    { p:"O que é a Gerente de Sucesso Exclusiva?",    r:"É uma profissional dedicada exclusivamente ao acompanhamento do financeiro da sua empresa, disponível diariamente para atender suas demandas, reportar informações e garantir que tudo está sob controle." },
  ],

  // ── SEO ───────────────────────────────────────────────────────
  seo: {
    title:       "Moara BPO Financeiro | Terceirização Financeira para PMEs | Uberlândia-MG",
    description: "BPO Financeiro com Gerente de Sucesso Exclusiva. Terceirize o financeiro da sua empresa: contas a pagar/receber, fluxo de caixa, conciliação bancária e relatórios. Uberlândia-MG e todo o Brasil.",
    keywords:    "BPO financeiro, terceirização financeira, gestão financeira terceirizada, BPO financeiro Uberlândia, contas a pagar e receber, fluxo de caixa, conciliação bancária, relatório financeiro PME, controle financeiro empresa, financeiro organizado, BPO Minas Gerais, terceirizar financeiro pequena empresa",
    ogUrl:       "https://www.moarabpo.com.br",
  },

};
