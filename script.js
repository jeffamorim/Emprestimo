let nome = prompt('Digite seu nome:');
let idade = prompt('Digite sua idade:');

if (idade >= 22 && idade <= 55) {
    let salario = prompt('Digite seu salário mensal:');
    let limite = salario * 15;
    let valorDesejado = prompt('Digite o valor desejado:');
    if (valorDesejado > 1000 && valorDesejado <= limite) {
        alert(nome + ' O Emprestimo no valor de: R$' + valorDesejado + ' está disponivel para você!');
        let name = confirm("Você aceita o emprestimo?")
        if (name == true) {
        } else {
            alert('Cancelando a proposta de emprestimo.')
        }
    } else {
        alert('Valor minimo para emprestimo é de R$ 1000,00 e maximo de: R$' + limite);
    }

} else {
    alert('Emprestimo não disponivel para sua faixa etária.');
}




// REGRAS para aceita o empréstimo:
// - Entre 22 e 55 anos;
// - Valor a partir de 1000 reais;
// - Valor não pode ultrapassar 15x o que ele recebe
// RESPONDER: ACEITO OU NÃO ACEITO
// EXTRA:
// - Perguntar também a quantidade de parcelas (3 a 20 vezes) e calcular juros de 8% ao mês
// (COMPOSTO)
// RESPONDER VALOR TOTAL DO EMPRESTIMO E VALOR Da PARCELA.