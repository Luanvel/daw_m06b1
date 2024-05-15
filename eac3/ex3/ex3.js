// Exercici 3 EAC3: Programació orientada a objectes amb herència

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

// Escriu aquí el teu codi per les classes ProducteAlimentari i ProducteElectronic

class ProducteAlimentari extends Producte {
  constructor(nom, preu, quantitatEnEstoc, dataCaducitat) {
    super(nom, preu, quantitatEnEstoc);
    this.dataCaducitat = dataCaducitat;
  }

  //Retornarà true o false segons si la comparativa es true o false
  comprovarCaducitat() {
    return this.dataCaducitat < new Date();
  }
}

class ProducteElectronic extends Producte {
  constructor(nom, preu, quantitatEnEstoc, garantia) {
    super(nom, preu, quantitatEnEstoc);
    this.garantia = garantia;
  }

  calcularPreuDescompte() {
    //Si la garantia es major a un any
    if (this.garantia > 1) {
      //Retornem el preu amb el 10% de descompte
      return (this.preu = this.preu - 0.1 * this.preu);
    } else {
      //Sino retornem el preu normal
      return this.preu;
    }
  }
}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Producte, Botiga, ProducteAlimentari, ProducteElectronic };
