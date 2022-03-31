function showImg(parameter) {
    document.querySelector('#picture').src = parameter
}

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
//vegosszeg

// function Video() {
//   var x = document.getElementById("vid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } 
//   else {
//     x.style.display = "none";
//   }
// }
//  video

