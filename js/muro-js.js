
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong>',
                '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
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


    var post = document.createElement('fieldset');
    var texto1 = document.createElement('p');
    texto1.textContent = texto;
    var editar = document.createElement('a');
    var eliminar = document.createElement('a');
    editar.textContent = "Editar";
    editar.setAttribute("href", "#");

    editar.addEventListener('click',function(e) {
      e.preventDefault();
      var postParent = e.target.parent; // Devuelve el padre
    });

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
    var resultado = document.getElementById('amigo-familia');
    resultado.appendChild(r);


  }
