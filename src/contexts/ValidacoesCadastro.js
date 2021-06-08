import React from 'react';

const semValidacao = () => {
  return { valido: true, texto: '' };
};

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

export default ValidacoesCadastro;
