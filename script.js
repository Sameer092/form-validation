// Form switching functionality
function toggleForms() {
  document.getElementById('signInForm').classList.toggle('hidden');
  document.getElementById('signUpForm').classList.toggle('hidden');
  // Clear all forms and errors when switching
  document.getElementById('loginForm').reset();
  document.getElementById('registrationForm').reset();
  clearErrors();
}

// Clear all error messages
function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element => element.textContent = '');
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
      input.classList.remove('invalid');
      input.classList.remove('valid');
  });
}

// Validation patterns
const patterns = {
  username: /^[a-zA-Z0-9_]{4,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?[\d\s-]{10,}$/,
  fullName: /^[a-zA-Z\s]{2,50}$/
};

// Validation messages
const messages = {
  username: "Username must be 4-20 characters long and can contain letters, numbers, and underscores",
  password: "Password must be at least 8 characters long and include letters, numbers, and special characters",
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number (minimum 10 digits)",
  fullName: "Please enter a valid full name (letters and spaces only)",
  age: "Age must be between 18 and 100",
  country: "Please select a country",
  confirmPassword: "Passwords do not match"
};

// Validate single input field
function validateField(input, pattern) {
  const field = input.id;
  const errorElement = document.getElementById(`${field}Error`);
  let isValid = true;

  // Clear previous validation
  input.classList.remove('invalid', 'valid');
  errorElement.textContent = '';

  // Required field validation
  if (!input.value.trim()) {
      errorElement.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      input.classList.add('invalid');
      return false;
  }

  // Special validation for different fields
  switch(field) {
      case 'age':
          const age = parseInt(input.value);
          if (isNaN(age) || age < 18 || age > 100) {
              errorElement.textContent = messages.age;
              isValid = false;
          }
          break;
      case 'confirmPassword':
          const password = document.getElementById('password').value;
          if (input.value !== password) {
              errorElement.textContent = messages.confirmPassword;
              isValid = false;
          }
          break;
      case 'country':
          if (!input.value) {
              errorElement.textContent = messages.country;
              isValid = false;
          }
          break;
      default:
          // Pattern validation for other fields
          if (pattern && !pattern.test(input.value)) {
              errorElement.textContent = messages[field];
              isValid = false;
          }
          break;
  }

  input.classList.add(isValid ? 'valid' : 'invalid');
  return isValid;
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  isValid = validateField(this.querySelector('#loginUsername'), patterns.username) && isValid;
  isValid = validateField(this.querySelector('#loginPassword'), patterns.password) && isValid;

  if (isValid) {
      alert('Login form submitted successfully!');
      this.reset();
      clearErrors();
  }
});

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // Validate all fields
  isValid = validateField(this.querySelector('#fullName'), patterns.fullName) && isValid;
  isValid = validateField(this.querySelector('#username'), patterns.username) && isValid;
  isValid = validateField(this.querySelector('#email'), patterns.email) && isValid;
  isValid = validateField(this.querySelector('#password'), patterns.password) && isValid;
  isValid = validateField(this.querySelector('#confirmPassword')) && isValid;
  isValid = validateField(this.querySelector('#age')) && isValid;
  isValid = validateField(this.querySelector('#phone'), patterns.phone) && isValid;
  isValid = validateField(this.querySelector('#country')) && isValid;

  if (isValid) {
      alert('Registration form submitted successfully!');
      this.reset();
      clearErrors();
  }
});

// Add real-time validation on input
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', function() {
      const pattern = patterns[this.id] || patterns[this.name];
      validateField(this, pattern);
  });
});