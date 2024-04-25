let llistaClients = [];

const getLlistaClients = () => {
  const savedClients = localStorage.getItem("llistaClients");
  if (savedClients) {
    llistaClients = JSON.parse(savedClients);
  }
};

getLlistaClients();

const setLlistaClients = (llistaClients) => {
  localStorage.setItem("llistaClients", JSON.stringify(llistaClients));
};

const regex = /^[0-9]{8}[A-Za-z]$/;

//AFEGIR
const afegir = () => {
  const client = document.querySelector("#client").value;
  const dni = document.querySelector("#dni").value;

  if (!regex.test(dni)) {
    alert("El DNI no té el format correcte");
    return;
  }

  if (llistaClients.find((client) => client.dni == dni)) {
    alert("Ja existeix un client amb aquest identificador");
    return;
  }

  llistaClients.push({ client: client, dni: dni });

  setLlistaClients(llistaClients);
  mostrar();
};

const mostrar = () => {
  const llistatClients = document.querySelector("#llistatClients");
  llistatClients.innerHTML = "";

  llistaClients.forEach((client) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `DNI: ${client.dni} - Nom: ${client.client}`;
    llistatClients.appendChild(paragraph);
  });
};

const eliminar = () => {
  const deleteDNI = document.querySelector("#deleteDNI").value;

  if (!regex.test(deleteDNI)) {
    alert("El DNI no té el format correcte");
    return;
  }

  if (llistaClients.find((client) => client.dni == deleteDNI)) {
    llistaClients = llistaClients.filter((client) => client.dni !== deleteDNI);
    setLlistaClients(llistaClients);
    mostrar();
  } else {
    alert("No hi ha cap client amb aquest identificador");
  }
};

const ordenarNom = () => {
  llistaClients.sort(function (a, b) {
    if (a.client < b.client) return -1;
    if (a.client > b.client) return 1;
    return 0;
  });
  mostrar();
};

const ordenarDNI = () => {
  llistaClients.sort(function (a, b) {
    if (a.dni < b.dni) return -1;
    if (a.dni > b.dni) return 1;
    return 0;
  });
  mostrar();
};
