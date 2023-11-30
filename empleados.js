function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    formulario.innerHTML = `
        <form id="empleadoForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required><br>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" required><br>

            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fechaNacimiento" required><br>

            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" required><br>

            <label for="salario">Salario:</label>
            <input type="number" id="salario" required><br>

            <button type="button" onclick="agregarEmpleado()">Agregar</button>
            <button type="button" onclick="modificarEmpleado()">Modificar</button>
            <button type="button" onclick="eliminarEmpleado()">Eliminar</button>
        </form>
    `;

    formulario.style.display = "block";
}

function agregarEmpleado() {
    // Lógica para agregar un empleado
    // Puedes almacenar la información en una lista, enviarla a un servidor, etc.
    limpiarFormulario();
}

function modificarEmpleado() {
    // Lógica para modificar un empleado
    // Puedes buscar el empleado por su ID y actualizar la información
    limpiarFormulario();
}

function eliminarEmpleado() {
    // Lógica para eliminar un empleado
    // Puedes buscar el empleado por su ID y eliminarlo de la lista
    limpiarFormulario();
}

function limpiarFormulario() {
    var formulario = document.getElementById("empleadoForm");
    formulario.reset();
}

function iniciarSesion() {
    // Lógica para el inicio de sesión
    alert("Iniciar Sesión");
}

function iniciarSesionFacebook() {
    // Lógica para el inicio de sesión con Facebook
    alert("Iniciar Sesión con Facebook");
}
