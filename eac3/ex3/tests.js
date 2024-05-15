// Importa las clases a testear
const {
  Producte,
  Botiga,
  ProducteAlimentari,
  ProducteElectronic,
} = require("./ex3");

// Funció per a comprovar si un producte alimentari està caducat
function testComprovarCaducitat() {
  const avui = new Date();
  const ahir = new Date(avui);
  ahir.setDate(ahir.getDate() - 1); // Ahir

  const botiga = new Botiga();
  const producte = new ProducteAlimentari("Iogurt", 1.5, 10, ahir);
  botiga.afegirProducte(producte);

  if (producte.comprovarCaducitat() === true) {
    console.log(
      'Test "Comprovar si un producte alimentari està caducat": passat.'
    );
  } else {
    console.error(
      'Test "Comprovar si un producte alimentari està caducat": fallat.'
    );
  }
}

// Funció per a comprovar si un producte alimentari no està caducat
function testComprovarNoCaducitat() {
  const avui = new Date();
  const dema = new Date(avui);
  dema.setDate(dema.getDate() + 1); // Demà

  const botiga = new Botiga();
  const producte = new ProducteAlimentari("Iogurt", 1.5, 10, avui);
  botiga.afegirProducte(producte);

  if (producte.comprovarCaducitat() === false) {
    console.log(
      'Test "Comprovar si un producte alimentari no està caducat": passat.'
    );
  } else {
    console.error(
      'Test "Comprovar si un producte alimentari no està caducat": fallat.'
    );
  }
}

// Funció per a comprovar el càlcul del preu descomptat per a un producte electrònic
function testCalcularPreuDescompte() {
  const botiga = new Botiga();
  const producte = new ProducteElectronic("Portàtil", 1000, 5, 2);
  botiga.afegirProducte(producte);

  if (producte.calcularPreuDescompte() === 900) {
    console.log(
      'Test "Calcular preu descomptat per a un producte amb garantia": passat.'
    );
  } else {
    console.error(
      'Test "Calcular preu descomptat per a un producte amb garantia": fallat.'
    );
  }
}

// Funció per a comprovar que no s'aplica descompte per a un producte sense garantia
function testSenseDescompte() {
  const botiga = new Botiga();
  const producte = new ProducteElectronic("Telèfon", 500, 10, 0.5);
  botiga.afegirProducte(producte);

  if (producte.calcularPreuDescompte() === 500) {
    console.log(
      'Test "No aplicar descompte per a un producte sense garantia": passat.'
    );
  } else {
    console.error(
      'Test "No aplicar descompte per a un producte sense garantia": fallat.'
    );
  }
}

// Executar tots els tests
function runTests() {
  testComprovarCaducitat();
  testComprovarNoCaducitat();
  testCalcularPreuDescompte();
  testSenseDescompte();
}

// Executar els tests
runTests();
