const qr = document.getElementById('qr');
const qrimage = document.getElementById('qrimage');
const input = document.getElementById('input');
const button = document.getElementById('myButton');

button.addEventListener("click", qrGenerator);

function qrGenerator() {
    qrimage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
}

