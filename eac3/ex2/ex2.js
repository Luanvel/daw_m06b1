// Exercici 2 EAC3: Programació orientada a objectes

class Botiga {
  // Escriu aquí el teu codi
  constructor() {
    this.productes = [];
    this.beneficis = 0;
  }

  getProductes() {
    return this.productes;
  }

  getBeneficis() {
    return this.beneficis;
  }

  afegirProducte(producte) {
    this.productes.push(producte);
  }

  incrementarBeneficis(quantitat) {
    this.beneficis += quantitat;
  }
}

class Producte {
  // Escriu aquí el teu codi
  constructor(nom, preu, quantitatEnEstoc) {
    this.nom = nom;
    this.preu = preu;
    this.quantitatEnEstoc = quantitatEnEstoc;
    this.botiga = null;
  }

  getNom() {
    return this.nom;
  }

  setNom(nom) {
    this.nom = nom;
  }

  getPreu() {
    return this.preu;
  }

  setPreu(preu) {
    this.preu = preu;
  }

  getquantitatEnEstoc() {
    return this.quantitatEnEstoc;
  }

  setBotiga(botiga) {
    this.botiga = botiga;
  }

  vendre(quantitat) {
    if (this.quantitatEnEstoc > 0 && this.quantitatEnEstoc >= quantitat) {
      this.quantitatEnEstoc = this.quantitatEnEstoc - quantitat;
      this.botiga.incrementarBeneficis(quantitat);
    }
  }

  reabastir(quantitat) {
    if (quantitat < 0) {
      console.log("No es pot reabastir una quantitat negativa.");
      return;
    }
    this.quantitatEnEstoc += quantitat;
  }
}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Producte, Botiga };
