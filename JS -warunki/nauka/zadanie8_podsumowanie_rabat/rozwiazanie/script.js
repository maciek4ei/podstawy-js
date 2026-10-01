const kwota = Number(prompt("Kwota koszyka (zł):"));
const karta = prompt("Czy masz kartę stałego klienta? (tak/nie)");
const kod = prompt("Kod promocyjny (lub BRAK):");
let tekst;
if (kwota < 0) {
  tekst = "Błędna kwota";
} else {
  let rabat = 0;
  if (kwota >= 200 && karta === "tak") {
    rabat = 15;
  } else if (kwota >= 200) {
    rabat = 10;
  } else if (kwota >= 100 || kod === "START") {
    rabat = 5;
  } else {
    rabat = 0;
  }
  const doZaplaty = kwota - (kwota * rabat) / 100;
  tekst =
    "Kwota: " +
    kwota +
    " zł<br>Rabat: " +
    rabat +
    "%<br>Do zapłaty: " +
    doZaplaty +
    " zł";
}
document.write(tekst);
