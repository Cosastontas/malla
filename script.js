// Obtenemos todas las materias
const materias = document.querySelectorAll('.materia');

// Función para manejar el clic en cada materia
materias.forEach(materia => {
    materia.addEventListener('click', () => {
        // Si la materia ya está aprobada, no hacer nada
        if (materia.classList.contains('aprobada')) return;

        // Aprobar la materia al hacer clic
        materia.classList.add('aprobada');
        
        // Revisar si es requisito de otra materia
        desbloquearRequisitos(materia);
    });
});

// Función para desbloquear los requisitos de otras materias
function desbloquearRequisitos(materia) {
    const requisitos = document.querySelectorAll('.materia');

    requisitos.forEach(req => {
        const requisito = req.querySelector('.requisito');
        
        // Si esta materia es un requisito de alguna otra, desbloquearla
        if (requisito && materia.id === requisito.textContent.split(": ")[1].toLowerCase().replace(/ /g, '-')) {
            req.classList.add('requisito-desbloqueado');
        }
    });
}
