// 1. Setup variables
let length = 5
let width = 3

// 2. Perform the actual math
let area = length * width
let perimeter = 2 * (length + width)

// 3. Show the Area math: "5 * 3 = 15"
// Then show the final answer with units
basic.showString(length + " * " + width + " = " + area)
basic.showString("Area: " + area + " cm^2")

basic.pause(1000) // Pause for 1 second

// 4. Show the Perimeter math: "2 * (5 + 3) = 16"
// Then show the final answer with units
basic.showString("2 * (" + length + " + " + width + ") = " + perimeter)
basic.showString("Perimeter: " + perimeter + " cm")