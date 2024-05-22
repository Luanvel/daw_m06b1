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

let rndCat = Math.floor(Math.random() * cites.cat.length);
let rndEsp = Math.floor(Math.random() * cites.esp.length);
let rndEng = Math.floor(Math.random() * cites.eng.length);

console.log(cites.cat[rndCat].frase + "\n" + cites.cat[rndCat].autor);
console.log(cites.esp[rndEsp].frase + "\n" + cites.esp[rndEsp].autor);
console.log(cites.eng[rndEng].frase + "\n" + cites.eng[rndEng].autor);