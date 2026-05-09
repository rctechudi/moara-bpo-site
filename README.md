# Moara BPO Financeiro — Site Institucional v3

## Estrutura do projeto

```
moara-bpo/
├── index.html              ← HTML principal (raramente precisa editar)
├── css/
│   └── style.css           ← Estilos e cores (edite :root para cores)
├── js/
│   ├── config.js           ← ✅ EDITE AQUI: todos os textos, planos, contatos, SEO
│   └── main.js             ← Lógica de renderização (não precisa editar)
└── assets/
    ├── logo.png            ← ✅ Logomarca Moara BPO (já incluída)
    ├── cintia.jpg          ← ✅ Foto da Cíntia (já incluída)
    ├── favicon.ico         ← ⬅ Adicionar favicon aqui
    └── og-image.jpg        ← ⬅ Imagem para redes sociais (1200x630px)
```

---

## 🚀 Passo a passo: Configurar o projeto no VS Code

### 1. Instalar ferramentas necessárias

Certifique-se de ter instalados:
- [Node.js](https://nodejs.org) (versão 18+)
- [VS Code](https://code.visualstudio.com)
- Extensão **Live Server** no VS Code (pesquise no menu de extensões)

### 2. Abrir o projeto

```bash
# Descompacte o arquivo .zip do projeto
# Abra o VS Code e vá em:
File → Open Folder → selecione a pasta moara-bpo
```

### 3. Visualizar em tempo real

No VS Code:
1. Clique com botão direito em `index.html`
2. Clique em **"Open with Live Server"**
3. O site abrirá no navegador com atualização automática ao salvar

### 4. Editar conteúdo

Abra `js/config.js` e edite os valores desejados. **Salve** — a página atualiza automaticamente.

Exemplos de edições comuns:
```javascript
// Alterar telefone
whatsapp: "5534999999999",

// Alterar Instagram  
instagram: "@novo.perfil",

// Adicionar item ao plano Essencial
itens: [
  "Acompanhamento de Notas Fiscais",
  "Novo serviço aqui",        // ← adicione assim
  ...
]
```

### 5. Alterar cores

Abra `css/style.css`, localize o bloco `:root` no topo e edite:
```css
:root {
  --ouro:  #C9A84C;   /* cor dourada principal */
  --preto: #0A0A0A;   /* fundo geral */
}
```

### 6. Adicionar a foto/logo

- **Logo:** substitua `img/logo.png` mantendo o mesmo nome
- **Foto Cíntia:** substitua `img/cintia.jpg` mantendo o mesmo nome
- **Favicon:** adicione `assets/favicon.ico`
- **Novas imagens:** coloque na pasta `img/`

---

## 🌐 Deploy no Vercel (publicar online)

### Opção A — Deploy via GitHub (recomendado, atualizações automáticas)

```bash
# 1. Instale o Git se não tiver
# 2. Crie repositório no github.com
# 3. No terminal dentro da pasta do projeto:
git init
git add .
git commit -m "primeiro deploy Moara BPO"
git remote add origin https://github.com/seu-usuario/moara-bpo.git
git push -u origin main
```

No Vercel:
1. Acesse [vercel.com](https://vercel.com) → Login com GitHub
2. "Add New Project" → importe o repositório moara-bpo
3. Clique em **Deploy**
4. Em "Settings → Domains" → adicione `moarabpo.com.br`

> A cada `git push`, o site é atualizado automaticamente no Vercel.

### Opção B — Deploy direto (mais rápido, sem Git)

1. Acesse [vercel.com](https://vercel.com)
2. Arraste a pasta `moara-bpo` inteira para o dashboard
3. Em "Settings → Domains" → adicione `moarabpo.com.br`

### Apontar domínio (Registro.br → Vercel)

No Registro.br, edite a Zona DNS do domínio:
```
Tipo A    →  76.76.21.21    (IP do Vercel)
Tipo CNAME → cname.vercel-dns.com
```
Propaga em até 24h (geralmente menos de 1h).

---

## 📊 SEO — Palavras-chave integradas

As seguintes palavras-chave estão integradas nos textos e meta tags do site:

**Primárias (alto volume):**
- BPO financeiro
- terceirização financeira
- gestão financeira terceirizada
- contas a pagar e receber

**Regionais (menor concorrência, alta conversão):**
- BPO financeiro Uberlândia
- BPO financeiro Minas Gerais
- terceirização financeira Uberlândia

**Long-tail (intenção de compra):**
- financeiro organizado empresa
- BPO financeiro para pequenas empresas
- controle financeiro PME
- conciliação bancária terceirizada
- fluxo de caixa organizado

**Ações recomendadas após o site no ar:**
1. Cadastrar no **Google Meu Negócio** (gratuito — aparece no Maps)
2. Criar perfil no **Google Search Console** (monitorar o ranqueamento)
3. Produzir conteúdo no Instagram com essas palavras-chave na bio
4. Pedir que clientes deixem avaliações no Google

---

## 🛠 Próximos passos no desenvolvimento

- [ ] Sistema de upload de planilhas (portal do cliente)
- [ ] Dashboard financeiro com gráficos
- [ ] Área de login para clientes
- [ ] Blog com conteúdo SEO sobre BPO financeiro
