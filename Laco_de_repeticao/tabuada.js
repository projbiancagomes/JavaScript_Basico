function chama_tabuada(){

    var var1 = document.tabForm.var1.value;
    //pede o valor inicial da tabuada pelo qual sistema inicia
    var var2 = document.tabForm.var2.value;
    //pede o valor da ultima tabuada a ser executada

    for(i=var1; var1<=var2; var1++) {//laço inicia a partir do primeiro valor (i=valor)
                                   //vai até o primeiro valor ser menor ou igual ao segundo(var)
                                   //soma mais 1 (var1++) - imcremento
        for(j=1;j<=10;j++){ //primeiro valor que começa tabuada (j=1)
                        //vai até 10 (j<=10)
                        //soma mais 1 (j++) incremento

                       
            document.write(var1+'X'+j+'='+var1*j+'<br>'); //imprime a tabuada na tela
        }
        document.write('<br>');//pula uma linha 
    }
}