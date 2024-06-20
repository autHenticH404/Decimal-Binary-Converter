// Decimal to Binary Conversion
document.getElementById('decimal-to-binary-btn').addEventListener('click', function() {
    var decimalInput = document.getElementById('decimal-input').value;
    var binaryOutput = document.getElementById('binary-output');
  
    if (decimalInput === '') {
      binaryOutput.textContent = '0';
      return;
    }
  
    var decimal = parseInt(decimalInput, 10);
    var binary = decimal.toString(2);
  
    binaryOutput.textContent = binary;
  });
  
  // Binary to Decimal Conversion
  document.getElementById('binary-to-decimal-btn').addEventListener('click', function() {
    var binaryInput = document.getElementById('binary-input').value;
    var decimalOutput = document.getElementById('decimal-output');
  
    if (binaryInput === '') {
      decimalOutput.textContent = '0';
      return;
    }
  
    var binary = binaryInput.trim();
    if (!/^[01]+$/.test(binary)) {
      decimalOutput.textContent = 'Invalid binary input';
      return;
    }
  
    var decimal = parseInt(binary, 2);
    decimalOutput.textContent = decimal;
  });Console.log("");