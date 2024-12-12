import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

// Select the canvas, buttons, and text elements
const canvas = document.getElementById('webgl-canvas');
const randomColorButton = document.getElementById('colors-btn');
const disappearButton = document.getElementById('disappear-btn');
const heading1 = document.querySelector('.hero h1');
const heading2 = document.querySelector('.hero h2');

// Initialize the 3D background with spheres
const sphereBackground = Spheres2Background(canvas, {
    count: 150,             // Number of spheres
    colors: [0xff0000, 0x00ff00, 0x0000ff], // Initial sphere colors
    minSize: 0.5,           // Minimum size of spheres
    maxSize: 2.5            // Maximum size of spheres
});

let spheresVisible = true; // Track visibility state of spheres

// Function to generate random colors
function generateRandomColors(count) {
    return Array.from({ length: count }, () => Math.random() * 0xffffff);
}

// Function to apply random colors to text elements
function applyRandomTextColors() {
    const randomColor1 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    const randomColor2 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    heading1.style.color = randomColor1; // Apply to h1
    heading2.style.color = randomColor2; // Apply to h2
    console.log('Text colors changed:', { h1: randomColor1, h2: randomColor2 });
}

// Add click event listener to the "Random Colors" button
randomColorButton.addEventListener('click', () => {
    const randomColors = generateRandomColors(3); // Generate 3 random colors
    sphereBackground.spheres.setColors(randomColors); // Apply new colors to spheres
    applyRandomTextColors(); // Apply new colors to text
});

// Add click event listener to the "Disappear" button
disappearButton.addEventListener('click', () => {
    if (spheresVisible) {
        sphereBackground.spheres.visible = false; // Hide spheres
        disappearButton.textContent = 'Appear Spheres'; // Update button text
    } else {
        sphereBackground.spheres.visible = true; // Show spheres
        disappearButton.textContent = 'Disappear Spheres'; // Update button text
    }
    spheresVisible = !spheresVisible; // Toggle visibility state
});

// Log initialization success
console.log('Sphere background initialized successfully!');
