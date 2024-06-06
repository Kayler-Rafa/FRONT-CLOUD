function pegarClientes() {
  fetch('https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/clientes/')
    .then((res) => res.json())
    .then((clientes) => {
      // console.log(clientes);
      var listaPessoas = "";
      for (var cliente of clientes) {
        listaPessoas += `
              <tr>
                  <th scope="row">${cliente._id}</th>
                  <td>${cliente.nome}</td>
                  <td>${cliente.cpf}</td>
                  <td>${cliente.email}</td>
                  <td>${cliente.telefone}</td>
                  <td>${cliente.endereco.rua}</td>
                  <td>${cliente.endereco.bairro}</td>
                  <td>${cliente.endereco.cidade}</td>
                  <td>
                    <a href="pets.html?id=${cliente._id}">
                      <button class="btn btn-primary">&#9998;</button>
                    </a>
                  </td>
              </tr>
              `;
      }
      document.querySelector("tbody").innerHTML = listaPessoas; 
    });
}

pegarClientes()