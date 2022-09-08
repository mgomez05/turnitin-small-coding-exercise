# Turnitin Small Coding Exercises

## About This Project

Hello Turnitin Team, or others who may be viewing this private repository. This repo was created to complete the coding challenges provided by Turnitin. It provides solutions for the following 3 functions:

```
// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
}
```
These solutions can be found in the `exercises.js` file

**NOTE:** Exercise 2 has two solutions:

1. **Main Solution**: This uses the `Element.animate()` function and the `translateX()` function to animate the element from left to right

2. **Alternate Solution**: This animates the element from left to right by updating various styles in the webpage using JavaScript. It adds a `keyframes` CSS style to the webpage, and updates the `animation` and `position` properties of the element `el`

The `index.html` file is provided as a means of testing out the functions specified above

The **Works Cited / Useful Links** section below gives credit to the different sources
that were used to create the solutions to these exercises

## Works Cited / Useful Links

### For **Exercise 1**
- Information on Promises in ES6 - Tania Rascia -- ES6 Syntax and Feature Overview
   - https://www.taniarascia.com/es6-syntax-and-feature-overview/

### For **Exercise 2**
- Main Solution Links:
   - Documentation for the Element.animate() function
      - https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
   - Documentation for the translate() CSS function
      - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
- Alternate Solution Links:
   - W3Schools -- How to animate an object from left to right:
      - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_animation
   - MDN web - The animation-duration CSS property
      - https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
   - StackOverflow -- How to dynamically create keyframes:
      - https://stackoverflow.com/questions/18481550/how-to-dynamically-create-keyframe-css-animations

### For **Exercise 3**
   - For removing duplicates from an array:
      - https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/