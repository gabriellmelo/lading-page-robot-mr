function getData() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    localStorage.setItem('Nome', nameInput.value);
    localStorage.setItem('E-Mail', emailInput.value);

    
    alert('Cadastro realizado com sucesso!');
}