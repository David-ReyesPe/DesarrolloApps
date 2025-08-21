const lista = [];
const entrada = document.getElementById("entrada");   
const listaUI = document.getElementById("lista");     

function agregarElemento() {
  const valor = entrada.value.trim(); 

  if (!valor) return; 

  lista.push(valor);
  entrada.value = ""; 

  mostrarLista();
}

function mostrarLista() {

  listaUI.innerHTML = "";

  lista.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaUI.appendChild(li);
  });
}
