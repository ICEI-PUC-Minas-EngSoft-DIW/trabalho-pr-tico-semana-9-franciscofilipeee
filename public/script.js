const data = {
  "produtos": [
    {
      "id": 1,
      "nome": "Smartphone Galaxy S23",
      "preco": 3499.90,
      "categoria": "Celulares",
      "imagem": "https://example.com/imagens/galaxy-s23.jpg",
      "descricao": "Smartphone com 128GB de armazenamento, câmera de alta resolução e excelente desempenho.",
      "emEstoque": true
    },
    {
      "id": 2,
      "nome": "Notebook Dell Inspiron 15",
      "preco": 4599.00,
      "categoria": "Notebooks",
      "imagem": "https://example.com/imagens/dell-inspiron-15.jpg",
      "descricao": "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e estudos.",
      "emEstoque": false
    },
    {
      "id": 3,
      "nome": "Fone de Ouvido Bluetooth Sony WH-1000XM4",
      "preco": 1499.90,
      "categoria": "Acessórios",
      "imagem": "https://example.com/imagens/sony-wh-1000xm4.jpg",
      "descricao": "Fone de ouvido com cancelamento de ruído, bateria de longa duração e qualidade de som excepcional.",
      "emEstoque": true
    },
    {
      "id": 4,
      "nome": "Smartwatch Apple Watch Series 7",
      "preco": 2999.00,
      "categoria": "Wearables",
      "imagem": "https://example.com/imagens/apple-watch-series-7.jpg",
      "descricao": "Smartwatch com monitoramento de saúde, GPS integrado e compatibilidade com iPhone.",
      "emEstoque": true
    },
    {
      "id": 5,
      "nome": "Tablet Samsung Galaxy Tab S7",
      "preco": 2699.90,
      "categoria": "Tablets",
      "imagem": "https://example.com/imagens/galaxy-tab-s7.jpg",
      "descricao": "Tablet com tela de 11 polegadas, processador potente e suporte para caneta S Pen.",
      "emEstoque": false
    },
    {
      "id": 6,
      "nome": "Câmera Digital Canon EOS M50",
      "preco": 2999.00,
      "categoria": "Câmeras",
      "imagem": "https://example.com/imagens/canon-eos-m50.jpg",
      "descricao": "Câmera mirrorless com sensor APS-C, gravação de vídeo em 4K e lente intercambiável.",
      "emEstoque": true
    },
    {
      "id": 7,
      "nome": "Console de Videogame PlayStation 5",
      "preco": 4999.00,
      "categoria": "Videogames",
      "imagem": "https://example.com/imagens/ps5.jpg",
      "descricao": "Console de última geração com gráficos avançados, SSD ultrarrápido e controle sem fio inovador.",
      "emEstoque": false
    },
    {
      "id": 8,
      "nome": "Headset Gamer Razer Kraken",
      "preco": 899.90,
      "categoria": "Acessórios",
      "imagem": "https://example.com/imagens/razer-kraken.jpg",
      "descricao": "Headset gamer com som surround, microfone retrátil e conforto para longas sessões de jogo.",
      "emEstoque": true
    }
  ]
}


const productsContainer = document.getElementById('product-list');

productsContainer.innerHTML = data.produtos.map(produto => `
  <div class="product-card">
    <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
    <h3 class="product-name">${produto.nome}</h3>
    <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
    <p class="product-description">${produto.descricao}</p>
    <button class="add-to-cart-btn" ${produto.emEstoque ? '' : 'disabled'}>Adicionar ao Carrinho</button>
  </div>
`).join('');

function renderizar() {
  productsContainer.innerHTML = '';

  let texto = document.getElementById('search').value.toLowerCase();

  const produtosFiltrados = data.produtos.filter(produto =>
    produto.nome.toLowerCase().includes(texto) ||
    produto.categoria.toLowerCase().includes(texto) ||
    produto.descricao.toLowerCase().includes(texto)
  );

  productsContainer.innerHTML = produtosFiltrados.map(produto => `
    <div class="product-card">
      <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
      <h3 class="product-name">${produto.nome}</h3>
      <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
      <p class="product-description">${produto.descricao}</p>
      <button class="add-to-cart-btn" ${produto.emEstoque ? '' : 'disabled'}>Adicionar ao Carrinho</button>
    </div>
  `).join('');
}