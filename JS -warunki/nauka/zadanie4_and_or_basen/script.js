const wiek = Number(prompt("Podaj wiek:"));
const plywa = prompt("Czy umie pływać? (tak/nie)");
const opiekun = prompt("Czy jest z opiekunem? (tak/nie)");
const wstep = plywa === "tak" && (wiek >= 12 || opiekun === "tak");
let komunikat;
if (wstep) {
  komunikat = "Wstęp dozwolony";
} else {
  komunikat = "Brak wstępu";
}
document.write(komunikat);
