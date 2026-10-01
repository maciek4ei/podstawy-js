const dzien = Number(prompt("Podaj numer dnia (1–7):"));
let nazwa;
switch (dzien) {
  case 1:
    nazwa = "poniedziałek";
    break;
  case 2:
    nazwa = "wtorek";
    break;
  case 3:
    nazwa = "środa";
    break;
  case 4:
    nazwa = "czwartek";
    break;
  case 5:
    nazwa = "piątek";
    break;
  case 6:
    nazwa = "sobota";
    break;
  case 7:
    nazwa = "niedziela";
    break;
  default:
    nazwa = "Nieznany dzień";
}
document.write(nazwa);
