var formPessoa = document.getElementById("formPessoa");
// formPessoa.style.display = "none";
// document.getElementById("tablePessoa").style.display = "block";
const salvarPessoaBtn = document.getElementById("salvarPessoa");

formPessoa.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPessoa = new FormData(formPessoa);
  const dataPost = Object.fromEntries(dataPessoa);

  if (validarCamposCliente()) {
    if (salvarPessoaBtn.innerText === "Salvar") {
      // salvarPessoa(dataPost);
      // console.log("teste")
    } else {
      atualizarCliente(dataPost);
    }
  } else {
    // Swal.fire(
    //   "Atenção!",
    //   "Por favor, preencha todos os campos.",
    //   "warning",
    // );
  }
});

function atualizarCliente(dados) {
  const id = new URLSearchParams(window.location.search).get("id");
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/clientes/${id}`, {
    method: "PUT",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pessoa) => {
      console.log(pessoa);
      formPessoa.reset();
      formPessoa.classList.remove("was-validated");
      mostrarPost();
      filtrarDono();
    });
}