function editarPet(idPet) {
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/pets/${idPet}`)
    .then((res) => res.json())
    .then((pet) => {
      document.getElementById("nomePet").value = pet.nome;
      document.getElementById("especiePet").value = pet.especie;
      document.getElementById("corPet").value = pet.cor;
      document.getElementById("idadePet").value = pet.idade;

      document.getElementById("salvarPet").innerHTML = "Atualizar";
      document.getElementById("salvarPet").value = pet._id;
    });
}