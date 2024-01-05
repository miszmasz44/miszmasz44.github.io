let output = document.getElementById('adres');
function zamowienie(event) {
   var allInputs = document.querySelectorAll('input');
   allInputs.forEach(singleInput => singleInput.value = '');
   alert("Twoje zamówienie zostało złożone! Przybliżony czas oczekiwania to 30 minut.");
}