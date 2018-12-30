
function calcular(){
    var cadena=document.f1.txtcaja.value;
    var operadores="";
	var Resultado=0;
    var valores=cadena.length;
    for(var i=0;i<cadena.length;i++){
        if(cadena.charAt(i)=='+'){
            operadores+=",+,";
        }else if(cadena.charAt(i)=='-'){
            operadores+=",-,";
        }else if(cadena.charAt(i)=='*'){
            operadores+=",*,";
        }else if(cadena.charAt(i)=='/'){
            operadores+=",/,";
        }else{
            operadores+=cadena.charAt(i);
        }
    }
    var opera=operadores.split(",");
    var n1=opera[0];
    var n2;
    Resultado=parseFloat(n1);
    for(var i=1;i<opera.length;i++){
        if(opera[i]=="+"){
            i++;
            n2=opera[i];
            Resultado+=parseFloat(n2);
        }else if(opera[i]=="-"){
            i++;
            n2=opera[i];
            Resultado+=parseFloat(-n2);
        }else if(opera[i]=="*"){
            var menos=i+2;
            if(opera[menos]=="-"){
                console.log(Resultado);  
				n2="-"+opera[menos+1];
				Resultado*=parseFloat(n2);
				i=i+2;
            }else{
                i++;
                n2=opera[i];
                Resultado*=parseFloat(n2);   
            }
        }else if(opera[i]=="/"){
            var menos=i+2;
            if(opera[menos]=="-"){
                console.log(Resultado);  
				n2="-"+opera[menos+1];
				Resultado/=parseFloat(n2);
				i=i+2;
            }else{
				i++;
				n2=opera[i];
				Resultado/=parseFloat(n2);   
            }
        }
    }
    document.f1.txtcaja.value=Resultado;
}