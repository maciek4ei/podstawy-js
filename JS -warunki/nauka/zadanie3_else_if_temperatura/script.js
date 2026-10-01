const t = Number(prompt("Podaj temperaturę (°C):"));
let opis;
if (t < 0) {
  opis = "mróz";
} else if (t <= 15) {
  opis = "chłodno";
} else if (t <= 25) {
  opis = "ciepło";
} else {
  opis = "gorąco";
}
document.write(t + " °C, " + opis);
