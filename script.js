const daysInMonth = 30;  // Um mês de 30 dias (por exemplo)

const calendarElement = document.getElementById('calendar');

// Função para criar os dias no calendário
function createCalendar() {
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        dayElement.addEventListener('click', toggleDayColor); // Adiciona o evento de clique
        calendarElement.appendChild(dayElement);
    }
}

// Função para alternar a cor do dia
function toggleDayColor(event) {
    const dayElement = event.target;
    
    if (dayElement.classList.contains('green')) {
        dayElement.classList.remove('green');
        dayElement.classList.add('red');  // Altera para vermelho (sono ruim)
    } else if (dayElement.classList.contains('red')) {
        dayElement.classList.remove('red');
    } else {
        dayElement.classList.add('green');  // Altera para verde (bom sono)
    }
}

// Inicializa o calendário
createCalendar();
