const texts = ["Developer", "Designer"]; 
let currentTextIndex = 0;
let index = 0;
const element = document.getElementById('developer');

// Create a cursor element and add it to the h1 once
let cursor = document.createElement('span');
cursor.classList.add('cursor');
element.appendChild(cursor);

// Function to update the text with the cursor at the end
function updateText() {
    const currentText = texts[currentTextIndex];
    element.innerHTML = currentText.substring(0, index); // Add letters progressively
    element.appendChild(cursor); // Append the cursor to the end of the text
}

// Function to type one letter at a time
function type() {
    const currentText = texts[currentTextIndex];

    if (index < currentText.length) {
        index++;
        updateText(); // Update text and position the cursor
        setTimeout(type, 200); // Delay between letters
    } else {
        // Once the text is fully typed, wait a moment before deleting it
        setTimeout(deleteText, 1000); 
    }
}

// Function to delete the text letter by letter
function deleteText() {
    const currentText = texts[currentTextIndex];

    if (index > 0) {
        index--;
        updateText(); // Update text and position the cursor
        setTimeout(deleteText, 100); // Delay between each letter deletion
    } else {
        // Switch to the next word
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 500); // Delay before starting the next word
    }
}

// Function to animate counters
function animateCounter(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Combined window.onload to start both animations when the page loads
window.onload = function() {
    type(); // Initialize typing animation
    animateCounter("years", 0, 5, 2000);        
    animateCounter("projects", 0, 110, 2000);   
    animateCounter("clients", 0, 6, 2000);      
};




