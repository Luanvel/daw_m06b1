//Generem la variable fora, si existeix el localstorage l'agafem i sino existeix, serà un array buit
let todoList = JSON.parse(localStorage.getItem("todoList") || []);

// Funció per afegir un article a la llista
function afegirItem() {
  //Seleccionem el value que introdueix l'usuari i l'introduim a l'array todoList
  const newTask = document.querySelector("#item").value;
  todoList.push(newTask);

  //Posem el value buit perque no es quedi el text anterior escrit
  document.querySelector("#item").value = "";

  //Guardem l'array amb els nous items al storage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  //Necessari refrescar la pagina perque es vegi el canvi al moment
  location.reload();
}

// Funció per mostrar la llista
function mostrarLlista() {
  // Recuperem el todoList
  storedTodoList = JSON.parse(localStorage.getItem("todoList"));

  //Agafem la llista on introduirem els items
  const llista = document.querySelector("#llista");

  //Per cada item del todoList, fem un li i li fem append a la llista
  storedTodoList.forEach((item) => {
    const itemLlista = document.createElement("li");
    itemLlista.textContent = item;
    llista.appendChild(itemLlista);
  });
}
