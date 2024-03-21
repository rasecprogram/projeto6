// Método simples para adicionar título ao site
document.getElementById('titulo').innerText = 'Produto em Destaque';

// Método complexo para adicionar o produto
const produtoContainer = document.getElementById('produto');

const produto = document.createElement('div');
produto.classList.add('produto');

const nome = document.createElement('h2');
nome.innerText = 'Sapatênis de Couro';

const descricao = document.createElement('p');
descricao.innerText = 'Um sapatênis confortável e estiloso, feito de couro legítimo. Ideal para diversas ocasiões.';

const preco = document.createElement('p');
preco.innerText = 'Preço: R$ 199,99';

produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

produtoContainer.appendChild(produto);
