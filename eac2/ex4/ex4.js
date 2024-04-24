let cites = {
    cat: [
        { frase: "Tria una feina que estimis, i no hauràs de treballar un sol dia de la teva vida.", autor: "Confuci" },
        { frase: "La pitjor lluita és la que no es fa.", autor: "Karl Marx" },
        { frase: "Construïm massa murs i no suficients ponts.", autor: "Isaac Newton" },
        { frase: "La vida és el que passa mentre estàs ocupat fent altres plans.", autor: "John Lennon" }
    ],
    esp: [
        { frase: "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada.", autor: "Séneca" },
        { frase: "La victoria más difícil es la victoria sobre uno mismo.", autor: "Aristóteles" },
        { frase: "La felicidad no brota de la razón, sino de la imaginación.", autor: "Immanuel Kant" }
    ],
    eng: [
        { frase: "Your attitude, not your aptitude, will determine your altitude.", autor: "Zig Ziglar" },
        { frase: "I have no special talents. I'm just passionately curious.", autor: "Albert Einstein" }
    ]
};

const randomPhrase = (quoteArray) => {
    const randomQuotePosition = Math.floor((Math.random()) * quoteArray.length);
    return quoteArray[randomQuotePosition];
}

const showPhrases = () => {
    const randomQuoteCat = randomPhrase(cites.cat);
    console.log(randomQuoteCat.frase);
    console.log(randomQuoteCat.autor);

    const randomQuoteEsp = randomPhrase(cites.esp);
    console.log(randomQuoteEsp.frase);
    console.log(randomQuoteEsp.autor);

    const randomQuoteEng = randomPhrase(cites.eng);
    console.log(randomQuoteEng.frase);
    console.log(randomQuoteEng.autor);
}

showPhrases();
