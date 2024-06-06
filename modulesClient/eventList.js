var formPessoa = document.getElementById("formPessoa");
// formPessoa.style.display = "none";
// document.getElementById("tablePessoa").style.display = "block";
const salvarPessoaBtn = document.getElementById("salvarPessoa");

formPessoa.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPessoa = new FormData(formPessoa);
  const dataPost = Object.fromEntries(dataPessoa);
  console.log(dataPost)

  if (validarCampos()) {
    if (salvarPessoaBtn.innerText === "Salvar") {
      salvarPessoa(dataPost);
      console.log("teste")
    } else {
      atualizarPessoa(dataPost);
    }
  } else {
    // Swal.fire(
    //   "Atenção!",
    //   "Por favor, preencha todos os campos.",
    //   "warning",
    // );
  }
});
