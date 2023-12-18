document.addEventListener("DOMContentLoaded", function () {
    var accountMenu = document.querySelector('.nav-item a[href="#login-mamank"]');
    var loginForm = document.getElementById('login-mamank');

    accountMenu.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.style.display = 'flex'; // Menampilkan formulir login
    });

    // Tambahkan event listener pada tombol close (atau elemen lainnya) untuk menyembunyikan formulir login
    document.getElementById('close-btn').addEventListener('click', function () {
        loginForm.style.display = 'none';
    });
});