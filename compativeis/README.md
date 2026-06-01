# C⚤MPATÍVEIS
> Organic Project
---

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=000000) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=FFFFFF)

<a id="pt-br"></a>

## PT-BR / [EN-US](#en-us)

Site institucional da marca C⚤MPATÍVEIS, desenvolvido para apresentar o trabalho de Márcio Conceição com foco em casais em crise, diagnóstico gratuito e captação de leads.

## Sobre o projeto

O site foi construído com uma identidade visual escura, dourada e moderna, combinando tipografia editorial, camadas translúcidas e animações sutis de entrada. A home concentra as principais seções de conversão:

- Hero com destaque visual da marca
- Seção “Para Você” com dores comuns de casais
- Seção “Quem Sou” com apresentação e método
- Seção “Oportunidade” com CTA para diagnóstico gratuito
- Seção “Prova” com depoimentos e CTA final

## Funcionalidades

- Layout responsivo para desktop e mobile
- Menu hambúrguer com navegação suave entre seções
- Logo animado no header conforme o scroll
- Scroll reveal na seção “Quem Sou”
- SEO básico com metatags, Open Graph e dados estruturados
- Rewrites configurados para rotas client-side na Vercel

## Como executar localmente

Pré-requisitos:

- Node.js instalado
- npm instalado

Instalação:

```bash
npm install
```

Executar em desenvolvimento:

```bash
npm run dev
```

## Build

Gerar a versão de produção:

```bash
npm run build
```

Pré-visualizar o build localmente:

```bash
npm run preview
```

## Deploy na Vercel

O projeto já contém `vercel.json` com rewrite para SPA, então qualquer rota do React Router é servida corretamente.

Fluxo sugerido:

1. Suba o código para um repositório Git.
2. Importe o projeto na Vercel.
3. Deixe a Vercel detectar automaticamente o Vite.
4. Publique o site.

## Estrutura principal

```text
src/
  components/
    layout/
    features/
    pages/
    ui/
  assets/
  lib/
```

## Observação

O conteúdo, as cores e a linguagem visual foram pensados para reforçar o posicionamento do serviço e facilitar a conversão para o diagnóstico gratuito.

---

<a id="en-us"></a>

## EN-US / [PT-BR](#pt-br)

Institutional website for the C⚤MPATÍVEIS brand, built to present Márcio Conceição's work with a focus on couples in crisis, a free diagnostic session, and lead generation.

## About the project

The site was designed with a dark, golden, modern visual identity, combining editorial typography, translucent layers, and subtle entrance animations. The homepage contains the main conversion sections:

- Hero with a strong brand visual
- “For You” section with common relationship pain points
- “Who I Am” section with presentation and method
- “Opportunity” section with the free diagnostic CTA
- “Proof” section with testimonials and the final CTA

## Features

- Responsive layout for desktop and mobile
- Hamburger menu with smooth section navigation
- Animated header logo based on scroll position
- Scroll reveal animations in the “Who I Am” section
- Basic SEO with metadata, Open Graph, and structured data
- Client-side routing rewrites configured for Vercel

## Run locally

Prerequisites:

- Node.js installed
- npm installed

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build

Create the production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Deploy on Vercel

The project already includes `vercel.json` with a SPA rewrite, so any React Router route is served correctly.

Suggested flow:

1. Push the code to a Git repository.
2. Import the project into Vercel.
3. Let Vercel detect Vite automatically.
4. Deploy the site.

## Main structure

```text
src/
  components/
    layout/
    features/
    pages/
    ui/
  assets/
  lib/
```

## Note

The content, colors, and visual language were designed to reinforce the service positioning and improve conversion to the free diagnostic session.
