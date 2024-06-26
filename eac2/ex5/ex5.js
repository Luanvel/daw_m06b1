/** Es declara l'array buit per llistaClients */
let llistaClients = [];


/** Regex per validar DNI Espanyol*/
const regex = /^[0-9]{8}[A-Za-z]$/;


/**
 * Funció per carregar la llista de clients del localstorage
 * @function
 */
const getLlistaClients = () => {
    const savedClients = localStorage.getItem("llistaClients");
    /** Si hi ha informació guardada, modificarem l'array declarat anteriorment (llistaClients) pel guardat */
    if (savedClients) {
        llistaClients = JSON.parse(savedClients);
    }
};

/** Utilitzem la funció getLlitaClients a l'inicialitzar la web */
getLlistaClients();


/**
 * Funció per guardar els canvis de l'array llistaClients al localStorage
 * @function
 */
const setLlistaClients = (llistaClients) => {
    localStorage.setItem("llistaClients", JSON.stringify(llistaClients));
};


/**
 * Funció per afegir un client
 * @function
 */
const afegir = () => {
    /** Es declaren dues constants per seleccionar el valor del input del client i el dni */
    const client = document.querySelector("#client").value;
    const dni = document.querySelector("#dni").value;

    /** Validació del DNI */
    if (!regex.test(dni)) {
        alert("El DNI no té el format correcte");
        return;
    }

    /** Validació de l'existència d'un client amb el mateix DNI */
    if (llistaClients.find((client) => client.dni == dni)) {
        alert("Ja existeix un client amb aquest identificador");
        return;
    }

    /** Si tot surt bé, es farà un push a l'array llistaClients amb un nou objecte (així retornem els valors) */
    llistaClients.push({ client: client, dni: dni });

    /** Guardem la nova llista de clients al localstorage i mostrem els canvis */
    setLlistaClients(llistaClients);
    mostrar();
};


/**
 * Funció per mostrar l'array de clients al DOM
 * @function
 */
const mostrar = () => {
    /**Seleccionem la secció on introduirem els paràgrafs amb els clients */
    const llistatClients = document.querySelector("#llistatClients");

    /** Esborrem tot el contingut anterior, ja que sino la llista cada cop seria més llarga*/
    llistatClients.innerHTML = "";

    /** Per cada client a l'array llistaClients, crearem un paràgraf amb les seves dades i l'agregarem al DOM */
    llistaClients.forEach((client) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `DNI: ${client.dni} - Nom: ${client.client}`;
        llistatClients.appendChild(paragraph);
    });
};


/**
 * Funció per eliminar un client pel DNI
 * @function
 */
const eliminar = () => {
    /** Seleccionem el input on s'introdueix el DNI del client a esborrar */
    const deleteDNI = document.querySelector("#deleteDNI").value;

    /** De nou, tornem a validar que el DNI introduit sigui correcte */
    if (!regex.test(deleteDNI)) {
        alert("El DNI no té el format correcte");
        return;
    }

    /** Busquem una coincidència de DNI a la llista clients amb el DNI introduit */
    if (llistaClients.find((client) => client.dni == deleteDNI)) {
        /** Si hi ha aquest coincidencia, filtrarem l'array i en farem un nou sense el client amb la coincidencia del DNI */
        llistaClients = llistaClients.filter((client) => client.dni !== deleteDNI);

        /** Guardem el nou array a la localStorage i mostrem els canvis */
        setLlistaClients(llistaClients);
        mostrar();
    }

    else {
        /** Si no hi ha coincidencia, es mostrarà aquesta alerta */
        alert("No hi ha cap client amb aquest identificador");
    }
};


/**
 * Funció per ordenar l'array segons el nom dels clients i mostrar la llista ordenada
 * Onclick
 * @function
 */
const ordenarNom = () => {
    llistaClients.sort(function (a, b) {
        if (a.client < b.client) return -1;
        if (a.client > b.client) return 1;
        return 0;
    });
    mostrar();
};


/**
 * Funció per ordenar la llista de clients per dni (número) i mostrar la llista ordenada
 * Onclick
 * @function
 */
const ordenarDNI = () => {
    llistaClients.sort(function (a, b) {
        if (a.dni < b.dni) return -1;
        if (a.dni > b.dni) return 1;
        return 0;
    });
    mostrar();
};
