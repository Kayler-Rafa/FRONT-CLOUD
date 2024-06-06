function validarCampos() {
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
