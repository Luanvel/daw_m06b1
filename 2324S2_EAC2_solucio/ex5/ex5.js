let clients = [];

/**
 * Funció associada al botó "Afegir" que agafa les dades del client (nom i DNI) i les desa dins l'array clients
 */
function afegir() {
    let nomClient = document.getElementById("client").value;
    let DNI = document.getElementById("dni").value;

    if (!validarDNI(DNI)) {
        mostrarError("El DNI no té el format correcte");
        return;
    }

    if (posicioClient(DNI) != -1) {
        mostrarError("Ja existeix un client amb aquest identificador");
        return;
    }

    netejarInput("client");
    netejarInput("dni");

    let client = [DNI, nomClient];
    clients.push(client);
    // Cada cop que s'afegeix un client es desa tot l'array de clients al localStorage
    desarClients();

    mostrar();
}

/**
 * Funció associada al botó "Eliminar" que elimina un client a partir del seu DNI. Previ a la eliminació fa les comprovacions pertinents per validar aquell DNI.
 */
function eliminar() {
    let DNI = document.getElementById("deleteDNI").value;

    // Si l'usuari no escriu l'id del producte fem saltar un error
    if (!validarDNI(DNI)) {
        mostrarError("El DNI no és vàlid");
        return;
    }

    netejarInput("client");
    netejarInput("dni");

    // Si el client no existeix no cal fer cap acció
    let pos = posicioClient(DNI);
    if (pos < 0) {
        mostrarError("No hi ha cap client amb aquest identificador");
        return;
    } 

    // Si el client existeix el treiem de la llista
    clients.splice(pos,1);

    desarClients();

    mostrar();
}

/**
 * Funció que es crida cada cop que afegim o eliminem un client. Bàsicament neteja el <div> on es mostra la llista i es torna a crear a partir de l'array de clients.
 */
function mostrar() {
    let clientsLength = clients.length;

    // Si la llista de clients està buida, miro si hi ha res desat en localStorage
    if (clientsLength <= 0 && recuperarClients() != null) {
        clients = recuperarClients();
        clientsLength = clients.length;
    }

    netejarCamp("llistatClients");

    for (let i = 0; i < clientsLength; i++) {
        document.getElementById("llistatClients").innerHTML += `DNI: ${clients[i][0]} - Nom: ${clients[i][1]}<br/>`;
    }
    
}

/**
 * Funció que converteix tot l'array de clients a String perquè sigui còmode desar-ho al localStorage
 */
function desarClients() {
    let llista = JSON.stringify(clients);
    window.localStorage.setItem("llistaClients", llista);
}

/**
 * Funció que recupera el llistat de clients del localStorage
 * @returns el llistat de clients si existeix o null en cas contrari
 */
function recuperarClients() {
    if (window.localStorage.getItem("llistaClients")) {
        return JSON.parse(window.localStorage.getItem("llistaClients"));
    }

    return null;
}

/**
 * Funció que ordena l'array de clients per Nom
 */
function ordenarNom() {
    clients.sort((a, b) => a[1].localeCompare(b[1]));
    mostrar();
}

/**
 * Funció que ordena l'array de clients per DNI
 */
function ordenarDNI() {
    clients.sort((a, b) => a[0].localeCompare(b[0]));
    mostrar();
}

/**
 * Funció per mostrar diversos errors per pantalla o consola, etc.
 * @param {string} error Missatge d'error
 */
function mostrarError(error) {
    alert(error);
}

/**
 * Funció de suport on mira si el camp indicat és ple o buit
 * @param {*} producte id o nom del producte
 * @returns boolean
 */
function validarDNI(DNI) {
    // validar DNI amb una expressió regular
    let regex = /^\d{8}[A-Z]$/;
    return regex.test(DNI);
}

/**
 * Funció que mira en quina posició es troba cert client a l'array de clients.
 * @param {*} DNI DNI del client
 * @returns índex d'on es troba el client en l'array "clients". En cas de no existir retorna -1
 */
function posicioClient(DNI) {
    // Creo un nou array amb només els identificadors dels productes i miro si aquest hi és
    let idArray = clients.map((cli)=>cli[0]);

    return idArray.indexOf(DNI);
}

/**
 * Funció de suport per deixar de nou en blanc un camp de text utilitzat
 * @param {*} camp Camp de text o "div"
 */
function netejarCamp(camp) {
    document.getElementById(camp).innerText = null;
}

/**
 * Funció de suport per deixar de nou en blanc un "input" utilitzat
 * @param {*} input Valor d'un "input"
 */
function netejarInput(input) {
    document.getElementById(input).value = null;
}