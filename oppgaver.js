// =====================================================
// Oppgaver: Funksjoner
// Nederst i filen sjekkes svarene dine automatisk.
// Mål: flest mulig linjer med OK.
// =====================================================
//
// HUSKELAPP
//   const x = 5;   -> verdien kan IKKE endres (bruk som standard)
//   let y = 0;     -> verdien KAN endres (tellere, summer)
//
//   function pluss(a, b) {   // a og b er parametre (verdier inn)
//     return a + b;          // return sender svaret ut
//   }
//   pluss(2, 3);             // kaller funksjonen -> 5
//
//   Uten return gir funksjonen undefined, og sjekken viser FEIL.
//   Mer forklaring i oppgaveark-del1.md (steg 2).
// =====================================================

// Data: temperaturer i Tromsø en uke i mørketida (grader celsius).
// Tenk deg at du lager en liten værapp – funksjonene under er motoren i appen.
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];


// ---------- GRUNNLEGGENDE ----------

// Oppgave 1: Når en spiller logger inn på Minecraft-serveren, skal hun få en hilsen.
//     hilsen("Ola") -> "Hei, Ola!"
//     Tips: bruk en template literal: `Hei, ${navn}!`
function hilsen(navn) {
  // TODO
}

// Oppgave 2: Hvor mange blokker trengs til gulvet i en hytte på 4 x 5 blokker?
//     Returner arealet av et rektangel (bredde ganger høyde)
function rektangelAreal(bredde, hoyde) {
  // TODO
}

// Oppgave 3: En venn i USA spør på Discord hvor kaldt det er i Tromsø.
//     Gjør om celsius til fahrenheit.  Formel: F = C * 9/5 + 32
//     (Den motsatte formelen er C = (F - 32) * 5/9.)
function celsiusTilFahrenheit(celsius) {
  // TODO
}


// ---------- MIDDELS ----------

// Oppgave 4: Værappen skal regne ut ukas gjennomsnitt. Første steg: summen.
//     Returner summen av alle tallene i en array. Bruk en for-løkke.
function sum(tall) {
  // TODO
}

// Oppgave 5: Returner gjennomsnittet av tallene. Gjenbruk sum()!
function gjennomsnitt(tall) {
  // TODO
}

// Oppgave 6: Hvor mange dager med kuldegrader var det? (Trenger du vinterdekk?)
//     Returner HVOR MANGE tall som er under 0. Bruk for-løkke + if.
function antallUnderNull(tall) {
  // TODO
}


// ---------- AVANSERT ----------

// Oppgave 7: Hva var den varmeste dagen? Samme logikk som en highscore-liste.
//     Returner det største tallet i arrayen – UTEN Math.max og UTEN .sort()
function storste(tall) {
  // TODO
}

// Oppgave 8: Returner en NY array med bare kuldegradene (tall under 0).
//     Den opprinnelige arrayen skal ikke endres.
function bareKuldegrader(tall) {
  // TODO
}

// Oppgave 9: Sorter tallene fra lavest til høyest – UTEN .sort().
//     Lag din egen sorteringsalgoritme (f.eks. boblesortering).
//     Returner en NY array, ikke endre den opprinnelige.
function sorterStigende(tall) {
  // TODO
}


// =====================================================
// AUTOMATISK SJEKK – ikke endre noe under denne linja
// =====================================================
function sjekk(beskrivelse, faktisk, forventet) {
  const likt = JSON.stringify(faktisk) === JSON.stringify(forventet);
  console.log(`${likt ? "OK  " : "FEIL"}  ${beskrivelse}  (fikk: ${JSON.stringify(faktisk)}, forventet: ${JSON.stringify(forventet)})`);
}

console.log("\n--- GRUNNLEGGENDE ---");
sjekk("hilsen('Ola')", hilsen("Ola"), "Hei, Ola!");
sjekk("rektangelAreal(4, 5)", rektangelAreal(4, 5), 20);
sjekk("celsiusTilFahrenheit(100)", celsiusTilFahrenheit(100), 212);
sjekk("celsiusTilFahrenheit(-40)", celsiusTilFahrenheit(-40), -40);

console.log("\n--- MIDDELS ---");
sjekk("sum(temperaturer)", sum(temperaturer), -33);
sjekk("sum([])", sum([]), 0);
sjekk("gjennomsnitt([2, 4, 6])", gjennomsnitt([2, 4, 6]), 4);
sjekk("antallUnderNull(temperaturer)", antallUnderNull(temperaturer), 6);

console.log("\n--- AVANSERT ---");
sjekk("storste(temperaturer)", storste(temperaturer), 1);
sjekk("storste([-5, -2, -9])", storste([-5, -2, -9]), -2);
sjekk("bareKuldegrader(temperaturer)", bareKuldegrader(temperaturer), [-4, -6, -2, -8, -11, -3]);
sjekk("sorterStigende(temperaturer)", sorterStigende(temperaturer), [-11, -8, -6, -4, -3, -2, 1]);
sjekk("temperaturer er uendret", temperaturer, [-4, -6, -2, 1, -8, -11, -3]);