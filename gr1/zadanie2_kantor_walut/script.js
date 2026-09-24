// Kantor wymiany walut
const euro = 4.30;
const dolar = 3.90
let kwota = parseFloat(prompt("ile zloty chcesz wymienic"));
let wynik_euro = kwota / euro
let wynik_dolar = kwota / dolar
document.write(kwota + 'zloty to ' + ' ' + wynik_euro.toFixed(2) + ' euro' + '<br>');
document.write(kwota + 'zloty to' + ' ' + wynik_dolar.toFixed(2) + ' dolarow');
