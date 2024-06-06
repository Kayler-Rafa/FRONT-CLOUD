function salvarPet(dados) {
  fetch('https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/pets', {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pet) => {
      console.log(pet);
      petForm.reset();
      petForm.classList.remove("was-validated");
      // mostrarTable();
      filtrarPets();
      filtrarDono();
      document.getElementById("id").value = "";
      // Swal.fire("Sucesso!", "Pessoa salva com sucesso.", "success");
    });
}