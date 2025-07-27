const qrBtn = document.getElementById('qrBtn');
const qrInput = document.getElementById('qrInput');
const qrCode = document.querySelector('.qr__code');
const qrImage = document.getElementById('qrImage');

qrBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    qrCode.classList.add('display__on')

    const qrValue = qrInput.value.trim();
    if(qrValue === ''){
        alert('Please enter a URL or text to generate QR Code');
        return;
    }
    
    qrBtn.innerHTML = 'Generating QR Code';

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${qrValue}`;

    qrBtn.innerHTML = 'Generate QR Code';
})