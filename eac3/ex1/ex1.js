// Defineix l'objecte inventari amb els llibres actualitzats
let inventari = {
	llibres: [
		{
			isbn: '9788423350094',
			titol: 'El Quijote',
			autor: ['Miguel de Cervantes'],
			copies: ["QUIJOTE-001", "QUIJOTE-002"],
			prestecs: [
				{ idCopia: "QUIJOTE-001", dataPrestec: '2024-02-01' },
				{ idCopia: "QUIJOTE-002", dataPrestec: '2024-02-19' },
				{ idCopia: "QUIJOTE-001", dataPrestec: '2024-03-11' }
			]
		},
		{
			isbn: '9780544003415',
			titol: 'The Lord of the Rings',
			autor: ['J.R.R. Tolkien'],
			copies: ["TLOTR-001"],
			prestecs: [
				{ idCopia: "TLOTR-001", dataPrestec: '2024-02-15' }
			]
		}
	],

	// Escriu aquí el teu codi


	
};


// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { inventari };
