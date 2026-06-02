# ORTOVITA - Dr. Wagner Bernardo
> Vibe Codded project
---

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF) ![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=FFFFFF)

<a id="pt-br"></a>

## PT-BR / [EN-US](#en-us)

Landing page premium e para conversão do curso presencial de **Odontologia Digital e Cirurgia Guiada Navegada** ministrado pelo Dr. Wagner Bernardo. Desenvolvida para captar leads qualificados, a página apresenta o conteúdo científico e as simulações tecnológicas do treinamento presencial com um design impecável no estilo *dark & gold*.

---

## 🌟 Funcionalidades e Diferenciais Técnicos

- ⏳ **Timer Regressivo Dinâmico**: Script de urgência real (renovado em tempo real com base na data local) para incentivar a conversão rápida no lote promocional.
- 🎯 **Simulador de Desvio Apical Interativo**: Módulo em canvas/SVG dinâmico que simula a precisão cirúrgica de implantes. O usuário pode arrastar o slider para ver se seu desvio apical está dentro da margem segura de **< 1.0mm** e obter aprovação ou reprovação visual em tempo real.
- 📂 **Abas Interativas de Conteúdo**: Navegação ágil entre os três módulos principais do curso:
  - **Cirurgia Navegada**: Foco estratégico em fusão de tomografia (DICOM) e escaneamento (STL).
  - **Módulo Teórico**: 13 aulas completas detalhando de venopunção a concentrados plaquetários (PRP/PRF).
  - **Módulo Prático**: 8 práticas intensivas e individuais com manequins anatômicos.
- 🔬 **Workflow Digital & Metodologia Ativa**: Apresentação visual premium baseada nos "3 Pilares" do Hands-on de elite (Calibração Precisa, Registro Anatômico e Percepção Visual Neurocognitiva).
- 🧾 **Formulário de Inscrição Inteligente**: Validações detalhadas exigindo o número de **CRO** (Conselho Regional de Odontologia), além de dados básicos e seleção dinâmica de forma de pagamento (Pix ou Cartão).
- 📱 **Responsividade Premium**: Experiência visual fluida e adaptável para desktop, tablets e celulares, utilizando a nova e ultraveloz biblioteca **Tailwind CSS v4** com compilação nativa no Vite.
- ⚡ **SEO e Performance**: Otimização semântica, metatags avançadas para carregamento rápido e links únicos para automações.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (Versão 18 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### 1. Clonar e Instalar as Dependências
Navegue até a pasta do subprojeto `Ortovita-Wagner` e instale as dependências:
```bash
cd Ortovita-Wagner
npm install
```

### 2. Rodar o Servidor de Desenvolvimento
Inicie o ambiente local com o Vite:
```bash
npm run dev
```
O console exibirá o link local (ex: `http://localhost:5173`) para acessar a landing page em tempo real.

### 3. Build de Produção
Para compilar e otimizar a aplicação para distribuição final:
```bash
npm run build
```

Para inspecionar o resultado gerado localmente antes do deploy:
```bash
npm run preview
```

---

## 📁 Estrutura de Pastas

O projeto utiliza uma arquitetura baseada em componentes autocontidos e reutilizáveis organizados da seguinte forma:

```text
Ortovita-Wagner/
├── src/
│   ├── components/
│   │   ├── ui/          # Elementos primitivos (Button, Card, Input)
│   │   ├── layout/      # Estrutura global (Header, Footer, MainLayout)
│   │   ├── features/    # Componentes com lógica de negócios (CourseLandingPage)
│   │   └── common/      # Utilitários compartilhados
│   ├── lib/             # Helpers e concatenação de classes (cn, tailwind-merge)
│   ├── assets/          # Imagens, silhuetas e vetores estáticos
│   ├── Router.jsx       # Configuração das rotas com react-router-dom
│   ├── main.jsx         # Ponto de entrada do React
│   └── main.css         # Configuração e diretivas do Tailwind CSS v4
```

---

## 🎨 Identidade Visual e Co-criação (Vibe Coding)

Este projeto reflete um design altamente sofisticado, integrando a sobriedade do preto absoluto (`#020203`) com a nobreza e brilho dos tons dourados gradientes (`#C5A059`, `#eab308`). 

Toda a arquitetura do site foi concebida por meio da sinergia entre engenharia humana e inteligência artificial generativa (**Antigravity da Google DeepMind / Gemini**). O processo de **Vibe Coding** permitiu delegar a infraestrutura e os detalhes minuciosos de CSS ao agente enquanto a mente humana focava no posicionamento comercial, precisão científica da odontologia guiada e na lógica dos simuladores interativos.

---

---

<a id="en-us"></a>

## EN-US / [PT-BR](#pt-br)

A premium, high-converting landing page for the **Digital Dentistry & Dynamic Guided Surgery** hands-on course taught by Dr. Wagner Bernardo. Tailored to capture high-quality leads, the page features scientific curriculum highlights and interactive clinical simulations with a state-of-the-art *dark & gold* aesthetic.

---

## 🌟 Key Features and Technical Highlights

- ⏳ **Dynamic Countdown Timer**: Real-time urgency countdown script (re-calculated dynamically using local system dates) to stimulate registrations during promotional slots.
- 🎯 **Interactive Apex Deviation Simulator**: A robust, live vector-based (SVG) module representing clinical surgical accuracy. Users can interact with the slider to test if their simulated apical deviation remains within the safe **< 1.0mm** zone, triggering immediate approval or danger alerts.
- 📂 **Interactive Curriculum Tabs**: Seamless navigation between the three core chapters of the training course:
  - **Guided Surgery**: Strategic focus on DICOM (tomography) and STL (intraoral scan) file fusion.
  - **Theoretical Module**: 13 exhaustive classes covering everything from venipuncture to platelet concentrates (PRP/PRF).
  - **Practical Module**: 8 intense, individualized clinical simulator exercises.
- 🔬 **Digital Workflow & Active Methodology**: Engaging layout showcasing the "3 Pillars" of elite hands-on practices (Precise Calibration, Bone Registration, and Neurocognitive Visual Feedback).
- 🧾 **Smart Enrollment Checkout Form**: Robust input validations requiring regional board registration (**CRO**), personal IDs, and a dynamic billing picker (Pix or Credit Card).
- 📱 **Premium Responsiveness**: A fluid and pixel-perfect experience across desktop, tablet, and mobile screens, leveraging the ultra-fast compiler of the new **Tailwind CSS v4** coupled natively with Vite.

---

## 🛠️ Local Setup Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or above)
- `npm` or `yarn` package manager

### 1. Install Dependencies
Navigate into the `Ortovita-Wagner` directory and install the packages:
```bash
cd Ortovita-Wagner
npm install
```

### 2. Run the Development Server
Launch the local environment:
```bash
npm run dev
```
Open the provided local URL (e.g., `http://localhost:5173`) in your browser.

### 3. Production Build
Compile and optimize for deployment:
```bash
npm run build
```

Preview the production-ready build locally:
```bash
npm run preview
```

---

## 📁 Directory Layout

```text
Ortovita-Wagner/
├── src/
│   ├── components/
│   │   ├── ui/          # Primitive visual layers (Buttons, Cards, Inputs)
│   │   ├── layout/      # Shell structure (Header, Footer, MainLayout)
│   │   ├── features/    # Logic-centric wrappers (CourseLandingPage)
│   │   └── common/      # Global shared styles and files
│   ├── lib/             # Utility classes and wrappers (cn, tailwind-merge)
│   ├── assets/          # Static icons, vector silhouettes, and images
│   ├── Router.jsx       # Routing configurations powered by React Router v7
│   ├── main.jsx         # App bootstrapping entry
│   └── main.css         # Tailwind CSS v4 setup and directives
```

---

## 🎨 Art Direction and AI Co-creation (Vibe Coding)

The landing page features a prestigious styling, juxtaposing high-contrast pitch blacks (`#020203`) against premium, radiant golden gradients (`#C5A059`, `#eab308`). 

The technical stack was built through the cooperative effort of human software craftsmanship and advanced agentic intelligence (**Google DeepMind's Antigravity / Gemini**). Applying **Vibe Coding** workflows, tedious implementation steps and CSS optimizations were solved programmatically, allowing the human designer to orchestrate the clinical science accuracy, layout responsiveness, and overall user delight.
