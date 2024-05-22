const assert = require('assert'); 

// Importa las clases a testear
const { Producte, Botiga } = require('./ex2'); 

// Tests per la classe Producte
function testProducte() {
    // Test para la creació d'un producte
    const producte = new Producte('Camisa', 25, 50);
    assert.strictEqual(producte.nom, 'Camisa');

    // Test per la venda d'un producte
    producte.botiga = new Botiga();
    producte.vendre(10);
    assert.strictEqual(producte.quantitatEnEstoc, 40);

    // Test per reabastir un producte
    producte.reabastir(20);
    assert.strictEqual(producte.quantitatEnEstoc, 60);
}

// Tests per la classe Botiga
function testBotiga() {
    // Test per la creació d'una botiga
    const botiga = new Botiga();
    assert.deepStrictEqual(botiga.productes, []);
    assert.strictEqual(botiga.beneficis, 0);

    // Test per afegir un producte a la botiga
    const producte = new Producte('Bufanda', 15, 10);
    botiga.afegirProducte(producte);
    assert.deepStrictEqual(botiga.productes, [producte]);

    // Test per incrementar els beneficis de la botiga
    botiga.incrementarBeneficis(100);
    assert.strictEqual(botiga.beneficis, 100);
}

// Funció per executar els tests
function runTests() {
    testProducte();
    testBotiga();
    console.log(`Tots els test s'han executat amb èxit!`);
}

// Executa els tests
runTests();
