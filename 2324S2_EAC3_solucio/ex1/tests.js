// Importa las clases a testear
const { inventari } = require('./ex1');

/**
 * JOC DE PROVES
 * Aquest joc de proves executa cada funció de l'inventari amb diferents entrades i verifica si la sortida és l'esperada. 
 * Cada prova imprimirà "Passat" si la funció retorna el resultat correcte i "Fallat" si no ho fa.
 */

// Funció per executar els tests
function runTests() {
    // Joc de proves per la funció prestar
    console.log("Test de prestar:");
    console.log("Prestant còpia 'QUIJOTE-002' del llibre 'El Quijote' el 2024-03-12:", inventari.prestar('QUIJOTE-002', '2024-03-12') === true ? "Passat" : "Fallat");
    console.log("Prestant una còpia inexistent:", inventari.prestar('TLOTR-002', '2024-03-12') === false ? "Passat" : "Fallat");
    
    // Joc de proves per la funció ultimaOperacio
    console.log("\nTest de ultimaOperacio:");
    //console.log("Última operació de préstec:", inventari.ultimaOperacio().titol === "The Lord of the Rings" ? "Passat" : "Fallat");
    console.log("Última operació de préstec:", inventari.ultimaOperacio().titol === "El Quijote" ? "Passat" : "Fallat");

    // Joc de proves per la funció quantitatTotalLlibres
    console.log("\nTest de quantitatTotalLlibres:");
    console.log("Quantitat total de llibres:", inventari.quantitatTotalLlibres() === 2 ? "Passat" : "Fallat");

    // Joc de proves per la funció afegirLlibre
    console.log("\nTest de afegirLlibre:");
    console.log("Afegint un nou llibre 'Don Quixote' amb ISBN 9780060934347:", inventari.afegirLlibre('9780060934347', 'Don Quixote', ['Miguel de Cervantes'], ['QUIJOTE-003']) === true ? "Passat" : "Fallat");
    console.log("Afegint un llibre amb ISBN ja existent:", inventari.afegirLlibre('9780060934347', 'Don Quixote', ['Miguel de Cervantes'], ['QUIJOTE-004']) === false ? "Passat" : "Fallat");
    console.log("Afegint un llibre amb còpia ja existent:", inventari.afegirLlibre('9780743273565', '1984', ['George Orwell'], ['TLOTR-001']) === false ? "Passat" : "Fallat");
	console.log("Quantitat total de llibres:", inventari.quantitatTotalLlibres() === 3 ? "Passat" : "Fallat");
}

// Executa els tests
runTests();