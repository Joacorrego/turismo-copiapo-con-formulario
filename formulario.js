var listadoNuevo = [];

// Función para cargar la tabla en el HTML
var cargarTabla = (listadoNuevo) => {
  var eContenedorTabla = document.getElementById("contenedorTabla");
  var render = "<table>";
  render += "<tr><th>Nombre</th><th>Email</th><th>Teléfono</th><th>Mensaje</th><th>Género</th><th>Fecha de Nacimiento</th><th>Color Favorito</th><th>Peso</th><th>Acepta los términos</th><th>Acciones</th></tr>";
  for (var i = 0; i < listadoNuevo.length; i++) {
    var elemento = listadoNuevo[i];
    render += "<tr>";
    render += "<td>" + elemento.nombre + "</td>";
    render += "<td>" + elemento.email + "</td>";
    render += "<td>" + elemento.telefono + "</td>";
    render += "<td>" + elemento.mensaje + "</td>";
    render += "<td>" + elemento.genero + "</td>";
    render += "<td>" + elemento.fechaNacimiento + "</td>";
    render += "<td><span style='background-color: " + elemento.colorFavorito + "; padding: 5px 10px; color: #FFF;'>" + elemento.colorFavorito + "</span></td>";
    render += "<td>" + elemento.peso + "</td>";
    render += "<td>" + (elemento.aceptaTerminos ? "Sí" : "No") + "</td>";
    render += "<td>";
    render += "<button onclick='editar(" + i + ")'>Editar</button>";
    render += "<button onclick='eliminar(" + i + ")'>Eliminar</button>";
    render += "</td>";
    render += "</tr>";
  }
  render += "</table>";
  eContenedorTabla.innerHTML = render;
};
// Función para agregar una persona al listado
var agregar = () => {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;
  var genero = document.getElementById("genero").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var colorFavorito = document.getElementById("colorFavorito").value;
  var peso = document.getElementById("peso").value;
  var aceptaTerminos = document.getElementById("terminos").checked;

 // Validar que no haya campos vacíos
  if (!nombre || !email || !telefono || !mensaje || !genero || !fechaNacimiento || !colorFavorito || !peso || !aceptaTerminos) {
    document.getElementById("nombreError").style.display = nombre ? "none" : "inline";
    document.getElementById("emailError").style.display = email ? "none" : "inline";
    document.getElementById("telefonoError").style.display = telefono ? "none" : "inline";
    document.getElementById("mensajeError").style.display = mensaje ? "none" : "inline";
    document.getElementById("generoError").style.display = genero ? "none" : "inline";
    document.getElementById("fechaNacimientoError").style.display = fechaNacimiento ? "none" : "inline";
    document.getElementById("colorFavoritoError").style.display = colorFavorito ? "none" : "inline";
    document.getElementById("pesoError").style.display = peso ? "none" : "inline";
    return;
  }
// Ocultar los mensajes de error
  document.getElementById("nombreError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("telefonoError").style.display = "none";
  document.getElementById("mensajeError").style.display = "none";
  document.getElementById("generoError").style.display = "none";
  document.getElementById("fechaNacimientoError").style.display = "none";
  document.getElementById("colorFavoritoError").style.display = "none";
  document.getElementById("pesoError").style.display = "none";

// Crear un objeto persona con los datos ingresados
  var persona = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
    genero: genero,
    fechaNacimiento: fechaNacimiento,
    colorFavorito: colorFavorito,
    peso: peso,
    aceptaTerminos: aceptaTerminos
  };

// Agregar la persona al listado y actualizar la tabla
  listadoNuevo.push(persona);
  guardarEnLocalStorage(listadoNuevo);
  cargarTabla(listadoNuevo);
  limpiarFormulario();
};

// Función para editar una persona en el listado
var editar = (indice) => {
  var persona = listadoNuevo[indice];
  document.getElementById("nombre").value = persona.nombre;
  document.getElementById("email").value = persona.email;
  document.getElementById("telefono").value = persona.telefono;
  document.getElementById("mensaje").value = persona.mensaje;
  document.getElementById("genero").value = persona.genero;
  document.getElementById("fechaNacimiento").value = persona.fechaNacimiento;
  document.getElementById("colorFavorito").value = persona.colorFavorito;
  document.getElementById("peso").value = persona.peso;
  document.getElementById("terminos").checked = persona.aceptaTerminos;

  var btnAgregar = document.getElementById("btnAgregar");
  btnAgregar.innerHTML = "Guardar";
  btnAgregar.onclick = function() {
    guardar(indice);
  };
};

// Función para guardar los cambios de una persona en el listado
var guardar = (indice) => {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;
  var genero = document.getElementById("genero").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var colorFavorito = document.getElementById("colorFavorito").value;
  var peso = document.getElementById("peso").value;
  var aceptaTerminos = document.getElementById("terminos").checked;

 // Validar que no haya campos vacíos
  if (!nombre || !email || !telefono || !mensaje || !genero || !fechaNacimiento || !colorFavorito || !peso || !aceptaTerminos) {
    document.getElementById("nombreError").style.display = nombre ? "none" : "inline";
    document.getElementById("emailError").style.display = email ? "none" : "inline";
    document.getElementById("telefonoError").style.display = telefono ? "none" : "inline";
    document.getElementById("mensajeError").style.display = mensaje ? "none" : "inline";
    document.getElementById("generoError").style.display = genero ? "none" : "inline";
    document.getElementById("fechaNacimientoError").style.display = fechaNacimiento ? "none" : "inline";
    document.getElementById("colorFavoritoError").style.display = colorFavorito ? "none" : "inline";
    document.getElementById("pesoError").style.display = peso ? "none" : "inline";
    return;
  }

 // Ocultar los mensajes de error
  document.getElementById("nombreError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("telefonoError").style.display = "none";
  document.getElementById("mensajeError").style.display = "none";
  document.getElementById("generoError").style.display = "none";
  document.getElementById("fechaNacimientoError").style.display = "none";
  document.getElementById("colorFavoritoError").style.display = "none";
  document.getElementById("pesoError").style.display = "none";

 // Crear un objeto persona con los datos ingresados
  var persona = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
    genero: genero,
    fechaNacimiento: fechaNacimiento,
    colorFavorito: colorFavorito,
    peso: peso,
    aceptaTerminos: aceptaTerminos
  };

// Actualizar la persona en el listado y actualizar la tabla
  listadoNuevo[indice] = persona;
  guardarEnLocalStorage(listadoNuevo);
  cargarTabla(listadoNuevo);
  limpiarFormulario();

  var btnAgregar = document.getElementById("btnAgregar");
  btnAgregar.innerHTML = "Agregar";
  btnAgregar.onclick = agregar;
};

// Función para eliminar una persona del listado
var eliminar = (indice) => {
  listadoNuevo.splice(indice, 1);
  guardarEnLocalStorage(listadoNuevo);
  cargarTabla(listadoNuevo);
};

// Función para limpiar el formulario
var limpiarFormulario = () => {
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("colorFavorito").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("terminos").checked = false;
};

// Función para guardar el listado en el LocalStorage
var guardarEnLocalStorage = (listadoNuevo) => {
  localStorage.setItem("listadoNuevo", JSON.stringify(listadoNuevo));
};

// Función para cargar el listado desde el LocalStorage al cargar la página
var cargarDesdeLocalStorage = () => {
  var listadoGuardado = localStorage.getItem("listadoNuevo");
  if (listadoGuardado) {
    listadoNuevo = JSON.parse(listadoGuardado);
    cargarTabla(listadoNuevo);
  }
};

window.onload = cargarDesdeLocalStorage;


  // Función para cambiar el fondo de la página
   function cambiarFondo() {
    var body = document.body;
    body.classList.toggle('black-theme');
}

// Función para cambiar el tamaño de la letra
function cambiarTamanoLetra() {
    var elementos = document.getElementsByTagName('*');
    var tamanoActual = window.getComputedStyle(elementos[0]).fontSize;
    var tamanoActualNum = parseInt(tamanoActual);
    if (tamanoActualNum === 16) {
        for (var i = 0; i < elementos.length; i++) {
            var tamano = parseInt(window.getComputedStyle(elementos[i]).fontSize);
            elementos[i].style.fontSize = (tamano + 2) + 'px';
        }
    } else {
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.fontSize = '';
        }
    }
}