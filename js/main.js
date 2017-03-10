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
var correo      = document.getElementById("mail");
var contra      = document.getElementById("pass");


function validar(){

  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var expRegPass  = /^[a-zA-z]{6,}$/;

  var emailError  = document.getElementById("errorEmail");
  var passError   = document.getElementById("errorPass");
  //e-mail

  if(!expRegEmail.test(correo.value)) {
    passError.innerHTML = "";
    if(!correo.value){
      emailError.innerHTML= "El campo de usuario no puede estar en blanco";
      correo.focus();
    } else {
      emailError.innerHTML= "Ingrese correo válido";
      correo.focus();
    }
  } else if(!expRegPass.test(contra.value)) {
    emailError.innerHTML= "";
    if(!contra.value){
      passError.innerHTML = " El campo de contraseña no puede estar en blanco";
      passError.focus();
    } else {
      passError.innerHTML = "Ingrese contraseña válida";
      passError.focus();
    }
  } else {
    passError.innerHTML = "";
    emailError.innerHTML= "";

    validarCuentas(correo.value, contra.value);
  }

}

function validarCuentas(a, b){
  console.log("entre valdiar");
  var correos = [
                  {nombre: "Miriam", correo: "miriammp1997@gmail.com", password: "miriammendoza"},
                  {nombre: "Carmen", correo: "maricarmen@gmail.com", password: "carmenmendoza"},
                  {nombre: "Lizeth", correo: "lizethlucia@gmail.com", password: "lizethmendoza"}
                ];

  var  cont = 0;
  correos.forEach(function(e){
    if (a == e.correo && b == e.password) {
      cont++;
    }
  });


  if(cont == 1){
    alert("Ingresaste");

  }
  else{
    alert("Usted no se encuentra registrado");

  }


}
