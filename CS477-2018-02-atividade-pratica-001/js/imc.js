     function calc_IMC() {
         var altura = Number(document.getElementById("altura").value);
         var peso = Number(document.getElementById("peso").value);

         var IMC = peso / Math.pow(altura, 2);

    document.getElementById("output").innerHTML = Math.round(IMC * 100)/100;
         if (IMC < 18.5) document.getElementById("comment").innerHTML = "Peso baixo";
         if (IMC >= 18.5 && IMC <= 25) document.getElementById("comment").innerHTML = "Normal";
         if (IMC >= 25 && IMC <= 30) document.getElementById("comment").innerHTML = "Obeso";
         if (IMC > 30) document.getElementById("comment").innerHTML = "Obesidade 2";            
     }