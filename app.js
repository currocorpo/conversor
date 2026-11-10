document.addEventListener('DOMContentLoaded', () => {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const toFahrenheitBtn = document.getElementById('to-fahrenheit-btn');
  const toCelsiusBtn = document.getElementById('to-celsius-btn');
  const resultDiv = document.getElementById('result');

  function formatValue(value) {
    return Number.isInteger(value) ? value : parseFloat(value.toFixed(2));
  }

  function convertToFahrenheit() {
    const rawValue = celsiusInput.value.trim();

    if (rawValue === '') {
      resultDiv.textContent = 'Por favor, introduce un valor en Celsius.';
      resultDiv.className = 'result error';
      return;
    }

    const celsius = parseFloat(rawValue);

    if (isNaN(celsius)) {
      resultDiv.textContent = 'Introduce un número válido.';
      resultDiv.className = 'result error';
      return;
    }

    const fahrenheit = formatValue((celsius * 9 / 5) + 32);
    fahrenheitInput.value = fahrenheit;
    resultDiv.textContent = `${celsius} ºC → ${fahrenheit} ºF`;
    resultDiv.className = 'result';
  }

  function convertToCelsius() {
    const rawValue = fahrenheitInput.value.trim();

    if (rawValue === '') {
      resultDiv.textContent = 'Por favor, introduce un valor en Fahrenheit.';
      resultDiv.className = 'result error';
      return;
    }

    const fahrenheit = parseFloat(rawValue);

    if (isNaN(fahrenheit)) {
      resultDiv.textContent = 'Introduce un número válido.';
      resultDiv.className = 'result error';
      return;
    }

    const celsius = formatValue((fahrenheit - 32) * 5 / 9);
    celsiusInput.value = celsius;
    resultDiv.textContent = `${fahrenheit} ºF → ${celsius} ºC`;
    resultDiv.className = 'result';
  }

  toFahrenheitBtn.addEventListener('click', convertToFahrenheit);
  toCelsiusBtn.addEventListener('click', convertToCelsius);

  celsiusInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') convertToFahrenheit();
  });

  fahrenheitInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') convertToCelsius();
  });
});