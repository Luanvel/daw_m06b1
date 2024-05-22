// Exercici 2 EAC3: Programació orientada a objectes

class Botiga {
    #productes;
    #beneficis;

    constructor() {
        this.#productes = [];
        this.#beneficis = 0;
    }

    afegirProducte(producte) {
        producte.botiga = this;
        this.#productes.push(producte);
    }

    incrementarBeneficis(quantitat) {
        this.#beneficis += quantitat;
    }

    get productes() {
        return this.#productes;
    }

    get beneficis() {
        return this.#beneficis;
    }
}

class Producte {
    #nom = null;
    #preu = null;
    #quantitatEnEstoc = null;
    #botiga = null;

    constructor(nom, preu, quantitatEnEstoc) {
        this.#nom = nom;
        this.#preu = preu;
        this.#quantitatEnEstoc = quantitatEnEstoc;
    }

    get nom() {
        return this.#nom;
    }

    set nom(nom) {
        this.#nom = nom;
    }

    get preu() {
        return this.#preu;
    }

    set preu(preu) {
        this.#preu = preu;
    }

    get quantitatEnEstoc() {
        return this.#quantitatEnEstoc;
    }

    get botiga() {      
        return this.#botiga;
    }

    set botiga(botiga) {
        this.#botiga = botiga;
    }

    vendre(quantitat) {
        if (this.#botiga == null) {
            console.log("Aquest producte no es pot vendre perquè no està assignat a cap botiga");
            return;
        }

        if (quantitat <= this.#quantitatEnEstoc) {
            this.#quantitatEnEstoc -= quantitat;
            this.#botiga.incrementarBeneficis(quantitat * this.#preu);
        } else {
            console.log("No hi ha suficient estoc per vendre.");
        }
    }

    reabastir(quantitat) {
        this.#quantitatEnEstoc += quantitat;
    }   
}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Producte, Botiga };