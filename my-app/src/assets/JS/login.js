
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar lógica para validar los datos del usuario
    if (username === 'usuario' && password === 'contraseña') {
        // Mostrar mensaje de éxito
        document.getElementById('message').textContent = 'Inicio de sesión exitoso.';
        document.getElementById('message').className = 'message success';
        // Puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        // Mostrar mensaje de error
        document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos.';
        document.getElementById('message').className = 'message';
    }
});