# 🏪 Feira de Trocas Comunitária

> **Plataforma completa para trocas comunitárias** - Promovendo o consumo consciente e fortalecimento dos vínculos comunitários.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blueviolet)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)](https://postgresql.org/)

## 📋 Sobre o Projeto

O **Feira de Trocas Comunitária** é uma aplicação web completa que permite moradores de uma comunidade trocarem itens em bom estado que não usam mais, como livros, roupas, brinquedos e ferramentas. A aplicação conecta pessoas interessadas em oferecer e receber objetos, promovendo o consumo consciente.

### 🎯 Objetivo

Desenvolver uma aplicação web que permita:

- Cadastro de itens para troca
- Visualização de itens disponíveis com filtros
- Realização de propostas de troca entre usuários
- Sistema de aceite/rejeição de propostas

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Express.js](https://expressjs.com/)** - Framework web
- **[Prisma ORM](https://prisma.io/)** - Object-Relational Mapping
- **[PostgreSQL](https://postgresql.org/)** - Banco de dados relacional
- **[JWT](https://jwt.io/)** - Autenticação segura
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Criptografia de senhas

### 🎨 Frontend

- **[React](https://reactjs.org/)** - Biblioteca para interfaces
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React Router](https://reactrouter.com/)** - Roteamento SPA
- **[Axios](https://axios-http.com/)** - Cliente HTTP

---

## ⚡ Início Rápido

### 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **PostgreSQL** (versão 12 ou superior)
- **npm** ou **yarn**
- **Git**

### 📥 Instalação

1. **Clone o repositório:**

   `ash
   git clone git@github.com:MatheusQuintanilhaa/feira-trocas-backend.git
   cd feira-trocas-backend
   `

2. **Instale as dependências do backend:**

   `ash
   npm install
   `

3. **Configure as variáveis de ambiente:**

   `ash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   `

4. **Configure o banco de dados:**

   `ash
   npx prisma migrate dev
   npx prisma generate
   `

5. **Inicie o servidor backend:**

   `ash
   npm start
   `

6. **Configure o frontend (em outro terminal):**

   `ash
   cd frontend
   npm install
   npm run dev
   `

🎉 **Aplicação completa rodando:**
- **Backend:** http://localhost:8080
- **Frontend:** http://localhost:5173

---

## 🔧 Funcionalidades

### 🏗️ Entidades do Sistema

| Entidade        | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| **👤 Usuario**  | Representa quem utiliza a plataforma                 |
| **📦 Item**     | Representa os objetos disponibilizados para troca    |
| **🤝 Proposta** | Representa uma solicitação de troca entre dois itens |

### ⚙️ Principais Funcionalidades

- ✅ **Autenticação JWT** - Sistema seguro de login
- ✅ **CRUD Completo** - Criar, ler, atualizar e deletar itens
- ✅ **Filtros Avançados** - Por categoria, palavras-chave, disponibilidade
- ✅ **Sistema de Propostas** - Criação, aceite e rejeição de trocas
- ✅ **Interface Responsiva** - Funciona em desktop e mobile
- ✅ **Validações Robustas** - Garantia de integridade dos dados

### 🔍 Categorias Disponíveis

- 📚 **Livros**
- 👕 **Roupas**
- 🧸 **Brinquedos**
- 📱 **Eletrônicos**
- 🔧 **Ferramentas**
- 🏠 **Casa e Jardim**
- ⚽ **Esportes**
- 🎵 **Música**
- 📂 **Outros**

---

## 🎓 Sobre o Projeto

### 📚 Contexto Acadêmico

Este projeto foi desenvolvido como parte do curso **Desenvolvimento Full Stack Básico - DFS-2025.2**.

### 🎯 Problema Resolvido

Em muitas comunidades, moradores acumulam itens em bom estado que não usam mais. Esta aplicação resolve esse problema criando uma plataforma que conecta pessoas interessadas em trocar objetos.

### 👨‍�� Desenvolvedor

- **Desenvolvedor**: Matheus Quintanilha
- **GitHub**: [@MatheusQuintanilhaa](https://github.com/MatheusQuintanilhaa)
- **Curso**: Desenvolvimento Full Stack Básico
- **Período**: 2025.2

---

## 🛡️ Status do Projeto

- ✅ **Backend Completo** - API REST funcional
- ✅ **Frontend Completo** - Interface React responsiva
- ✅ **Autenticação JWT** - Sistema seguro de login
- ✅ **CRUD Completo** - Criar, listar, editar e deletar itens
- ✅ **Sistema de Propostas** - Criar e gerenciar trocas
- ✅ **Filtros e Busca** - Filtrar por categoria e texto
- ✅ **Documentação** - README detalhado
- ✅ **Estrutura Profissional** - Código organizado

---
