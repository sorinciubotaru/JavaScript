// 1.1 ES6 - Metode
// Metode obiecte

// a) Object.assign() 
// aceasta metoda are mai multe utilitati: poate copia un obiect, poate clona duntr-un obiect
// sau poate concatena doua sau mai multe obiecte.

// copierea valorilor din alt obiect:

const masina = {
    marca: 'Dacia'
}

const proprietar = {
    nume: 'Ion',
    varsta: 55,
}

Object.assign(masina, proprietar);
console.log(masina);

// Clonarea unui obiect:
const proprietar2 = Object.assign({}, proprietar);
console.log(proprietar2);

// Imbinarea a doua obiecte: 

const persoana1 = {
    nume: 'Ion',
    varsta: 25,
    limbadDeProgramare: 'C++',
    masina: 'Ford'
}

const persoana2 = {
    nume: 'George',
    varsta: 34,
    limbajDeProgramare: 'Java',
    sport: 'fotbal'    
}

const persoanaRezultat = Object.assign({}, persoana1, persoana2);
console.log(persoanaRezultat);

// b) Object.entries() 
// Aceasta metoda returneaza cheile si valorile obiectului sub forma de matrice
console.log(Object.entries(persoanaRezultat));

// c) Object.getOwnPropertydescriptors()
// Aceasta metoda ne permite sa obtinem descriptorul
// de proprietati pentru un obiect
console.log(Object.getOwnPropertyDescriptors(persoanaRezultat));

// Noile metode Array
// a) Array.includes() 
// aceasta metoda verifoca daca exita un element in Array
let limbajeDeProgramare = ['Javascript', 'Java', 'C++', 'C'];
console.log(limbajeDeProgramare.includes('Java'));

// b) Array.find() 
// aceasta metoda ajuta la gasirea unui element din Array
// daca elementul cautat este gasit, acesta este rezultat, altfel revine nedefinit
console.log(limbajeDeProgramare.find(element => element === 'Javascript'));

// c) Array.findIndex() 
// aceasta metoda returneaza indexul elemntului gasit in locul valorii
console.log(limbajeDeProgramare.findIndex(element => element === 'Javascript'));

// d) Array.values() - returneaza un iterator Array al valorilor, astfel incat sa putem rula o bucla for pentru a extrage fiecare valoare a matricei
let iterator = limbajeDeProgramare.values();
for(let element of iterator) {
    console.log(element);
}

// e) Array.entries() - returneaza cheia si valoarea sub forma de matrice
iterator = limbajeDeProgramare.entries();
for(let element of iterator) {
    console.log(element);
}

// f) Array.from() - poate face mai multe lucruri executand o functie map() pe date
// poate converti un sir intr-un Array sau chiar sa creeze un Array nou din date.
let arr = [1, 2, 5 , 4, 6];
console.log(Array.from(arr));

let string = 'Hello World!';
console.log(Array.from(string));

let arr2 = [3, 5, 7, 2, 89];
console.log(Array.from(arr2, item => item * 2));

// g) Array.keys() - returneaza cheile matricei
console.log(limbajeDeProgramare.keys());

// Metode String

// a) String.repeat() - repeta un sir

console.log(string.repeat(2));

// b) String.includes() - functioneaza la fel ca Array.includes(). Returneaza un Boolean daca valoarea introdusa exista
console.log(string.includes('World'));

// Metode numerice
// a) Number.isNaN() - verifica valoarea numarului transmis si returneaza adevarat daca valoarea este NaN;
// altfel, se intoarce fals.
console.log(" ------------------ "); 
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(new Date()));

// c) Number.isInteger() - returneaza adevarat daca valoarea este numar intreg si fals altfel;
console.log(" ------------------ ");
let num = 67; 
console.log(Number.isInteger(num));
console.log(Number.isInteger(string));

// d) Number.isSafeInteger() - verifica daca numarul este sigur
console.log(" --- Number.isSafeInteger() ------------------ ");
console.log(Number.isSafeInteger(555));
console.log(Number.isSafeInteger(55.5));
console.log(Number.isSafeInteger(true));
console.log(Number.isSafeInteger(0/0));

// Number.isFinite() - verifica daca valoarea transmisa este un numar finit sau nu
console.log(" --- Number.isFinite() ------------------ ");
console.log(Number.isFinite(num));

// Obiect proxy() 
console.log(" --- Obiect proxy() ------------------ ");
// Cu proxy se pot gestiona
// -validarea datelor utilizatorului 
// -corectarea datelor
// -cautare proprietate
// -misiune
// -enumerare
// -invocarea functiei


// exemplul 1
console.log(" --- exemplul 1 ------------------ ");
const utilizator = {
    nume: 'Marcel',
    varsta: 22,
    limbajFavorit: 'JavaScript'
}

console.log(utilizator.masinaFavorita);
// se afiseaza undefined. In acest caz, putem folosi proxy pentru a crea un comportament 
// personalizat pentru eroare.

const handler = {
    get: (target, PropName) => {
        if(PropName in target) {
            return target.PropName;
        } else {
            return 'This property does not exist!';
        }
    }
}
let proxy = new Proxy(utilizator, handler);
console.log(proxy.masinaFavorita);

// exemplul 2
console.log(" --- exemplul 2 ------------------ ");
const validare = {
    set: (obj, propietate, value) => {
        if(propietate === 'year') {
            if(value > 2022) {
                throw new RangeError('The date is not valid');
            }
            return true;
        }
    }
}

// proxy = new Proxy(utilizator, validare);
// proxy.year = 2060;
// console.log(proxy.year);

// Obiect Set() - permite stocarea de valori unice. 
console.log(" --- Obiect Set() ------------------ ");
const colors = new Set();
colors.add('#fff');
console.log(colors.size);
colors.add('#000000');
colors.add('#f4f4f4');
colors.add('#0FF');
colors.add('#ccc');

console.log(colors.size);

colors.delete('#fff');
console.log(colors.size);
colors.clear();
console.log(colors.size);


// Diferenta dintre var, let si const
// Cu ajutorul lui var se declara variabile globale, vizibile in tot programul. Ele pot fi redeclare, spre exemplu am putea scrie: var variabila = 3; 
// var variabila = "continut" fara sa primim valoare. Variabilele declarate cu var se pot folosi inainte sa fie declarate, de exemplu: console.log(numar1);
// var numar1 si nu am primi eroare.

// Variabilele declarate cu let sunt block scope, sunt vizibile doar in blocul de cod in care le declaram. Nu se pot redeclara (let variabila = 1;
// let variabila = 2 - primim eroare) si nu se folosi inainte sa fie declarate;

// Datele declarate cu const sunt, de asemenea, block scope, sunt vizibile doar in blocul de cod in care le declaram. Nu isi pot schimba valoarea;
// De exemplu: const utilizator = {
    // nume: "Ion"
// }
// ne este permis sa schimbam numele utilizatorului, utilizator.nume = "Maria"; dar nu putem schimba structura utilizatorului (utilizator = {
    //nume: 'George',
    //varsta: 45 
// })

const fruct = {
    nume: 'mere'
}

fruct.nume = 'cirese';
console.log(fruct.nume);


// 1.3 Spread operator - permite descompunerea unui array sau a unui string acolo unde 0 sau mai multe argumente sunt asteptate
console.log(" ----- Spread operator ------------------- ");
// Daca dam un array ca parametru intr-o functie, o sa avem doar un parametru, dar daca de folosim ed operatorul spread, atunci fiecare element din vector devine parametru
const temperaturi = [33,23, 38, 29, 18, 34];
// daca in functia Math.min dam ca parametru vectorul de temperaturi, nu o sa se intoarca cea mai mica temperatura
console.log(Math.min(temperaturi));
// in schimb, daca ne folosim de operatorul spread, fiecare element din vector o sa fie parametru
console.log(Math.min(...temperaturi));
// daca folosim operatorul spread pe un string, acesta o sa fie descompus, fiecare caracter fiind parametru
console.log(..."PARAMETRU");
// cu ajutorul acestui operator putem uni doua array-uri
let parinti = ["Maria", "Ion"];
let copii = ["Ionut", "Marian", "Cosmin"];
let familie = [...parinti, ...copii];
console.log(familie);

// daca facem o copie a unui vector iar apoi modificam copia, schimbarile o sa afecteze si vectorul original
let copie = familie;
copie.push("Mariana");
console.log(familie);
// in schim putem sa ne folosim de spread pentru a face copie, iar schimbarile nu o sa mai afecteze primul vector,
// desi nu se realizeaza deep copy
let copie2 = [...familie];
copie2.push("Roxana");
console.log(familie);
console.log(copie2);
// intr-o matrice modificarile din copie afecteaza si matricea origila chiar daca ne folosim de operator
const xsi0 = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']
];
const copieXSi0 = [...xsi0];
copieXSi0[1][0] = 'x';
console.log(xsi0);

// putem sa folosim operatorul si ca sa combinam obiecte
const animal1 = {
    tip: 'pisica',
    varsta: 1,
    mancareFavorita: 'pliculet'
};

const animal2 = {
    varsta: 3,
    stapan: 'George',
    mancareFavorita: 'bobite'
};

const animal3 = {...animal1, ...animal2}; // in animal3 se copiaza tot din animal1, iar apoi se copiaza 
// tot din animal2, dar rescrie valorile care din animal1 (daca au aceleasi atribute)
console.log(animal3);

// 1.4 Obiecte. Cum se itereaza un obiect. Deep copy
// Daca incercam sa iteram un obiect foloosindu-ne de map(), forEach() sau for..of, o sa primim erori
// animal2.map(item => {
//     console.log(item);
// })                               
                                // pentru primele doua o sa ni se spuna ca animal2.map/.forEach nu este o functie
// animal2.forEach(item => {
//     console.log(item);
// })
                                // iar pentru ultima ca animal2 nu este iterabil
// for (const item of animal2) {
//     console.log(item);
// }

// putem folosi for..in

console.log(" ---- for..in ----");
for (const item in animal2) {
     console.log(animal2[item]);
}

// de asemenea ne putem folosi si de matricea returnata de metoda Object.entries() de la punctul 1.1,
// pe coloana 0 aflandu-se atributele obiectelor, iar pe coloana 1 valorile acestora
// in combinatie cu aceasta metoda, putem folosi si map() si forEach() si for..of
console.log(" ---- Object.entries() ----");
Object.entries(animal2).map(item => {
    console.log(item)
})

Object.entries(animal2).forEach(item => {
    console.log(`${item[1]}`);
})

for (const item of Object.entries(animal2)) {
    console.log(`${item[1]}`)
}

// pe langa aceasta metoda mai exista Object.keys() si Object.values()
// Object.keys() returneaza un vector format din atributele obiectului pe care il ia ca paramtru
console.log(" ---- Object.keys() ----");
for(const key of Object.keys(animal2)) {
    console.log(`${key} => ${animal2[key]}`)
}

// Object.values() returnaza un vector cu valorile atributelor unui obiect pe care il primeste ca pametru
console.log(" ---- Object.values() ----");
console.log(Object.values(animal2));

// Deep copy - se realizeaza o copie care nu are aceeasi adresa cu a obiectului original
console.log(' ---- Deep copy ----');
// putem face deep copy pentru un obiect folosindu-ne de JSON.stringify() si de JSON.parse()
// JSON.stringify() transforma un obiect intr-un JSON string
// JSON.parse() transforma un string intr-un obiect

let clona = JSON.parse(JSON.stringify(animal2));
clona.mancareFavorita = 'carne';
console.log(animal2);
console.log(clona);

// Arrays - accesor, iteration, mutator methods
// in javascript, array este un tip de data care consta intr-o lista de elemente
// accessor methods - sunt metodele care returneaza un nou array bazat pe cel original
// concat() - concateneaza 2 sau mai multe array-uri si formeaza unul nou
console.log(' ---- concat() ----');
const legume = ['castraveti', 'morcovi', 'castraveti','varza', 'ardei'];
const fructe = ['mere', 'pere', 'cirese', 'prune'];
const lactate = ['lapte', 'branza'];
const cosCumparaturi = fructe.concat(legume, lactate);
console.log(cosCumparaturi);

// join() - converteste elementele unui array in string, daca nu primeste niciun parametru,
// elementele o sa fie despartite prin virgula
console.log(' ---- join() ----');
const legumeString = legume.join(', ');
console.log(legumeString);

// slice() - copiaza o bucata din array in atul nou
const oParteDinLegume = legume.slice(1,3);
console.log(' ---- slice() ----');
console.log(oParteDinLegume);
// daca vrem sa copiem valori din punctul unui vector pana la fina, al doilea parametru nu mai este necesar
const panaLaFinal = legume.slice(1);
console.log(panaLaFinal);

// indexOf() - returneaza prima pozitie a unui element din array, daca elemntul nu se gasete in array, returneaza -1
console.log(' ---- indexOf() ----');
console.log(legume.indexOf('varza'));
console.log(legume.indexOf('rosii'));

// lastIndexOf() - functioneaza aproximativ la fel ca metoda de mai sus,
// doar ca returneaza ultima pozitie pe care apare elementul dat ca parametru
console.log(' ---- lastIndexOf() ----');
console.log(legume.lastIndexOf('castraveti'));


// Iteration methods - sunt metode care lucreaza cu fiecare element al unui qrray pe rand
// forEach() - apeleaza o functie pentru fiecare elemnt din array
console.log(' ------- Iteration methods -------');
console.log(' ---- forEach() ----');
legume.forEach(leguma => {
    console.log(...leguma);
});

// putem sa mai facem acest lucru si prin for
console.log(' ---- for ----');
for(let i = 0; i < legume.length; i++) {
    console.log(...legume[i]);
}

// map() - creeaza un nou array cu ajutorul functiei aplicata pe fiecare element din array
console.log(' ---- map() ----');
let legumeMap = legume.map(leguma => {
    leguma = leguma.toUpperCase();
    return leguma;
})

console.log(legumeMap);

// filter() - creeaza un nou array, cu elemente care indeplinesc o conditie, din primul array
console.log(' ---- filter() ----');
let aLegume = legume.filter(leguma => {
    return leguma[0] === 'a';
})

console.log(aLegume);

// reduce() - reduce un array la o singura valoare
console.log(' ---- reduce() ----');
console.log(arr);
let sum = arr.reduce((a, b) => {
    return a+b;
});
console.log(sum);

// ar mai fi si metodele  find() si findIndex() pe care le-am exemplificat la primul punct

// Mutator methods - sunt metode care modifica vectorul original
// pop() - sterge ultimul element din array 
console.log(' ------- Mutator methods -------');
console.log(' ---- pop() ----');
arr.pop();
console.log(arr);

// shift() - sterge primul element dintr-un array
console.log(' ---- shift() ----');
arr.shift();
console.log(arr);

// push() - adauga unul sau mai multe elemnte la sfarstul unui array
console.log(' ---- push() ----');
arr.push(24, 12)
console.log(arr);

// unshift() - adauga unul sau mai multe elemnte la inceputul vectorului
console.log(' ---- unshift() ----');
arr.unshift(45, 32);
console.log(arr);

// splice() - poate adauga sau sterge un element de pe orice pozitie din vector
// unshift() - adauga unul sau mai multe elemnte la inceputul vectorului
console.log(' ---- adaugare cu splice() ----');
arr.splice(2, 0, 78);
console.log(arr);

console.log(' ---- stergere cu splice() ----');
arr.splice(2, 1);
console.log(arr);

console.log(' ---- adaugare si stergere cu splice() ----');
arr.splice(2, 3, 55);
console.log(arr);

// reverse() - inverseaza ordinea elementelor in vector
console.log(' ---- reverse()----');
arr.reverse();
console.log(arr);

// fill() - inlocuieste valorile din vector cu elementul pe care metoda il primeste ca parametru
console.log(' ---- fill() ----');
arr.fill(30);
console.log(arr);
// putem sa inlocuim doar o parte din elementele vectorului
arr.fill(45, 1); // o sa inlocuiasca toate elementele cu 45, incepand de la pozitia 1
console.log(arr);
arr.fill(36, 1, 3); // o sa inlocuiasca elementele de la pozitia 1 pana la pozitia 3
console.log(arr);

// sort() - sorteaza elementele din vector
console.log(' ---- sort() ----');
arr.sort();
console.log(arr);
legume.sort();
console.log(legume);

// 1.6 Promise. Callback

// Promise - este o caracteristica a javascript care permite sa rezolvam situatii fara callback
// promise peimeste ca parametri doua functii, una in caz de succes si una in caz de esec


//Promise 
console.log(' ------- Promise. Callback -------');
console.log(' ---- Promise ----');
let bool = true;
let terminPrimulTask = new Promise(
    function (succes, esec) {
        if(bool) {
            succes('Am completat primul task!')
        } else{
            esec('Nu am completat primul task:(')
        }
    }
);

terminPrimulTask.then((mesaj) => {
    console.log(mesaj);
}).catch ((mesaj) => {
    console.log(mesaj);
});

// Callback - este o functie data ca argument in alta functie
console.log(' ---- Callback ----');
function afiseaza(parametru) {
    console.log(parametru);
}

function calculeazaSuma(a, b, callback) {
    let suma = a + b;
    callback(suma);
}

calculeazaSuma(3, 5, afiseaza);

// Async. Await
// Async - cuvantul async poate fi plasat in fata unei functii si inseamna ca acea functu=ie returneaza o promisiune
console.log(' ---- Async ----');
async function calculeazaScaderea(a, b) {
    return a-b;
}

calculeazaScaderea(3, 8).then((mesaj) => {
    console.log(mesaj);
})

// Await - este folosit in functiile async si face programul sa astepte pana cand promise returneaza rezultatul
console.log(' ---- Await ----');
async function asteapta() {
    let promise = new Promise((succes, esec) => {
        setTimeout(() => succes("Sfarsit!"), 100)
    });

    let result = await promise;

    console.log(result);
}

// Closures - permite variabileleor sa refere la scope-ul parintilor, chiar si dupa executia acestora
console.log(' ------- Closures -------');
function functieExterna(variabilaExterna) {
    const variabila = 'Buna';
    return function functieInterna(variabilaInterna)  {
        console.log(variabilaExterna);
        console.log(variabilaInterna);
        console.log(variabila);
    }
}

const functieNoua = functieExterna('in afara');
functieNoua('inauntru');