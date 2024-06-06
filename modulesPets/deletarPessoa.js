function deletarPessoa() {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id)
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/clientes/${id}`, {
    method: "DELETE",
  }).then((res) => {
    return res.json();
  }).then((pessoa) => {
    console.log('foi deletado', pessoa);
    // alert(`A pessoa ${id} foi deletada com sucesso`);
    window.location.href = 'index.html';
  }).catch((error) => {
    console.error('Erro ao deletar:', error);
    alert(`Ocorreu um erro ao tentar deletar a pessoa ${id}`);
  });
}