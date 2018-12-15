     function calc_IMC() {
         var altura = Number(document.getElementById("altura").value);
         var peso = Number(document.getElementById("peso").value);

         var IMC = peso / Math.pow(altura, 2);

    document.getElementById("output").innerHTML = Math.round(IMC * 100)/100;
         if (IMC < 18.5) document.getElementById("comment").innerHTML = "Subnutrição";
         if (IMC >= 18.5 && IMC <= 24.9) document.getElementById("comment").innerHTML = "Peso Saudável";
         if (IMC >= 25 && IMC <= 29.9) document.getElementById("comment").innerHTML = "Sobrepeso";
         if (IMC >= 30 && IMC <= 34.9) document.getElementById("comment").innerHTML = "Obesidade grau 1";
         if (IMC >= 35 && IMC <= 39.9) document.getElementById("comment").innerHTML = "Obesidade grau 2";
         if (IMC > 40) document.getElementById("comment").innerHTML = "Obesidade grau 3";
     }
