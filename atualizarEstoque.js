/**
 * Atualiza o estoque após a venda de itens.
 * @param {Array} itensVendidos - Lista de itens vendidos.
 * @param {Array} estoque - Lista de estoque atual.
 * @returns {Array} - Lista de estoque atualizada.
 */
const atualizarEstoque = (itensVendidos, estoque) => {
    return estoque.map(item => {
        const itemVendido = itensVendidos.find(v => v.sku === item.sku);
        return itemVendido ? { ...item, quantidade: item.quantidade - itemVendido.quantidade } : item;
    });
};

// Exemplo de uso
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];
