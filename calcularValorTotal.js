/**
 * Calcula o valor total a ser pago ao final do financiamento.
 * @param {number} valorParcela - O valor da parcela.
 * @param {number} parcelas - O número de parcelas.
 * @param {number} taxaJurosMensal - A taxa de juros mensal (em %).
 * @returns {string} - O valor total com duas casas decimais.
 */
const calcularValorTotal = (valorParcela, parcelas, taxaJurosMensal) => {
    const i = taxaJurosMensal / 100;
    const A = valorParcela * ((Math.pow(1 + i, parcelas) - 1) / i);
    return A.toFixed(2);
};
