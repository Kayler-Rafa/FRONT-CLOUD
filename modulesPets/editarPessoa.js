function editarPessoa() {
  const id = new URLSearchParams(window.location.search).get("id");
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/clientes/${id}`)
    .then((res) => res.json())
    .then((cliente) => {
      document.getElementById("nome").value = cliente.nome;
      document.getElementById("cpf").value = cliente.cpf;
      document.getElementById("email").value =
        cliente.email;
      document.getElementById("telefone").value = cliente.telefone;
      document.getElementById("rua").value = cliente.endereco.rua;
      document.getElementById("bairro").value = cliente.endereco.bairro;
      document.getElementById("cidade").value = cliente.endereco.cidade;
    });
}