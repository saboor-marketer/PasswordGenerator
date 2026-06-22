// Character sets
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// DOM Elements
const passwordOutput = document.getElementById('passwordOutput');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

// Update length value display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let charset = '';
    
    // Build character set based on user selection
    if (uppercaseCheckbox.checked) charset += UPPERCASE;
    if (lowercaseCheckbox.checked) charset += LOWERCASE;
    if (numbersCheckbox.checked) charset += NUMBERS;
    if (symbolsCheckbox.checked) charset += SYMBOLS;
    
    // Validate at least one character type is selected
    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }
    
    // Generate random password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    // Display password
    passwordOutput.value = password;
    
    // Update strength indicator
    updateStrengthIndicator(password);
}

// Calculate and display password strength
function updateStrengthIndicator(password) {
    let strength = 0;
    
    // Length contribution
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (password.length >= 16) strength += 1;
    
    // Character type contribution
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Map strength to percentage and color
    let percentage, color, text;
    
    switch (strength) {
        case 0:
        case 1:
            percentage = 20;
            color = '#dc3545';
            text = 'Very Weak';
            break;
        case 2:
            percentage = 40;
            color = '#fd7e14';
            text = 'Weak';
            break;
        case 3:
            percentage = 60;
            color = '#ffc107';
            text = 'Fair';
            break;
        case 4:
            percentage = 80;
            color = '#20c997';
            text = 'Good';
            break;
        case 5:
        case 6:
            percentage = 90;
            color = '#0d6efd';
            text = 'Strong';
            break;
        default:
            percentage = 100;
            color = '#198754';
            text = 'Very Strong';
    }
    
    strengthBar.style.width = percentage + '%';
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = text;
    strengthText.style.color = color;
}

// Copy password to clipboard
async function copyToClipboard() {
    const password = passwordOutput.value;
    
    if (!password) {
        alert('No password to copy! Generate a password first.');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(password);
        
        // Visual feedback
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            Copied!
        `;
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                Copy
            `;
        }, 2000);
    } catch (err) {
        alert('Failed to copy password. Please try again.');
        console.error('Copy failed:', err);
    }
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

// Generate initial password on page load
window.addEventListener('DOMContentLoaded', generatePassword);
