### Funksjoner

Fil: `oppgaver.js`. Du lager funksjonene til en værapp for Tromsø. Fyll ut funksjonene der det står `// TODO`. Nederst i fila sjekkes svarene automatisk. Kjør fila ofte og se om `FEIL` blir til `OK`.

**Minimum:** oppgave 1–3.

**Kort repetisjon**

En funksjon er kode med et navn som du kan bruke mange ganger. Den tar inn verdier (parametre) og sender et svar ut med `return`.

```js
function pluss(a, b) {      // a og b er parametre
  return a + b;             // svaret sendes ut
}

console.log(pluss(2, 3));   // 5
console.log(pluss(10, 1));  // 11
```

Uten `return` gir funksjonen `undefined`.

Data: temperaturer i Tromsø en uke i mørketida.
```js
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
```

#### Grunnleggende

| Oppgave | Funksjon | Situasjon | Skal returnere |
|---|---|---|---|
| 1 | `hilsen("Ola")` | Spiller logger inn på serveren | `"Hei, Ola!"` |
| 2 | `rektangelAreal(4, 5)` | Gulv i en Minecraft-hytte | `20` |
| 3 | `celsiusTilFahrenheit(100)` | Vennen i USA spør hvor kaldt det er | `212` (formel: `C * 9/5 + 32`) |

**Hint**

Alle funksjonene trenger bare én linje: `return ...;`. Se på `pluss` i repetisjonen over.

For hilsen: bruk backticks og `${}`:
```js
return `Hei, ${navn}!`;
```

#### Middels

| Oppgave | Funksjon | Situasjon | Skal returnere |
|---|---|---|---|
| 4 | `sum(tall)` | Første steg mot ukas snitt | Summen av alle tallene. Bruk `for`-løkke. |
| 5 | `gjennomsnitt(tall)` | Ukas snittemperatur | Gjennomsnittet. Gjenbruk `sum()`. |
| 6 | `antallUnderNull(tall)` | Trenger du vinterdekk? | Hvor mange tall som er under 0. |

**Hint oppgave 4**

1. Lag en variabel `total` som starter på 0. (Bruk `let` – den skal endres.)
2. Gå gjennom alle tallene med en `for`-løkke.
3. Legg hvert tall til `total`.
4. Returner `total` *etter* løkka.

```js
for (let i = 0; i < tall.length; i++) {
  // tall[i] er tallet du står på nå
}
```

**Hint oppgave 6**

Samme oppskrift som sum, men i stedet for å legge til tallet, teller du opp med `antall++` – men bare `if (tall[i] < 0)`.

#### Avansert

| Oppgave | Funksjon | Situasjon | Krav |
|---|---|---|---|
| 7 | `storste(tall)` | Varmeste dag | **Uten** `Math.max` og `.sort()` |
| 8 | `bareKuldegrader(tall)` | Bare kalde dager | Ny array med tall under 0. Originalen skal ikke endres. |
| 9 | `sorterStigende(tall)` | Rangering fra kaldest til varmest | **Uten** `.sort()`. Originalen skal ikke endres. |

**Hint oppgave 7**

Ta vare på «største hittil». Hvilken startverdi er trygg? (0 er *ikke* trygt når alle tallene er negative.)

**Hint oppgave 9**

Boblesortering: gå gjennom lista og sammenlign hvert par av naboer. Står de i feil rekkefølge, bytt dem. Gjenta til du går gjennom hele lista uten å bytte noe.

Lag en kopi først, så du ikke endrer originalen: `const kopi = [...tall];`

### Steg 3 – Oppgaver: Feilsøking

Fil: `steg3-feilsok.js`. Denne fila er skrevet av en elev for noen år siden. Den skal vise variabler, funksjoner, arrays og JSON, men den krasjer.

**Minimum:** oppgave 1.

#### Grunnleggende

**Oppgave 1.** Få fila til å kjøre uten feilmelding. Det er tre feil. Node viser bare én om gangen: fiks, kjør på nytt, finn neste.

**Hint 1**

To av feilene handler om at du ikke kan lage en ny `const` med et navn som allerede er brukt. Gi den nye variabelen et annet navn, eller bruk den gamle.

**Hint 2**

Den tredje feilen er i JSON-delen. Et objekt kan ikke stå «løst» i en `.js`-fil. Det må lagres i en variabel: `const skole = { ... };`. Sjekk også at det er komma mellom objektene i lista.

#### Middels

**Oppgave 2.** Fyll ut tabellen for de tre feilene du fant.

**Svar oppgave 2:**

| Linje | Feilmelding | Hva var galt? | Hvordan fikset du det? |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

#### Avansert

**Oppgave 3.** Det finnes en fjerde feil som *ikke* gir feilmelding. Se på de to funksjonene `toCelsius`. Endre første versjon slik at den returnerer `"metode 1"` og kjør. Hva skjer, og hvorfor?

**Hint**

Søk opp «JavaScript function hoisting». Hva skjer med funksjoner før koden kjøres?

**Svar oppgave 3:**

> _Skriv svaret ditt her._
