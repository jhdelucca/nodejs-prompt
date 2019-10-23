var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      endereco: {
      },
      email: {
          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          message: "Email invalido",
          required: true
      },
      cpf: {
          pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
          message: "Cpf Invalido",
          required: true
      }
    }
  };

const prompt = require("prompt");

prompt.start();

prompt.get(schema, function(_,result){
    console.log("Nome: " + result.name);
    console.log("Sobrenome: " + result.sobrenome);
    console.log("Endereço: " + result.endereco);
    console.log("Email: " + result.email);
    console.log("CPF: " + result.cpf);
});