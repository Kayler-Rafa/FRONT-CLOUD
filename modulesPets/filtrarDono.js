function filtrarDono() {
  const id = new URLSearchParams(window.location.search).get("id");
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/clientes/${id}`)
    .then((res) => res.json())
    .then((cliente) => {
      // console.log(clientes);
      var listaPessoas = "";
        listaPessoas += `
              <tr>
                  <th scope="row">${cliente.nome}</th>
                  <td>${cliente.cpf}</td>
                  <td>${cliente.email}</td>
                  <td>${cliente.telefone}</td>
                  <td>${cliente.endereco.rua}</td>
                  <td>${cliente.endereco.bairro}</td>
                  <td>${cliente.endereco.cidade}</td>
                  <td>
                      <button onclick="deletarPessoa()" class="btn btn-danger">X</button>
                  </td>
              </tr>
              `;
      document.getElementById('infoCliente').innerHTML = listaPessoas;

      filtrarIdNome(cliente._id, cliente.nome);
    });
}

filtrarDono()