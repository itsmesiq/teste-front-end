# Teste Front-End — Econverse

Implementação do teste técnico para a vaga de Front-End da Econverse.

O projeto consiste na reprodução de uma interface de e-commerce a partir do layout proposto, utilizando React, TypeScript, Vite e SCSS, com foco em componentização, responsividade e organização do código.

## Tecnologias

- React
- TypeScript
- Vite
- Sass (SCSS)
- pnpm

## Requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js
- pnpm

## Instalação

Clone o repositório:

```bash
git clone https://github.com/itsmesiq/teste-front-end.git
```

Acesse a pasta do projeto:

```bash
cd teste-front-end
```

Instale as dependências:

```bash
pnpm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

Após iniciar, acesse a URL exibida pelo Vite no terminal. Normalmente:

```text
http://localhost:5173
```

## Build de produção

Para verificar o projeto e gerar a build de produção:

```bash
pnpm build
```

O comando executa:

1. Verificação de tipos utilizando TypeScript;
2. Build de produção utilizando Vite.

Os arquivos gerados ficam disponíveis na pasta `dist/`.

## Preview da build

Após gerar a build, é possível executá-la localmente através do servidor de preview do Vite:

```bash
pnpm preview
```

## Lint

Para executar o ESLint e verificar possíveis problemas no código:

```bash
pnpm lint
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Verifica os tipos e gera a build de produção |
| `pnpm preview` | Executa um preview da build de produção |
| `pnpm lint` | Executa o ESLint |

## Funcionalidades

O projeto implementa as principais funcionalidades e seções propostas no teste técnico:

- Header com navegação e campo de busca;
- Banner principal;
- Grid de banners promocionais;
- Seção de categorias;
- Listagem de produtos;
- Carrossel de produtos;
- Modal de detalhes do produto;
- Seletor de quantidade;
- Seção de marcas;
- Newsletter;
- Footer;
- Layout responsivo para diferentes tamanhos de tela.

## Responsividade

A interface foi desenvolvida para se adaptar a diferentes dispositivos e tamanhos de tela.

Foram considerados breakpoints para:

- Desktop;
- Tablet;
- Dispositivos móveis.

Os principais componentes possuem estilos responsivos utilizando SCSS, adaptando:

- Navegação;
- Campo de busca;
- Grids;
- Banners;
- Categorias;
- Carrosséis;
- Formulário da newsletter;
- Footer.

## Estrutura do projeto

A aplicação está organizada em componentes reutilizáveis, mantendo os estilos SCSS separados de acordo com cada componente.

```text
src/
├── assets/
├── components/
│   ├── BannersGrid/
│   ├── CategorySection/
│   ├── Footer/
│   ├── Header/
│   ├── MainBanner/
│   ├── Newsletter/
│   ├── ProductCarousel/
│   ├── ProductCard/
│   ├── ProductModal/
│   ├── ProductSection/
│   └── ...
├── data/
├── services/
├── styles/
├── App.tsx
└── main.tsx
```

## Organização

A estrutura do projeto busca manter as responsabilidades separadas entre:

- **Components:** componentes visuais e reutilizáveis da interface;
- **Data:** dados utilizados pela aplicação;
- **Services:** serviços e integrações responsáveis pela obtenção dos dados;
- **Styles:** variáveis e estilos globais;
- **Assets:** imagens, ícones e demais recursos estáticos.

## Validação

O projeto foi validado utilizando:

```bash
pnpm build
```

e:

```bash
pnpm lint
```

Ambos os comandos foram executados com sucesso.

## Observações

Os dados utilizados na interface são provenientes dos recursos disponibilizados para o teste e/ou dados mockados utilizados para representar os produtos e demais informações necessárias à implementação.

O projeto foi desenvolvido como parte do processo seletivo da Econverse.