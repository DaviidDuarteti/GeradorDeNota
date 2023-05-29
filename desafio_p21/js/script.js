var div = document.getElementById("result");

function gerar_nota(){

    let nota_1 = document.getElementById("num_1").value;
    let nota_2 = document.getElementById("num_2").value;
    let nota_3 = document.getElementById("num_3").value;

    if(nota_1, nota_2, nota_3 != ""){

        nota_1 = parseInt(nota_1);
        nota_2 = parseInt(nota_2);
        nota_3 = parseInt(nota_3);

        if( (nota_1 + nota_2 + nota_3)/ 3 >=6 ){
            div.innerHTML = `<p>Sua media foi: ${(nota_1 + nota_2 + nota_3)/ 3}</p> `;
            alert ("Você atingiu a media! Parabéns..")
            
        }else{
            alert ("Infelizmente você não atingiu a media, contate seu coordenador")
            div.innerHTML = `<p>Sua media foi: ${(nota_1 + nota_2 + nota_3)/ 3}</p> `;
        }

    }
}