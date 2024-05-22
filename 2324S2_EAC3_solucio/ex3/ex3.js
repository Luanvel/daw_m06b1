// Exercici 3 EAC3: Programació orientada a objectes amb herència

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

class ProducteAlimentari extends Producte {
    #dataCaducitat;

    constructor(nom, preu, quantitatEnEstoc, dataCaducitat) {
        super(nom, preu, quantitatEnEstoc);
        this.#dataCaducitat = dataCaducitat;
    }

    comprovarCaducitat() {
        const avui = new Date();
        // retorna true si el producte està caducat
        return this.#dataCaducitat < avui;
    }
}

class ProducteElectronic extends Producte {
    #garantia;

    constructor(nom, preu, quantitatEnEstoc, garantia) {
        super(nom, preu, quantitatEnEstoc);
        this.#garantia = garantia;
    }

    calcularPreuDescompte() {
        if (this.#garantia > 1) {
            return this.preu * 0.9; // Aplicar descompte del 10%
        } else {
            return this.preu;
        }
    }
}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Producte, Botiga, ProducteAlimentari, ProducteElectronic };