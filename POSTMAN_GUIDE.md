# 🧪 Guia de Testes - Feira de Trocas API no Postman

## 📋 Configuração Inicial

**Base URL:** `http://localhost:8080`

**Headers necessários para todas as requisições:**
```
Content-Type: application/json
```

**Headers para rotas protegidas (após login):**
```
Content-Type: application/json
Authorization: Bearer {seu_token_jwt}
```

---

## 🔐 1. TESTES DE AUTENTICAÇÃO

### 1.1 Cadastrar Usuário
**POST** `http://localhost:8080/api/users/register`

**Body (JSON):**
```json
{
  "nome": "João Silva",
  "email": "joao@teste.com",
  "senha": "123456"
}
```

**Resposta esperada (201):**
```json
{
  "message": "Usuário criado com sucesso!",
  "user": {
    "id": "uuid-gerado",
    "nome": "João Silva",
    "email": "joao@teste.com",
    "createdAt": "2025-07-16T..."
  }
}
```

### 1.2 Login
**POST** `http://localhost:8080/api/users/login`

**Body (JSON):**
```json
{
  "email": "joao@teste.com",
  "senha": "123456"
}
```

**Resposta esperada (200):**
```json
{
  "message": "Login realizado com sucesso!",
  "user": {
    "id": "uuid",
    "nome": "João Silva",
    "email": "joao@teste.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

⚠️ **IMPORTANTE:** Copie o token da resposta para usar nas próximas requisições!

---

## 📦 2. TESTES DE ITENS

### 2.1 Criar Item
**POST** `http://localhost:8080/api/items`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {seu_token}
```

**Body (JSON):**
```json
{
  "nome": "Bicicleta infantil azul",
  "descricao": "Bicicleta em ótimo estado, pouco uso, aro 16",
  "categoria": "Brinquedos",
  "imagemUrl": "https://exemplo.com/bicicleta.jpg",
  "disponivelParaTroca": true
}
```

**Categorias válidas:**
- Livros
- Roupas  
- Brinquedos
- Eletrônicos
- Ferramentas
- Casa e Jardim
- Esportes
- Música
- Outros

### 2.2 Listar Todos os Itens
**GET** `http://localhost:8080/api/items`

**Headers:**
```
Authorization: Bearer {seu_token}
```

### 2.3 Filtrar Itens por Categoria
**GET** `http://localhost:8080/api/items?categoria=Brinquedos`

### 2.4 Buscar Itens por Palavra-chave
**GET** `http://localhost:8080/api/items?search=bicicleta`

### 2.5 Buscar Item por ID
**GET** `http://localhost:8080/api/items/{id_do_item}`

### 2.6 Atualizar Item
**PUT** `http://localhost:8080/api/items/{id_do_item}`

**Body (JSON):**
```json
{
  "nome": "Bicicleta infantil azul - SEMINOVA",
  "descricao": "Bicicleta em ótimo estado, revisada recentemente",
  "disponivelParaTroca": true
}
```

### 2.7 Deletar Item
**DELETE** `http://localhost:8080/api/items/{id_do_item}`

---

## 🤝 3. TESTES DE PROPOSTAS

### 3.1 Criar Proposta de Troca
**POST** `http://localhost:8080/api/propostas`

**Headers:**
```
Authorization: Bearer {seu_token}
```

**Body (JSON):**
```json
{
  "itemOfertadoId": "uuid-do-meu-item",
  "itemDesejadoId": "uuid-do-item-que-quero"
}
```

### 3.2 Listar Minhas Propostas
**GET** `http://localhost:8080/api/propostas?isMyProposal=true`

### 3.3 Listar Propostas por Status
**GET** `http://localhost:8080/api/propostas?status=pendente`

**Status disponíveis:**
- pendente
- aceita
- rejeitada

### 3.4 Aceitar Proposta
**PUT** `http://localhost:8080/api/propostas/{id_da_proposta}/accept`

### 3.5 Rejeitar Proposta
**PUT** `http://localhost:8080/api/propostas/{id_da_proposta}/reject`

---

## 🔍 4. TESTES DE USUÁRIOS

### 4.1 Listar Usuários
**GET** `http://localhost:8080/api/users`

### 4.2 Buscar Usuário por ID
**GET** `http://localhost:8080/api/users/{id_do_usuario}`

---

## 📊 5. TESTES DE ESTATÍSTICAS

### 5.1 Categorias Disponíveis
**GET** `http://localhost:8080/api/items/categories`

### 5.2 Estatísticas Gerais
**GET** `http://localhost:8080/api/items/stats`

---

## 🧪 6. CENÁRIO COMPLETO DE TESTE

### Passo 1: Criar 2 usuários
1. Cadastre usuário A (João)
2. Cadastre usuário B (Maria)

### Passo 2: Fazer login com ambos
1. Login João → copie o token
2. Login Maria → copie o token

### Passo 3: Cada usuário cria itens
**João cria:**
```json
{
  "nome": "Livro Harry Potter",
  "descricao": "Coleção completa em bom estado",
  "categoria": "Livros"
}
```

**Maria cria:**
```json
{
  "nome": "Bicicleta Rosa",
  "descricao": "Bicicleta feminina, aro 26",
  "categoria": "Esportes"
}
```

### Passo 4: João propõe troca
João oferece seu livro pela bicicleta da Maria

### Passo 5: Maria aceita/rejeita
Maria responde à proposta

---

## ❌ 7. TESTES DE ERRO

### 7.1 Login com credenciais inválidas
```json
{
  "email": "usuario@inexistente.com",
  "senha": "senhaerrada"
}
```
**Resposta esperada:** 401 Unauthorized

### 7.2 Acessar rota protegida sem token
Tentar GET `/api/items` sem o header `Authorization`
**Resposta esperada:** 401 Token not found

### 7.3 Criar item com categoria inválida
```json
{
  "nome": "Item teste",
  "categoria": "CategoriaInexistente"
}
```
**Resposta esperada:** 400 Categoria inválida

---

## 💡 DICAS IMPORTANTES

1. **Sempre copie o token** após o login e use nas requisições seguintes
2. **Guarde os IDs** dos itens e usuários criados para usar nos testes
3. **Teste os filtros** combinados: `?categoria=Livros&search=harry`
4. **Verifique os status codes** das respostas
5. **Teste cenários de erro** para validar as validações

O servidor está rodando em: **http://localhost:8080** 🚀
