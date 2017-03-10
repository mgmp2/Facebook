
 var mostrar = document.getElementById('usuario');
if(localStorage.getItem("usuario-correo")){
  mostrar.innerHTML = "<h1>" + "<strong>"+"Bienvenid@: " + "</strong>" + localStorage.getItem("usuario-correo") + "</h1>  ";



  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong>',
      '</li>');
    } document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('area');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);



  function createPost(texto) {
    var post = document.createElement('div');
    post.setAttribute("class","publicado")
    var texto1 = document.createElement('p');
    texto1.textContent = texto;
    var editar = document.createElement('a');
    var eliminar = document.createElement('a');
    //parte de editar
    editar.textContent = "Editar";
    editar.setAttribute("href", "#");
    editar.addEventListener('click',function(e) {
      e.preventDefault();
      var postParent = e.target.parent; // Devuelve el padre
    });
    //parte de eliminar
    eliminar.textContent = "Eliminar";
    eliminar.setAttribute("href", "#");
    eliminar.addEventListener('click',function(e) {
      e.preventDefault();
      var postParent = e.target.parent; // Devuelve el padre
    });
    post.appendChild(texto1);
    post.appendChild(editar);
    post.appendChild(eliminar);
    var r = post;
    console.log(post);
    var resultado = document.getElementById('amigo-familia');
    resultado.appendChild(r);
  }

  document.getElementById("salir").addEventListener("click", function(){
    var xSalir ="";
    localStorage.setItem("usuario-correo", xSalir);
    window.location = "index.html";
  });}
  else{
    alert("Debe ingresar");
    window.location = "index.html";
  }
