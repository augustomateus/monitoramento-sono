const daysInMonth = 30; // Um mês de 30 dias (por exemplo)
const calendarElement = document.getElementById('calendar');

// Função para criar os dias no calendário
function createCalendar() {
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        // Checar se o dia já tem um status salvo no LocalStorage
        const savedStatus = localStorage.getItem(`day-${day}`);
        if (savedStatus) {
            dayElement.classList.add(savedStatus); // Adiciona a classe "green" ou "red"
        }

        dayElement.addEventListener('click', toggleDayColor); // Adiciona o evento de clique
        calendarElement.appendChild(dayElement);
    }
}

// Função para alternar a cor do dia e salvar no LocalStorage
function toggleDayColor(event) {
    const dayElement = event.target;
    const day = dayElement.textContent;

    if (dayElement.classList.contains('green')) {
        dayElement.classList.remove('green');
        dayElement.classList.add('red');  // Altera para vermelho (sono ruim)
        localStorage.setItem(`day-${day}`, 'red'); // Salva no LocalStorage
    } else if (dayElement.classList.contains('red')) {
        dayElement.classList.remove('red');
        localStorage.removeItem(`day-${day}`); // Remove do LocalStorage
    } else {
        dayElement.classList.add('green');  // Altera para verde (bom sono)
        localStorage.setItem(`day-${day}`, 'green'); // Salva no LocalStorage
    }
}

// Inicializa o calendário
createCalendar();
