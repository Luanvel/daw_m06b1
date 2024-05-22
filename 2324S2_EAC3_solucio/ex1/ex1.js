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

	// Funció per prestar un llibre
	prestar: function(idCopia, dataPrestec) {
		// Busca la còpia en els llibres de l'inventari
		for (let llibre of this.llibres) {
			if (llibre.copies.includes(idCopia)) {
				// Afegeix una nova operació de préstec
				llibre.prestecs.push({ idCopia: idCopia, dataPrestec: dataPrestec });
				return true; // Retorna true si el préstec s'ha fet amb èxit
			}
		}
		return false; // Retorna false si no es troba la còpia
	},

	// Funció per veure l'última operació de préstec a partir de l'últim llibre de l'inventari en funció de la data de préstec
	ultimaOperacio: function() {
		let ultimLlibre = null;
		let ultimaData = new Date(0); // Inicialitzem amb la data més petita possible

		inventari.llibres.forEach((llibre) => {
			llibre.prestecs.forEach((prestec) => {
				const dataPrestec = new Date(prestec.dataPrestec);
				if (dataPrestec > ultimaData) {
					ultimaData = dataPrestec;
					ultimLlibre = llibre;
				}
			});
		});

		return { titol: ultimLlibre.titol };

		/*let ultima = this.llibres[this.llibres.length - 1].prestecs.slice(-1)[0];
		let titol = this.llibres[this.llibres.length - 1].titol;
		return { titol: titol, idCopia: ultima.idCopia, dataPrestec: ultima.dataPrestec };*/
	},

	// Funció per calcular la quantitat total de llibres diferents
	quantitatTotalLlibres: function () {
		return this.llibres.length;
	},

	// Funció per afegir un nou llibre a l'inventari
	afegirLlibre: function (isbn, titol, autor, copies) {
		// Comprova si ja existeix un llibre amb aquest ISBN
		let existeixLlibre = this.llibres.some(llibre => llibre.isbn === isbn);
		if (!existeixLlibre) {
			// Comprova si alguna de les còpies ja existeix
			let existeixCopia = this.llibres.some(llibre => llibre.copies.some(copia => copies.includes(copia)));
			if (!existeixCopia) {
				// Si no existeix cap llibre amb aquest ISBN ni cap còpia, afegeix el nou llibre
				this.llibres.push({ isbn: isbn, titol: titol, autor: autor, copies: copies, prestecs: [] });
				return true; // Retorna true si s'afegeix amb èxit
			}
		}
		return false; // Retorna false si ja existeix un llibre amb aquest ISBN o alguna de les còpies ja existeix
	}
};


// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { inventari };
