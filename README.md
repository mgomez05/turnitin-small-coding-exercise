# Turnitin Small Coding Exercises

## About This Project

Hello Turnitin Team, or others who may be viewing this repository. This repo was created to complete the coding challenges provided by Turnitin. It provides solutions for the following 3 functions:

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
 
## How to Run This Program ##

1. To see this program in action, clone the repository and open `index.html` in a modern browser

2. Once you load the page, you will automatically run 3 tests, each associated with one of the coding exercise functions
    - For exercises 1, 2, 3, you can open Developer Tools on the web page and see console output detailing the effects of the tests
    - For exercise 2, you should also see a 1-second animation of a red square moving from left to right across the screen

3. To examine or add to the existing tests, open `exercises.js` in an editor and find the section of code where we overwrite the `window.onload` function 

```
// Test out that the 3 function exercises work as expected
window.onload = function() {

    console.log("---------------------Running Tests for Exercises--------------------")

    // Lots of testing code...

};
```

## Other Information

The `index.html` file is provided as a means of testing out the functions specified above

The **Works Cited / Useful Links** section below gives credit to the different sources
that were used to create the solutions to these exercises

## Works Cited / Useful Links

### For **Exercise 1**
- Information on Promises in ES6 - Tania Rascia -- ES6 Syntax and Feature Overview
   - https://www.taniarascia.com/es6-syntax-and-feature-overview/

### For **Exercise 2**
- Main Solution Links:
   - Documentation for the `Element.animate()` function
      - https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
   - Documentation for the `translate()` CSS function
      - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
- Alternate Solution Links:
   - W3Schools -- How to animate an object from left to right:
      - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_animation
   - MDN web -- The `animation-duration` CSS property
      - https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
   - StackOverflow -- How to dynamically create `keyframes`:
      - https://stackoverflow.com/questions/18481550/how-to-dynamically-create-keyframe-css-animations

### For **Exercise 3**
   - For removing duplicates from an array:
      - https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/