function validarCamposCliente() {
  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();

  return nome !== "" && 
         cpf !== "" && 
         email !== "" && 
         telefone !== "" && 
         rua !== "" && 
         bairro !== "" && 
         cidade !== "";
}

function validarCamposPet() {
  const nomePet = document.getElementById("nomePet").value.trim();
  const especiePet = document.getElementById("especiePet").value.trim();
  const corPet = document.getElementById("corPet").value.trim();
  const idadePet = document.getElementById("idadePet").value.trim();

  return nomePet !== "" && 
         especiePet !== "" && 
         corPet !== "" && 
         idadePet !== "";
}