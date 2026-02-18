```javascript
// Variables for dimensions
let length = 5
let width = 3

// Calculations
let area = length * width
let perimeter = 2 * (length + width)

// Displaying the work and answers
basic.showString(length + " * " + width + " = " + area)
basic.showString("Area: " + area + " cm^2")

basic.pause(1000)

basic.showString("2 * (" + length + " + " + width + ") = " + perimeter)
basic.showString("Perimeter: " + perimeter + " cm")
