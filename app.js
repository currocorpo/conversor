document.addEventListener('DOMContentLoaded', () => {
  const celsiusInput = document.getElementById('celsius');
  const convertBtn = document.getElementById('convert-btn');
  const resultDiv = document.getElementById('result');

  function convertTemperature() {
    const celsiusValue = celsiusInput.value.trim();

    if (celsiusValue === '') {
      resultDiv.textContent = 'Por favor, introduce un número.';
      resultDiv.className = 'result error';
      return;
    }

    const celsius = parseFloat(celsiusValue);

    if (isNaN(celsius)) {
      resultDiv.textContent = 'Introduce un valor numérico válido.';
      resultDiv.className = 'result error';
      return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    // Formatear dynamicamente según sea entero o decimal
    const formattedFahrenheit = Number.isInteger(fahrenheit) ? fahrenheit : fahrenheit.toFixed(2);
    
    resultDiv.textContent = `${celsius} ºC → ${formattedFahrenheit} ºF`;
    resultDiv.className = 'result';
  }

  convertBtn.addEventListener('click', convertTemperature);

  // Permitir la conversión al pulsar "Enter" en el input
  celsiusInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      convertTemperature();
    }
  });
});