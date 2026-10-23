const mensagens = {
  email: {
    valueMissing: 'Preencha este campo com seu e-mail.',
    typeMismatch: 'Digite um e-mail válido, por exemplo: nome@email.com.'
  },
  senha: {
    valueMissing: 'Preencha este campo com sua senha.',
    tooShort: 'A senha deve ter no mínimo 8 caracteres.',
    patternMismatch: 'A senha precisa ter 1 ou + caractere especial e 1 ou + números.'
  },
  'nao-robo': {
    valueMissing: 'Confirme que você não é um robô.'
  }
};

document.querySelectorAll('#email, #senha, #nao-robo').forEach((campo) => {
  campo.addEventListener('invalid', () => {
    const regras = mensagens[campo.id];
    for (const tipo in regras) {
      if (campo.validity[tipo]) {
        campo.setCustomValidity(regras[tipo]);
        return;
      }
    }
  });

  // limpa a mensagem ao digitar, para o navegador revalidar
  campo.addEventListener('input', () => campo.setCustomValidity(''));
  campo.addEventListener('change', () => campo.setCustomValidity(''));
});