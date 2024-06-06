function filtrarIdNome(id, nome) {
  formId = document.getElementById('idCliente');
  formNome = document.getElementById('nomeCliente');
  idDono = document.getElementById('idDono');

  formId.value = `${id}`;
  idDono.value = `${id}`;
  formNome.value = `${nome}`
}