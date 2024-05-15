// Defineix l'objecte inventari amb els llibres actualitzats
let inventari = {
  llibres: [
    {
      isbn: "9788423350094",
      titol: "El Quijote",
      autor: ["Miguel de Cervantes"],
      copies: ["QUIJOTE-001", "QUIJOTE-002"],
      prestecs: [
        { idCopia: "QUIJOTE-001", dataPrestec: "2024-02-01" },
        { idCopia: "QUIJOTE-002", dataPrestec: "2024-02-19" },
        { idCopia: "QUIJOTE-001", dataPrestec: "2024-03-11" },
      ],
    },
    {
      isbn: "9780544003415",
      titol: "The Lord of the Rings",
      autor: ["J.R.R. Tolkien"],
      copies: ["TLOTR-001"],
      prestecs: [{ idCopia: "TLOTR-001", dataPrestec: "2024-02-15" }],
    },
  ],

  prestar: (idCopia, dataPrestec) => {
    //Per cada llibre, mirarem si copies inclou la id de la copia del llibre a prestar
    //Si es així, s'inclourà a l'array de prestecs.
    for (let llibre of inventari.llibres) {
      if (llibre.copies.includes(idCopia)) {
        llibre.prestecs.push({ idCopia: idCopia, dataPretec: dataPrestec });
        return true;
      }
    }
    return false;
  },

  ultimaOperacio: () => {
    //Definim un objecte per incloure el possible "nou" ultim prestec
    let ultimPrestec = {};
    //Per cada llibre de l'array de llibres
    inventari.llibres.forEach((llibre) => {
      //definim una variable per saber quin és l'últim llibre prestat a l'array
      let ultimPrestecLlibre = llibre.prestecs[llibre.prestecs.length - 1];
      if (
        //Si la data de l'ultim prestec és null o la data de l'últim prèstec és anterior al nou prèstec
        //Guardarem la informació de les noves dades de l'ultim llibre que es prestarà al nou objecte.
        ultimPrestec.dataPrestec == null ||
        ultimPrestecLlibre.dataPrestec > ultimPrestec.dataPrestec
      ) {
        ultimPrestec = {
          titol: llibre.titol,
          idCopia: ultimPrestecLlibre.idCopia,
          dataPrestec: ultimPrestecLlibre.dataPrestec,
        };
      }
    });
    return ultimPrestec;
  },

  //Es mira la quantitat total de llibres registrats
  quantitatTotalLlibres: () => {
    return inventari.llibres.length;
  },

  //Afegir un llibre (i retornar true) en cas que no coincideixi ni l'isbn ni inclogui la copia passada com a valor.
  //Includes només funciona si es una string, per tant s'ha d'afegir aquest mètode o donava error.
  afegirLlibre: (isbn, titol, autor, copies) => {
    for (let llibre of inventari.llibres) {
      if (llibre.isbn === isbn || llibre.copies.includes(copies.toString())) {
        return false;
      }
    }

    inventari.llibres.push({
      isbn: isbn,
      titol: titol,
      autor: autor,
      copies: [copies],
      prestecs: [],
    });

    console.log(inventari.llibres);

    return true;
  },
};

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { inventari };
