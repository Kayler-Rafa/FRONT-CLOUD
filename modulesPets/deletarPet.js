function deletarPet(id) {
  console.log(id)
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/pets/${id}`, {
    method: "DELETE",
  }).then((res) => {
    return res.json();
  }).then((pet) => {
    filtrarPets();
    // alert(`A pessoa ${id} foi deletada com sucesso`);
  }).catch((error) => {
    console.error('Erro ao deletar:', error);
    alert(`Ocorreu um erro ao tentar deletar a pet ${id}`);
  });
}