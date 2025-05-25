# 🛍️ Filtro de Produtos

Aplicação simples em JavaScript que permite ao usuário filtrar produtos com base em **categoria**, **preço** e **disponibilidade**. Os produtos são exibidos dinamicamente no DOM, com a possibilidade de aplicar filtros ou visualizar todos.

---

## 📋 Funcionalidades

- ✅ Exibir todos os produtos cadastrados
- 🔍 Filtrar produtos por:
  - Categoria
  - Faixa de preço
  - Disponibilidade
- 💡 Renderização dinâmica dos produtos no DOM
- ✨ Aplicação de estilos visuais (bordas) nos cards renderizados

---

## 🧩 Estrutura do Projeto

### `produtos` (array de objetos)
Contém os dados dos produtos, incluindo:
- `nome`
- `preço`
- `categoria`
- `disponibilidade`

### `mostrarProdutos(produtos)`
Função responsável por:
- Renderizar os produtos no DOM
- Aplicar efeitos visuais nos elementos exibidos

### `Btn-filtrar`
Botão que:
- Coleta os valores dos inputs de filtro
- Filtra os produtos com base nos critérios informados
- Chama a função `mostrarProdutos` com os produtos filtrados

### `Btn-todos`
Botão que:
- Reseta todos os filtros
- Chama a função `mostrarProdutos` com todos os produtos

---

## 🖼️ Diagrama de Fluxo

![Diagrama do Projeto](./Diagrama%20(2).png)

---

## Integrante 
Ana Clara Rocha de Oliveira - Rm 564298
