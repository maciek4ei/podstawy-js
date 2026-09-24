// Wzór: (litry / km) * 100
const km = prompt("ile przejechales km");
const litr = prompt("ile zuzyzyles paliwa");
const spalanie = (litr / km) * 100;
document.write("Srednie spalanie wynosi " + spalanie.toFixed(2) + "L na 100km");