var correo      = document.getElementById("mail");
var contra      = document.getElementById("pass");

document.getElementById("validacion").addEventListener("click", function(){

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
  }

  if(!expRegPass.test(contra.value)) {
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

});

function validarCuentas(a, b){
  var m = "";
  var correos = [
                  {nombre: "Miriam Gisella", correo: "miriammp1997@gmail.com", password: "miriammendoza"},
                  {nombre: "Maria del Carmen", correo: "maricarmen@gmail.com", password: "carmenmendoza"},
                  {nombre: "Lizeth Lucia", correo: "lizethlucia@gmail.com", password: "lizethmendoza"}
                ];

  var  cont = 0;
  correos.forEach(function(e){
    if (a == e.correo && b == e.password) {
      cont++;
      m= e.nombre
    }
  });


  if(cont == 1) {
    localStorage.setItem("usuario-correo", m);
    window.location="muro.html";


  }
  else{
    alert("Usted no se encuentra registrado");
  }
}
