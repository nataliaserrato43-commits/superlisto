// --- 1. Funcionalidad de Modo Oscuro / Claro con persistencia ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verificar si el usuario ya tenía el modo oscuro guardado
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙';
    }
});

// --- 2. Validación Dinámica del Formulario de Contacto ---
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue por defecto
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    formMessage.classList.remove('hidden');

    // Validación de campos vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        formMessage.style.color = '#e74c3c';
        formMessage.textContent = 'Por favor, completa todos los campos del formulario.';
        return;
    }

    // Validación básica de formato de correo mediante RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.style.color = '#e74c3c';
        formMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
        return;
    }

    // Mensaje de éxito simulado
    formMessage.style.color = '#27ae60';
    formMessage.textContent = `¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo muy pronto.`;
    
    // Limpiar formulario
    contactForm.reset();
});
🚀 Pasos para subir tu proyecto a GitHub:
Crea una carpeta en tu computador y guarda los tres códigos nombrándolos exactamente como: index.html, style.css y script.js.

Abre tu terminal o Git Bash dentro de esa carpeta e inicializa el repositorio:

Bash
git init
git add .
git commit -m "Primer commit: Supermercado Super Listo"