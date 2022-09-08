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

    // Set the style of the element to "relative" so it can be moved by the animation
    el.style.position="relative"

    // Create the animation style
    var style = document.createElement('style');
    style.innerHTML = '@keyframes animateRightStyle {from {left: 0px;} to {left: 100px;}}'
    document.head.appendChild(style);

    // Run the animation style "animateRightStyle" for 1 second on the element
    el.style.animation = "animateRightStyle 1s";
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


// Test out that animateRight() works as expected
window.onload = function() {
    console.log("Hello world")

    const el = document.getElementById('square')

    console.log(el)
    animateRight(el)
};




