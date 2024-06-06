// document.getElementById('adicionarPet').addEventListener('click', function () {
//   var petForm = document.querySelector('.form-row').cloneNode(true);
//   petForm.querySelectorAll('input').forEach(input => input.value = '');
//   var hr = document.createElement('hr');
//   document.getElementById('petForms').appendChild(hr);
//   document.getElementById('petForms').appendChild(petForm);
// });

// document.getElementById('petForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Impede o envio do formulário

//   var petForms = document.getElementById('petForms').getElementsByClassName('form-row');
//   var infoPets = document.getElementById('infoPets');
//   infoPets.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

//   for (var i = 0; i < petForms.length; i++) {
//     var petForm = petForms[i];
//     var nomePet = petForm.querySelector('input[name="nomePet"]').value;
//     var tipoPet = petForm.querySelector('input[name="tipoPet"]').value;
//     var racaPet = petForm.querySelector('input[name="racaPet"]').value;
//     var idadePet = petForm.querySelector('input[name="idadePet"]').value;

//     var petRow = document.createElement('tr');
//     petRow.innerHTML = `
//       <td>${i + 1}</td>
//       <td>${nomePet}</td>
//       <td>${tipoPet}</td>
//       <td>${racaPet}</td>
//       <td>${idadePet}</td>
//     `;
//     infoPets.appendChild(petRow);
//     filtrarIdNome();
//   }
// });

// Função para mostrar informações do cliente e dos pets
// function mostrarInfoClienteEPets(id) {
  // Informações do cliente
  // var infoCliente = document.getElementById('infoCliente');
  // infoCliente.innerHTML = '';
  // var clienteRow = document.createElement('tr');
  // clienteRow.innerHTML = `
  //   <td>1</td>
  //   <td>Rafael Diniz</td>
  //   <td>111.111.111-11</td>
  //   <td>Rafa@Rafa.com</td>
  //   <td>(81) 99999-9999</td>
  //   <td>São Sebastião</td>
  //   <td>Boa Viagem</td>
  //   <td>Recife</td>
  // `;
  // infoCliente.appendChild(clienteRow);

  // Informações dos pets
//   var infoPets = document.getElementById('infoPets');
//   infoPets.innerHTML = '';
//   var petRow1 = document.createElement('tr');
//   petRow1.innerHTML = `
//     <td>1</td>
//     <td>Cachorro Rex</td>
//     <td>Cachorro</td>
//     <td>Vira-lata</td>
//     <td>3</td>
//   `;
//   infoPets.appendChild(petRow1);

//   var petRow2 = document.createElement('tr');
//   petRow2.innerHTML = `
//     <td>2</td>
//     <td>Gato Miau</td>
//     <td>Gato</td>
//     <td>Siamês</td>
//     <td>5</td>
//   `;
//   infoPets.appendChild(petRow2);
// }

// // Chamada da função para mostrar as informações
// mostrarInfoClienteEPets();