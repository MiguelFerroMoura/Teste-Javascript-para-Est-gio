/**
 * Verifica se um produto está disponível em estoque.
 * @param {number} sku - O SKU do produto.
 * @param {Array} produtos - Lista de produtos no estoque.
 * @returns {boolean} - Retorna true se o produto estiver disponível, false caso contrário.
 */
const verificarDisponibilidade = (sku, produtos) => {
    return produtos.some(produto => produto.sku === sku && produto.quantidade > 0);
};

// Exemplo de uso
const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];
