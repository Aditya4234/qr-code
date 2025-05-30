function generateQRCode() {
  const qrInput = document.getElementById("qrInput").value;
  const qrCodeDiv = document.getElementById("qrCode");

  if (!qrInput.trim()) {
    alert("Please enter some text or a URL");
    return;
  }

  qrCodeDiv.innerHTML = ""; 

  QRCode.toCanvas(qrInput, { width: 200 }, function (error, canvas) {
    if (error) {
      console.error(error);
      alert("Error generating QR Code");
      return;
    }
    qrCodeDiv.appendChild(canvas);
  });
}
