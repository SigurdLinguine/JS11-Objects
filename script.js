let firma = {
    firmaNavn: "Moach Paster",
    antallAnsatte: 3,
    bilListe: [" M3", " Unimog", " i118", " Model S", " Camaro", " Astra"],
    betaltSkatt: 16 + "kr",
    nettsideNavn: "moachpaster.com"
}

let ids = ["firmaNavn", "antallAnsatte", "bilListe", "betaltSkatt", "nettsideNavn"]
let functions = ["byttFirmaNavn", "leggTilNyBil", "slettForsteBil", "fjernNettside", "leggTilStatus", "skrivUtNokler", "skrivUtForsteBil", "skrivUtSisteBil"]

console.log(firma)

for (i of functions) {
    document.getElementById(i).style.visibility = "hidden";
}

function skrivUt() {

    for (i of ids) {
    document.getElementById(i).innerHTML = firma[i];
    }

    for (i of functions) {
        document.getElementById(i).style.visibility = "visible";
    }
    document.getElementById("skrivUt").style.visibility = "hidden"
}

function byttFirmaNavn() {
    document.getElementById("firmaNavn").innerHTML = prompt("Hva vil du bytte firmanavn til?")
}

function leggTilNyBil() {
    firma.bilListe.push(" " +  prompt("Hvilken bil vil du legge til?"))
    document.getElementById("bilListe").innerHTML = firma.bilListe
}

function slettForsteBil() {
    firma.bilListe.shift()
    document.getElementById("bilListe").innerHTML = firma.bilListe
}

function fjernNettside() {
    delete firma.nettsideNavn
    document.getElementById("nettsideNavn").innerHTML = ""
    document.getElementById("fjernNettside").style.visibility = "hidden"
    console.log(firma)
}

function leggTilStatus() {
    firma.status = true
    document.getElementById("leggTilStatus").style.visibility = "hidden"
    console.log(firma)
}

function skrivUtNokler() {
    document.getElementById("nokler").innerHTML = Object.keys(firma)
    console.log(Object.keys(firma))
    // document.getElementById("skrivUtNokler").style.visibility = "hidden"
}

function skrivUtForsteBil() {
    document.getElementById("forsteBil").innerHTML = "Den første bilen i billisten er " + firma.bilListe[0]
}

function skrivUtSisteBil() {
    document.getElementById("sisteBil").innerHTML = "Den siste bilen i billisten er " + firma.bilListe[firma.bilListe.length - 1]
}

// Library

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}]

for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus == false) {
        console.log("Du har ikke lest " + library[i].title + " av " + library[i].author)
    }
}