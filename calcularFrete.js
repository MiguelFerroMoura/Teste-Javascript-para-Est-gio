/**
 * Calcula o valor do frete com base no peso e distância.
 * @param {number} peso - O peso do pedido (em kg).
 * @param {number} distancia - A distância para entrega (em km).
 * @param {Object} tabelaPrecos - A tabela de preços por peso e distância.
 * @returns {number|null} - O valor do frete ou null se não encontrar a faixa.
 */
const calcularFrete = (peso, distancia, tabelaPrecos) => {
    const faixa = Object.keys(tabelaPrecos).find(f => {
        const [pesoRange, distanciaRange] = f.split(',');
        const [pesoMin, pesoMax] = pesoRange.split('-').map(Number);
        const [distanciaMin, distanciaMax] = distanciaRange.split('-').map(Number);
        
        return peso >= pesoMin && peso <= pesoMax && distancia >= distanciaMin && distancia <= distanciaMax;
    });
    
    return faixa ? tabelaPrecos[faixa] : null;
};

// Exemplo de uso
const tabelaPrecos = {
    '0-1,0-5': 10.0,
    '0-1,6-10': 15.0,
    '1-5,0-5': 20.0,
    '1-5,6-10': 25.0,
    '5-10,0-5': 30.0,
    '5-10,6-10': 35.0
};
