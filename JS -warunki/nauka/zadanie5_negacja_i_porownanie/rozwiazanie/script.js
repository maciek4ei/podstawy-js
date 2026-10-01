const login = prompt("Login:");
const haslo = prompt("Hasło:");
const zgoda = prompt("Akceptujesz regulamin? (tak/nie)");
const ok = login === "uczen" && haslo === "1234" && zgoda === "tak";
let komunikat;
if (!ok) {
  komunikat = "Odmowa dostępu";
} else {
  komunikat = "Zalogowano";
}
document.write(komunikat);
