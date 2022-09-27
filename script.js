let vetor = []
let num = document.getElementById('numtxt')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')

function adicionar(){
    
    if(num.value > 100 || num.value < 1){
        window.alert('Valor invalido, digite um numero de 1 a 100')
    } else if (vetor.indexOf(num.value) != -1) {
        window.alert('Esse numero ja foi adicionado')
    }
    
    else {
        
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        vetor.push(num.value)
        res.innerText = ''
        
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    
    let soma = 0
    let max = vetor[0]
    let min = vetor[0]

    if(vetor.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        for(let pos = 0; pos < vetor.length; pos++ ){
            soma += Number(vetor[pos])
            //encontra o maior valor do vetor
            if(max < Number(vetor[pos])){
               max = vetor[pos]
            }
            //encontra o menor valor do vetor
            if(min > Number(vetor[pos])){
               min = vetor[pos]
            }
       }
       res.innerText =  ` Ao todo, temos ${vetor.length} números cadastrados.\n`
       res.innerText += ` O maior valor informado foi ${max}.\n`
       res.innerText += ` O menor valor informado foi ${min}.\n`
       res.innerText += ` Somando todos os valores temos ${soma}.\n`
       res.innerText += ` A média dos valores digitados é ${soma / vetor.length}.`
    
    }
    
    
}
