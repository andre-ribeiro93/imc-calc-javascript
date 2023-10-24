const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');
const tableButton = document.getElementById('tableButton');
const table = document.getElementById('table');

peso.addEventListener('input', function(){
    let pesoValue = peso.value;
    pesoValue = pesoValue.replace(',', '.');
    peso.value = pesoValue;
});

altura.addEventListener('input', function(){
    let alturaValue = altura.value;
    alturaValue = alturaValue.replace(',', '.');
    altura.value = alturaValue;
});

const getText = (imc) => {
    if(imc > 40) return 'Obsidade III (mórbida)';
    if(imc >= 35) return 'Obsidade II (Severa)';
    if(imc >= 30) return 'Obsidade I';
    if(imc >= 25) return 'Acima do peso';
    if (imc >= 18.5) return 'Peso normal';
    if (imc >= 17) return 'Abaixo do peso';
    return 'Muito abaixo do peso';
}

const imcCalc = () => {
    if (!peso.value && !altura.value) return resultado.textContent = alert('Preencha os campos peso e altura');
    if (!peso.value) return resultado.textContent = alert('Preencha o campo altura');
    if (!altura.value) return resultado.textContent = alert('Preencha o campo peso');
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1); //adicionei um '+' no início para transformar a 'string' em um 'number'.
    resultado.textContent = `${nome.value}\nIMC = ${valorImc}\n${getText(valorImc)}`;
}

button.addEventListener('click',imcCalc);

tableButton.addEventListener('click', function() {
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
});
