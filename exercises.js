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

    // Run the animation style "example" for 1 second on the element
    el.style.animation = "example 1s";
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




