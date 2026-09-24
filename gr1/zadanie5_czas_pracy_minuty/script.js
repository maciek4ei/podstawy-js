// Użyj Math.floor() i %
const min = prompt("Podaj liczbe minut");
const godzina = Math.floor(min / 60);
const minuta = min % 60;
document.write(min + ' minut to ' + godzina + ' godziny i ' + minuta + ' minut');
