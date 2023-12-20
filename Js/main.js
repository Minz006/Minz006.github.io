// aktif skroll
window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("geser", window.scrollY > 0);
});

//mengatur list dan garis list
const menuIcon = document.getElementById("garis");
const menuList = document.getElementById("list");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hilang");
});

// Tautan navigasi saat digulir
const bagian = document.querySelectorAll('section');
const tautanNavigasi = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
  bagian.forEach(bagianSeksi => {
    let posisiScroll = window.scrollY;
    let ofset = bagianSeksi.offsetTop - 150;
    let tinggi = bagianSeksi.offsetHeight;
    let id = bagianSeksi.getAttribute('id');

    if (posisiScroll >= ofset && posisiScroll < ofset + tinggi) {
      tautanNavigasi.forEach(tautan => {
        tautan.classList.remove('aktif');
        document.querySelector('nav ul li a[href*=' + id + ']').classList.add('aktif');
      });
    }
  });
};

// Fungsi ini dipanggil ketika formulir dikirim
function kirimForm() {
  // Mendapatkan elemen formulir berdasarkan ID
  var form = document.getElementById("formKehadiran");

  // Membuat objek FormData untuk mengumpulkan data formulir
  var dataForm = new FormData(form);

// menampilkan inpo
showInfoAlert('tunggu sebentar...');

  // Mengirim data formulir ke server (Google Apps Script)
  fetch("https://script.google.com/macros/s/AKfycbyA0dA5SHephvUZiqFT-2ZIDQHfJEbYqLvSC88u4dpyVz7d7ekMAQ5dXbzeC7vJFO_1/exec", {
      method: "POST",
      body: dataForm
    })
    .then(response => response.json())
    .then(data => {
      // Menampilkan peringatan sukses menggunakan alert
      showSuccessAlert("Sukses, data disimpan di baris ke " + JSON.stringify(data.row));
      // Tambahkan tindakan lebih lanjut yang ingin Anda ambil setelah mengirim formulir
      // Setelah data terkirim, reset formulir
      form.reset();
    })
    .catch(error => {
      // Menampilkan peringatan error menggunakan alert
      showErrorAlert('terjadi masalah, data tdk dpt disimpan');
      console.error("Error:", error);
    });
}

//mengatur tanggal 
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Bulan dimulai dari 0, sehingga tambahkan 1
var formattedDate = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

document.getElementById('TGL').value = formattedDate;


//animasi skroll
var atribut = document.querySelectorAll('div');
atribut.forEach((kelas) => {
  kelas.classList.add('content');
});
document.addEventListener('DOMContentLoaded', () => {
  let pengamat = new IntersectionObserver((entri) => {
    entri.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('show');
      } else {
        item.target.classList.remove('show');
      }
    });
  }, { threshold: 0.5 });
  let konten = document.querySelectorAll('.content');
  konten.forEach((el) => pengamat.observe(el));
});
