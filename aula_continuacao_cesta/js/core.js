var cesta_frutas = [];

function adicionar_cesta(){
    var item = document.getElementById("item").value; // pega o id da index e joga na variavel local
    //$("#id").val();
    cesta_frutas.push(item); //insere no array
    document.getElementById("exibir").innerHTML = cesta_frutas ;
    
    
    
}

function remover_cesta(){
    var item = document.getElementById("item").value; 
    var a = cesta_frutas.indexOf(item); //buscar no array o item que foi digitado e retornar sua posicao
    delete cesta_frutas[a]; // de acordo com a posicao deletar
    document.getElementById("exibir").innerHTML = cesta_frutas;
   
    
}


