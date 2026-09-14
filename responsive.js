const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
  bodyHalaman.classList.toggle('light-mode');

  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = 'Mode Gelap 🌙';
  } else {
    btnTema.textContent = 'Mode Terang ☀️';
  }
});


const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault();
  elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
  elemenModal.classList.remove('show');
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.classList.remove('show');
  }
});


const greeting = document.querySelector('#greeting');
const jam = new Date().getHours();

if (jam >= 5 && jam < 11) {
  greeting.textContent = 'Selamat Pagi 🌅';
} else if (jam >= 11 && jam < 15) {
  greeting.textContent = 'Selamat Siang ☀️';
} else if (jam >= 15 && jam < 18) {
  greeting.textContent = 'Selamat Sore 🌤️';
} else {
  greeting.textContent = 'Selamat Malam 🌙';
}

/* Avatar */
const avatarBox = document.querySelector('#avatarBox');

avatarBox.addEventListener('click', function() {
avatarBox.classList.toggle('rotate');
});