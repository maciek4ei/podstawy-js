// Oblicz Gross i Tax
const stawka_VAT = 0.23;
const produkt = prompt("podaj nazwe produtku");
const cena_netto = Number(prompt("Wpisz cene netto produktu"));
let cena_podatku = cena_netto * stawka_VAT;
let kwota_brutto = cena_podatku + cena_netto;
document.write("Towar " + produkt + ' Cena netto ' + cena_netto.toFixed(2) + ' PLN cena VAT ' + cena_podatku.toFixed(2) + 'PLN i brutto ' + kwota_brutto.toFixed(2) + ' PLN');

