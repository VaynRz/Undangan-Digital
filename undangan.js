const slider = document.getElementById("slider");

let sedangDrag = false;
let posisiAwal = 0;
let scrollAwal = 0;

slider.addEventListener("mousedown", function(e) {
    sedangDrag = true;
    posisiAwal = e.pageX;
    scrollAwal = slider.scrollLeft;
});

window.addEventListener("mouseup", function() {
    sedangDrag = false;
});

slider.addEventListener("mouseleave", function() {
    sedangDrag = false;
});

slider.addEventListener("mousemove", function(e) {
    if (!sedangDrag) return;

    e.preventDefault();

    const jarak = e.pageX - posisiAwal;
    slider.scrollLeft = scrollAwal - jarak;
});


//Pop Up Lokasi
const popupPeta = document.getElementById("popupPeta");

function bukaPeta() {
    popupPeta.style.display = "flex";
    popupPeta.setAttribute("aria-hidden", "false");
    popupPeta.querySelector(".tutup-popup").focus();
}

function tutupPeta() {
    popupPeta.style.display = "none";
    popupPeta.setAttribute("aria-hidden", "true");
    document.querySelector(".tombol-lokasi").focus();
}

popupPeta.addEventListener("click", function(event) {
    if (event.target === popupPeta) {
        tutupPeta();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" &&
        popupPeta.style.display === "flex") {
        tutupPeta();
    }
});

//Pop Up Foto
const popupGaleri = document.getElementById("popupGaleri");
const gambarPopup = document.getElementById("gambarPopup");

let fotoTerakhir = null;

function bukaFoto(elemen) {
    fotoTerakhir = elemen;

    const gambar = elemen.querySelector("img");

    gambarPopup.src = gambar.src;
    gambarPopup.alt = gambar.alt;

    popupGaleri.style.display = "flex";
    popupGaleri.setAttribute("aria-hidden", "false");

    popupGaleri.querySelector(".tutup-galeri").focus();
}

function tutupFoto() {
    popupGaleri.style.display = "none";
    popupGaleri.setAttribute("aria-hidden", "true");

    if (fotoTerakhir) {
        fotoTerakhir.focus();
    }
}

popupGaleri.addEventListener("click", function(event) {
    if (event.target === popupGaleri) {
        tutupFoto();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" &&
        popupGaleri.style.display === "flex") {
        tutupFoto();
    }
});