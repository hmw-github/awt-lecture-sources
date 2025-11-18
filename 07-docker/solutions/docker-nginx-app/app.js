let clicks = 0;

const button = document.getElementById('clickBtn');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    clicks++;
    counter.textContent = `Clicks: ${clicks}`;
    
    // Kleine Animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
});

console.log('App loaded successfully!');