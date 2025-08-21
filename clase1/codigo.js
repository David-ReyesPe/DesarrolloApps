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

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.onclick = () => eliminarElemento(item);

    li.appendChild(eliminarBtn);
    listaUI.appendChild(li);
  });
}


function eliminarElemento(indice) {

  lista.splice(indice, 1);
  mostrarLista();
  
}