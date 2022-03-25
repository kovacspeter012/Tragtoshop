function vegosszeg() {
     a = parseInt (document.querySelector('#tragto').value);
     b = parseInt (document.querySelector('#extra').value);

    document.querySelector('#osszeg').innerText = a + b - 1;
}

