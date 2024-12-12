# Planetary Weight Calculator

This is a simple web application that calculates your weight on different planets based on their gravitational pull. Just input your weight on Earth, select a planet, and get the result instantly!

---

## Features
- Enter your weight in kilograms.
- Choose a planet from the dropdown menu.
- Instantly see your weight adjusted for the planet's gravity.
- Easy-to-use interface with a clean design.

---

## Live Demo
You can check out the live version of the app here:  
[Planetary Weight App] : (https://planetaryweight.netlify.app/)  

---

## Technologies Used
- **HTML**: For the structure of the page.
- **CSS**: For styling and layout.
- **JavaScript**: For the calculation logic.

---

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/planetary-weight-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd planetary-weight-calculator
   ```
3. Open `index.html` in your web browser.

---

## Code Explanation
### Gravity Values
The gravitational ratios used for each planet:
| Planet   | Gravity Multiplier |
|----------|---------------------|
| Mercury  | 0.38                |
| Venus    | 0.91                |
| Earth    | 1                   |
| Mars     | 0.38                |
| Jupiter  | 2.34                |
| Saturn   | 0.93                |
| Uranus   | 0.92                |
| Neptune  | 1.12                |

### JavaScript Logic
- The `parseFloat()` function converts user input into a number.
- The weight is multiplied by the planet's gravity multiplier to calculate the adjusted weight.
- The result is displayed dynamically.

------------------------------------------

#### Let’s code, learn, and grow together! 🚀  

------------------------------------------
