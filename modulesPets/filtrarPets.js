function filtrarPets() {
  const id = new URLSearchParams(window.location.search).get("id");
  fetch(`https://69f54161-d8b6-4cb3-9298-56a119cef457-00-1ws28372lpsvl.worf.replit.dev/pets/`)
    .then((res) => res.json())
    .then((pets) => {
      // console.log(pets);
      var listaPets = "";
      for (var pet of pets) {
        if(pet.dono._id == id) {
        listaPets += `
              <tr>
                  <th scope="row">${pet._id}</th>
                  <td>${pet.nome}</td>
                  <td>${pet.especie}</td>
                  <td>${pet.idade}</td>
                  <td>${pet.cor}</td>
                  <td>
                    <button onclick="editarPet('${pet._id}')" class="btn btn-primary">&#9998;</button>
                    <button onclick="deletarPet('${pet._id}')" class="btn btn-danger">X</button>
                  </td>
              </tr>
              `;
        }
      }
      document.getElementById("infoPets").innerHTML = listaPets; 
    });
}

filtrarPets()

