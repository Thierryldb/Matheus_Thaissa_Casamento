const form = document.getElementById('rsvp-form');
const success = document.getElementById('rsvp-success');
const successText = document.getElementById('success-text');
const guestList = document.getElementById('guest-list');
const nameInput = document.getElementById('name');

// LISTA DE CONVIDADOS
let convidados = ['Adilson Lelis', 'Alexandre Pinto', 'Alice Marques', 'Alice Tosta', 'Aline Silva', 'Altamiro Marques', 'Ana Flávia Bonacio', 'Ana Paula Marques', 'Andreza Rocha', 'Antônio Bulhões', 'Caio Rocha', 'Carlos Eduardo Garcia', 'Carolline Lima', 'Cátia Cilene Lucena', 'Catia Silva, Cátia Marques', 'Celine Tosta', 'Cesarina Bulhões', 'Christiane Ferreira Martins', 'Cibele Lima', 'Cláudia Silva', 'Clemilson Costa', 'Daiane Andrade', 'Daniel Costa', 'Daniel Marques', 'David Marques', 'Davi Natan Alcoforado', 'Débora Grobe', 'Edelaine Lima', 'Edith Puri', 'Eduardo Leocadio', 'Eduardo Peres', 'Elaine Lima Bulhões', 'Eliana Santana', 'Emily Maria Garcia', 'Emilly Santana', 'Eric Franklin', 'Felipe Bulhões', 'Francisca Oliveira Beleza', 'Francisca Sousa', 'Francisco Emiliao', 'Gabriel Martins', 'Gabrielle Campos', 'Giselle Marques', 'Glaucia Gonçalves', 'Heduarda Santana', 'Helena Marques', 'Hélio Vitor', 'Henrique Marins', 'Isabel Serzedello', 'Isabella Arruda', 'Isabella Marques', 'Isadora Santos', 'Janete da Cruz Moreira', 'Jefferson Coelho', 'Jefferson Oliveira', 'Jefferson Silva', 'Jéssica Bulhões', 'João Henrique Bulhões', 'Jordana Lopes', 'Jorge José Ferreira', 'Jorge Júnior Martins', 'José Justino de Souza', 'Juan Sampaio Bulhões', 'Kamylle Danne', 'Keila Sampaio Bulhões', 'Kevin Sampaio Bulhões', 'Lais Moraes', 'Leonardo Barbosa', 'Letícia Marques', 'Lívia Andrade', 'Lucas Franklin', 'Lucia Severo', 'Luciana Lima', 'Luciana Ruiz', 'Luisa Marques', 'Luiz Carlos Mattoso', 'Luka Pierre', 'Luzimara Lelis', 'Márcio Santos', 'Maria Conceição Siqueira', 'Maria da Consolação', 'Maria da Glória Martins', 'Maria José da Costa', 'Maria Sueli', 'Marina Lucena', 'Matheus Serzedello', 'Mayara Carvalho', 'Miguel Siqueira', 'Miriam Lelis', 'Missionária Roberta Pina', 'Mônica Bulhões', 'Nivea Ximenes', 'Paloma Riveira Peres', 'Pastor Rafael Ferreira', 'Pastora Soraya Rocha', 'Patrícia Marques', 'Paulo Bulhões', 'Paulo Henrique PH', 'Rejane Silva', 'Rodrigo Cunha', 'Rodrigo Malta', 'Ronise Oliveira', 'Severino Bulhões', 'Silvia', 'Simone Ferrari', 'Sophya Alves', 'Suelen Serzedello Bulhões', 'Tayná Santos', 'Ted Lima', 'Tedson Lima', 'Terezinha Lima', 'Thainá Lima', 'Thayane Lima', 'Thelmo Lima Bulhões', 'Thierry Lima Bulhões', 'Tiago Arruda', 'Tiago Bulhões', 'Valeria Bulhões', 'Victor Lima', 'Vitor Guilherme Oliveira', 'Walisson Rodrigues Arruda', 'Wallace Moraes', 'Willian da Rocha'];


// Preenche o datalist
function atualizarLista() {
    guestList.innerHTML = '';
    convidados.forEach(nome => {
        const option = document.createElement('option');
        option.value = nome;
        guestList.appendChild(option);
    });
}

atualizarLista();

function normalizar(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

// SUBMIT ÚNICO
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeConfirmado = nameInput.value.trim();

    // Validação: precisa existir na lista
    const nomeEncontrado = convidados.find(
        nome => normalizar(nome) === normalizar(nomeConfirmado)
    );

    if (!nomeEncontrado) {
        alert('Por favor, selecione seu nome da lista de convidados.');
        return;
    }


    const firstName = nomeConfirmado.split(' ')[0];

    successText.innerHTML = `
    Obrigado, <strong>${firstName}</strong>! 💜<br>
    Sua confirmação foi recebida com sucesso.<br>
    Mal podemos esperar para celebrar este dia com você.
  `;

    // Remove o nome da lista
    convidados = convidados.filter(nome => nome !== nomeEncontrado);
    atualizarLista();

    form.reset();
    form.classList.add('hidden');
    success.classList.remove('hidden');

    console.log('Confirmado:', nomeConfirmado);
});
