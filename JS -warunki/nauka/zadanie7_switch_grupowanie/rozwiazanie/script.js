const ocena = Number(prompt("Podaj ocenę (1–6):"));
let opis;
switch (ocena) {
  case 5:
  case 6:
    opis = "wyróżnienie";
    break;
  case 3:
  case 4:
    opis = "ocena pozytywna";
    break;
  case 1:
  case 2:
    opis = "do poprawy";
    break;
  default:
    opis = "nieznana ocena";
}
document.write("Ocena " + ocena + ": " + opis);
