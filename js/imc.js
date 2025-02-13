
function calculateIMC() {
   
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

   
    const imc = weight / (height * height);

    let category = '';
    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        category = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    
    document.getElementById('result').innerHTML = `
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p class="category">${category}</p>
    `;
}
