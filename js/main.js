/*
      var myParam = location.search.split('nombre=')[1];
        var saludo = document.getElementById("nom");
        if (myParam == undefined) {
            var nom = prompt('¿Cual es tu nombre?');

            while(nom=="" || nom==null)
            {
              nom = prompt("Ingrese su nombre por favor");
            }
            saludo.textContent = nom;
        } else {
            saludo.textContent = myParam;
        }
        document.getElementById("coders").addEventListener('click',function() {
        this.href += "?nombre="+saludo.textContent;
      })
*/
function validar(){
  var correo      = document.getElementById("mail");
  var contra      = document.getElementById("pass");

  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var expRegPass  = /^[a-zA-z]{6,}$/;

  var emailError  = document.getElementById("errorEmail");
  var passError   = document.getElementById("errorPass");
  //e-mail
  if(!expRegEmail.test(correo.value)){
    passError.innerHTML = "";
    emailError.innerHTML= "Ingrese correo válido";
    correo.focus();



              }
  else if(!expRegPass.test(contra.value)){
    emailError.innerHTML= "";
    passError.innerHTML = "Ingrese contraseña válida";
    passError.focus();



  }
  else{
    passError.innerHTML = "";
    emailError.innerHTML= "";
    alert("");
    validarCuentas(correo.value);
  }

}

function validarCuentas(){
  var correos = {
                [nombre:"" ]
                }

}
