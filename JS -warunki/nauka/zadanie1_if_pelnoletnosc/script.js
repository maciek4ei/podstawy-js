// Twoje rozwiazanie
const wiek = Number(prompt("Podaj wiek:"));
let komunikat = "Niepełnoletni";
if (wiek >= 18) {
  komunikat = "Pełnoletni";
}
document.write("Wiek: " + wiek + "<br>" + komunikat);