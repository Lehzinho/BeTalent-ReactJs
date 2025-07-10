# BeTalent React.js - Sistema de Colaboradores

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Teste Prático Front-end BeTalent**. Consiste em uma interface responsiva que exibe uma tabela de colaboradores com funcionalidade de pesquisa e layout adaptativo para desktop e mobile.

## 🚀 Funcionalidades

- **Tabela de Colaboradores**: Exibição de dados dos funcionários incluindo foto, nome, cargo, data de admissão e telefone
- **Pesquisa Inteligente**: Filtro por cargo, nome e telefone em tempo real
- **Layout Responsivo**: Interface adaptativa para desktop e mobile
- **Accordion Mobile**: Visualização otimizada para dispositivos móveis com sistema de expansão/recolhimento
- **Formatação de Dados**: Formatação automática de datas e telefones no front-end
- **Testes Unitários**: Cobertura de testes para componentes críticos

## 🛠️ Tecnologias Utilizadas

- **React.js 19.1.0** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no desenvolvimento
- **Styled Components** - Estilização CSS-in-JS com suporte a temas
- **React Router DOM** - Navegação entre páginas
- **Axios** - Cliente HTTP para consumo da API
- **Jest** - Framework de testes
- **Testing Library** - Utilitários para testes de componentes React
- **Vite** - Build tool e bundler
- **JSON Server** - API simulada para desenvolvimento

## 📱 Design Responsivo

### Desktop (>780px)

- Tabela completa com todas as colunas visíveis
- Layout tradicional em formato de tabela
- Dados formatados e organizados em colunas

### Mobile (<780px)

- Sistema de accordion para otimização de espaço
- Informações principais sempre visíveis
- Detalhes expandidos através de botão de interação
- Interface touch-friendly

## 🧪 Testes Implementados

O projeto inclui testes unitários completos para o componente `StaffAccordion`, cobrindo:

### Testes para Mobile (<780px)

- ✅ Verificação da presença do botão de accordion
- ✅ Estado inicial fechado do accordion
- ✅ Funcionalidade de abertura/fechamento do accordion
- ✅ Exibição correta do conteúdo expandido

### Testes para Desktop (>780px)

- ✅ Ausência do botão de accordion
- ✅ Exibição direta dos elementos de desktop
- ✅ Formatação correta de dados (datas e telefones)
- ✅ Visibilidade de todos os campos obrigatórios

## Demo Link

Url do projeto hospedado na Vercel
[https://be-talent-react-js.vercel.app/](https://be-talent-react-js.vercel.app/)

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js
- Yarn ou npm

### 1. Clone o repositório

```bash
git clone https://github.com/Lehzinho/BeTalent-ReactJs
cd betalentreactjs
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Configure a API simulada

```bash
# Instalar json-server globalmente (se necessário)
npm install -g json-server

# Executar a API simulada
json-server --watch db.json
```

### 4. Execute o projeto

```bash
yarn dev
# ou
npm run dev
```

### 5. Execute os testes

```bash
yarn test
# ou
npm test
```

## 🔧 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn test` - Executa os testes unitários
- `yarn lint` - Executa o linter
- `yarn preview` - Visualiza o build de produção
- `yarn commit` - Commit usando Commitizen

## 📊 Estrutura de Dados

O sistema trabalha com a seguinte interface de dados:

```typescript
interface staffProps {
  id: number;
  name: string;
  job: string;
  admission_date: Date;
  phone: string;
  image: string;
}
```

## 🎨 Formatação de Dados

- **Datas**: Formato brasileiro (DD/MM/YYYY)
- **Telefones**: Formato brasileiro com máscara (+55 (XX) XXXXX-XXXX)

## 🔍 Funcionalidade de Pesquisa

O sistema permite filtrar colaboradores por:

- Nome completo
- Cargo/função
- Número de telefone

A pesquisa é realizada em tempo real, sem necessidade de botão de busca.

## 🏆 Critérios Atendidos

- ✅ **Lógica de programação**: Implementação clara e eficiente
- ✅ **Organização**: Código bem estruturado e arquivos organizados
- ✅ **CSS**: Estilização responsiva com Styled Components
- ✅ **README detalhado**: Documentação completa do projeto
- ✅ **TypeScript**: Tipagem estática em todo o projeto
- ✅ **Testes unitários**: Cobertura de testes para componentes críticos

## 🌟 Diferenciais Implementados

- **Testes Unitários Completos**: Cobertura de testes para diferentes cenários e breakpoints
- **Responsividade Avançada**: Sistema de accordion otimizado para mobile
- **TypeScript**: Tipagem completa para maior segurança
- **Styled Components**: Estilização moderna e reutilizável
- **Commits Convencionais**: Padronização de commits com Commitizen

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## 🤝 Contribuição

Este projeto foi desenvolvido como parte de um teste técnico. Para dúvidas ou sugestões, entre em contato através do repositório.

---

**Desenvolvido para o desafio BeTalent**
