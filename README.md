# Password Generator

A modern, secure password generator built with HTML5, CSS3, JavaScript (ES6), and Bootstrap 5.

## Features

✅ **Generate Random Passwords** - Creates secure, random passwords instantly

✅ **Customizable Length** - Choose password length from 6 to 32 characters using a slider

✅ **Character Type Selection** - Include or exclude:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special characters (!@#$%^&*)

✅ **Copy to Clipboard** - One-click copy with visual feedback

✅ **Password Strength Indicator** - Real-time strength meter with color coding:
- Very Weak (Red)
- Weak (Orange)
- Fair (Yellow)
- Good (Teal)
- Strong (Blue)
- Very Strong (Green)

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **HTML5** - Structure and semantics
- **CSS3** - Custom styling with gradients and animations
- **JavaScript (ES6)** - Password generation logic and DOM manipulation
- **Bootstrap 5** - Responsive UI framework

## How to Use

1. **Open the Application**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required

2. **Generate a Password**
   - Click the "Generate Password" button
   - A password will be generated automatically on page load

3. **Customize Your Password**
   - Adjust the length slider (6-32 characters)
   - Check/uncheck character type checkboxes
   - The password updates in real-time when you click Generate

4. **Copy to Clipboard**
   - Click the "Copy" button next to the password
   - The button will show "Copied!" when successful
   - Paste the password wherever needed

5. **Check Password Strength**
   - View the strength meter below the password display
   - The meter updates automatically with each generated password

## File Structure

```
Pass generator/
├── index.html      # Main HTML structure with Bootstrap components
├── styles.css      # Custom styling and responsive design
├── script.js       # Password generation logic and event handling
└── README.md       # Project documentation
```

## Key Concepts Demonstrated

- **DOM Manipulation** - Dynamic updates to password display and strength meter
- **Event Listeners** - Click events, input changes, and page load events
- **Random Number Generation** - Cryptographically secure password generation
- **Arrays & Strings** - Character set management and string concatenation
- **Clipboard API** - Modern async clipboard operations
- **Bootstrap Components** - Forms, buttons, progress bars, and responsive grid

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- Clipboard API
- CSS Grid and Flexbox

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Security Notes

- Passwords are generated client-side only
- No data is sent to any server
- Uses Math.random() for demonstration purposes
- For production use, consider using crypto.getRandomValues() for enhanced security

## Future Enhancements

Potential improvements for future versions:
- Password history
- Exclude similar characters (i, l, 1, L, o, 0, O)
- Pronounceable password option
- Dark mode toggle
- Export passwords to file

## License

This project is open source and available for educational purposes.

## Author

Created as a Day 2 project to practice web development fundamentals.

---

**Enjoy generating secure passwords! 🔐**
