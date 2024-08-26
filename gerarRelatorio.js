/**
 * Gera um relatório de vendas para um período específico.
 * @param {Array} vendas - Lista de vendas.
 * @param {string} dataInicio - Data de início do período (YYYY-MM-DD).
 * @param {string} dataFim - Data de fim do período (YYYY-MM-DD).
 * @returns {Object} - Relatório com o total vendido por SKU e valor total vendido.
 */
const gerarRelatorio = (vendas, dataInicio, dataFim) => {
    return vendas.reduce((acc, venda) => {
        const data = new Date(venda.data);
        if (data >= new Date(dataInicio) && data <= new Date(dataFim)) {
            acc[venda.sku] = acc[venda.sku] || { totalQuantidades: 0, totalValor: 0 };
            acc[venda.sku].totalQuantidades += venda.quantidade;
            acc[venda.sku].totalValor += venda.valorTotal;
            acc.totalValor = (acc.totalValor || 0) + venda.valorTotal;
        }
        return acc;
    }, {});
};

// Exemplo de uso
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
};
