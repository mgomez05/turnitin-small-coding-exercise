// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {

    let promise = new Promise((resolve, reject) => {

        // Call the resolve function after ms milliseconds
        setTimeout(() => {
            resolve()
        }, ms)
    })

    return promise
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {


    // Set the "from" and "to" frames of the animation
    const keyframes = [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(100px)'}
    ]
    // Set the duration (in milliseconds) and number of times the animation will run
    const options = {
        duration: 1000,
        iterations: 1
    }

    // Animate the element using the variables defined above
    //  - The element will move 100px to the right,
    //    over the course of 1 second (1000 ms),
    //    and the animation will only occur once
    el.animate(keyframes, options);

    ////////////////////////
    // Alternate Solution //
    ////////////////////////

    // Set the style of the element to "relative" so it can be moved by the animation
    /*
    el.style.position="relative"

    // Create the animation style
    var style = document.createElement('style');
    style.innerHTML = '@keyframes animateRightStyle {from {left: 0px;} to {left: 100px;}}'
    document.head.appendChild(style);

    // Run the animation style "animateRightStyle" for 1 second on the element
    el.style.animation = "animateRightStyle 1s";
    */
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {

    // Convert the array to a set, thus elminating the duplicate items
    let arrayAsSet = new Set(xs)

    // Turn the set back into an array
    let uniqueItemArray = [...arrayAsSet]

    return uniqueItemArray
}


// Test out that the 3 function exercises work as expected
window.onload = function() {

    console.log("---------------------Running Tests for Exercises--------------------")

    // Test for Exercise 3
    console.log("--Running Test for Exercise 3--")
    let chars = ['A', 'B', 'A', 'C', 'B'];
    const uniqueCharArray = removeDuplicates(chars)

    console.log("Here is the original array:", chars)
    console.log("Here is the new array with only unique elements:", uniqueCharArray)

    // Test for Exercise 2
    console.log("--Running Test for Exercise 2--")
    const el = document.getElementById('square')

    console.log(el)
    animateRight(el)

    // Test for Exercise 1
    console.log("--Running Test for Exercise 1--")
    console.log("Calling promise with a delay of 1 second...")
    const promise = delay(1000)
    
    promise.then(
        (result) => {
            console.log("The promise finished executing!")
        },
        (error) => {
            console.log("There was an error")
        }
    )

};





