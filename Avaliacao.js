const readline = require ('readline-sync')

console.log ("===========AVALIAÇÃO DE DESEMPENHO DO FUNCIONÁRIO=========")

let meta = 10000

let funcionario = readline.question ("Nome do funcionario: ")
let cargo = readline.question ("Cargo do funcionario: ")
let salario = readline.questionFloat ("Salario base: ")
let resultado = readline.questionFloat ("Resultado alcançado no período (R$): ")

let diferenca = meta - resultado //alu

if (resultado >= meta) {
    console.log (`Parabéns ${funcionario}! Você atingiu a meta de vendas e receberá um bônus de 10% sobre o salário base.`)
}else {
    console.log (`${funcionario}, você ficou ${((diferenca / meta) * 100).toFixed(2)}% abaixo da meta.`)
}

if ((resultado/meta * 100) < 70) {
    console.log (`A empresa desempenhou Insuficiente, você receberá um bônus de 0% sobre o salário base. Seu salário total será R$${salario}.`)
} else if ((resultado/meta *100) >= 70 && (resultado/meta * 100) <= 99) {
    console.log (`A empresa desempenhou satisfatorio, você receberá um bônus de 5% sobre o salário base. Seu salário total será R$${salario * 1.05}.`)

}else ((resultado/meta * 100) >= 100)
    console.log (`A empresa desempenhou Excelente, você receberá um bônus de 10% sobre o salário base. Seu salário total será R$${salario * 1.10}.`)
