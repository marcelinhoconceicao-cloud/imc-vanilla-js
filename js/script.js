/**
 * Configura a data limite do nascimento
 * @author Cauã Ferreira <caua.ferreiraraphael@gmail.com>
 * @since 2026-02-24
 * @version 1.0.0
 * @description Esta função busca o campo de data pelo id e aplica o atributo max com o dia atual.
 * 
 */

function configuraDatalimite(){
    const limite = new Date ().toISOString().split('T')[0]
    const inputNasc= document.getElementById('nascimento')
    if(inputNasc){
        inputNasc.setAttribute('max', limite)
    }
    alert(limite)
}

//Inicialização
document.addEventListener('DOMContentLoaded', configuraDatalimite)