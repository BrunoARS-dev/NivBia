let currentScreen = 1;

function nextScreen() {
  document.getElementById(`screen${currentScreen}`).classList.add('hidden');
  currentScreen++;
  document.getElementById(`screen${currentScreen}`).classList.remove('hidden');
}

function showTicket() {
  document.getElementById('ticketModal').classList.remove('hidden');
}

function closeTicket() {
  document.getElementById('ticketModal').classList.add('hidden');
}
