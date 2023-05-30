function multiplicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
  
    var resultado = num1 * num2 * num3 * num4;
  
    document.getElementById("resultado").innerHTML = "O resultado da multiplicação é: " + resultado;
  }
  