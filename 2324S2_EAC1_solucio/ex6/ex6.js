// Funció per afegir un article a la llista
function afegirItem() {
    const itemInput = document.getElementById("item");
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Si us plau, no deixis el camp en blanc.");
        return;
    }

    // Obtenir la llista actual des de localStorage
    let llista = localStorage.getItem("TODOlist");

    // Si no hi ha cap llista existent es crea una nova llista
    if (!llista) {
        llista = [];
    } else {
        llista = JSON.parse(llista);
    }

    // Afegir un nou article a la llista
    llista.push(itemText);

    // Actualizar el localStorage amb la nova llista
    localStorage.setItem("TODOlist", JSON.stringify(llista));

    // Netejar el camp input
    itemInput.value = "";

    // Actualitzar la pantalla de l'usuari
    mostrarLlista();
}

// Funció per mostrar la llista
function mostrarLlista() {
    const llistaElement = document.getElementById("llista");
    llistaElement.innerHTML = "";

    // Obtener la llista des del localStorage
    const llista = JSON.parse(localStorage.getItem("TODOlist")) || [];

    // Crear elements de llista para cada tasca
    llista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        llistaElement.appendChild(li);
    });
}