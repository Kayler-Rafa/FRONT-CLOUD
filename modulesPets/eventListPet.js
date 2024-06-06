var formPet = document.getElementById("petForm");
const salvarPetBtn = document.getElementById("salvarPet");

formPet.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPet = new FormData(formPet);
  const dataPost = Object.fromEntries(dataPet);
  console.log(dataPost)

  if (validarCamposPet()) {
    if (salvarPetBtn.innerText === "Salvar") {
      event.preventDefault();
      salvarPet(dataPost);
    } else {
      atualizarPet(dataPost, salvarPetBtn.value);
    }
  } else {
    // Swal.fire(
    //   "Atenção!",
    //   "Por favor, preencha todos os campos.",
    //   "warning",
    // );
  }
});

function atualizarPet(dados, idPet) {
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/pets/${idPet}`, {
    method: "PUT",
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
      document.getElementById("salvarPet").innerHTML = "Salvar";
      document.getElementById("salvarPet").value = "";
      filtrarDono();
      filtrarPets();
    });
}