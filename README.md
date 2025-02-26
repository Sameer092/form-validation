# Form Validation Project

A vanilla JavaScript form validation project with SignIn and SignUp forms.

## Features

### Sign In Form
- Username validation
- Password validation with special character requirements

### Sign Up Form using regex
1. Full Name (letters and spaces only)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/1.png)
2. Username (4-20 characters, alphanumeric and underscore)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/2.png)
3. Email (valid email format)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/3.png)
4. Password (minimum 8 characters, must include letters, numbers, and special characters)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/4.png)
5. Confirm Password (must match password)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/5.png)
6. Age (must be between 18-100)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/6.png)
7. Phone Number (minimum 10 digits)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/7.png)
8. Country Selection (required)
![Form Validation Preview](https://raw.githubusercontent.com/Sameer092/form-validation/main/assets/8.png)

## Validation Features
- Real-time validation as user types
- Visual feedback with red/green borders
- Detailed error messages
- Form submission validation
- Clear error handling
- Mobile responsive design

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Regular Expressions for validation

## Form States
1. Initial State: Clean form with no validation
2. Error State: Red borders and error messages for invalid inputs
3. Success State: Green borders for valid inputs
4. Submission State: All fields must be valid before form submission

## Validation Rules
- Username: 4-20 characters, alphanumeric and underscore only
- Password: Minimum 8 characters, must include letters, numbers, and special characters
- Email: Must follow standard email format
- Phone: Minimum 10 digits, supports international format
- Age: Must be between 18 and 100
- All fields are required