function vegosszeg() {
     a = parseInt (document.querySelector('#tragto').value);
     b = parseInt (document.querySelector('#extra').value);

    document.querySelector('#osszeg').innerText =insertDecimal(a + b - 1 ) + " Pengő";
}

function insertDecimal(num) {
    return Number((num / 1000).toFixed(3));
 }

 function insertDecimal2(num) {
    return Number((num / 1000).toFixed(3));
 }
 
//  insertDecimal(99552) //995.52
//  insertDecimal("501") //5.01
