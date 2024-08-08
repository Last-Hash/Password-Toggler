document.addEventListener('keydown', function(event) {
    if (event.key === 'Control') {
      const passwordInputs = document.querySelectorAll('input[type="password"]');
      passwordInputs.forEach(input => input.type = 'text');
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Control') {
      const passwordInputs = document.querySelectorAll('input[type="password"]');
      passwordInputs.forEach(input => input.type = 'password');
    }
  });
  